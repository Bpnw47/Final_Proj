import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { type RootState } from './index'; 
// กำหนด Type สำหรับ Apartment
export interface Apartment {
    id: string; // normalized from backend _id
    name: string;
    detail: string;
    price: number;
} 
// State ของอพาร์ทเมนต์
interface ApartmentState {
    apartments: Apartment[];
    loading: boolean;
    error: string | null;
} 
// State เริ่มต้น
const initialState: ApartmentState = {
    apartments: [],
    loading: false,
    error: null,
}; 
// Base URL สำหรับ API
const API_URL = 'http://localhost:3000/apartments'; 
// Async Thunks สำหรับ API calls (ใช้ Axios GET POST PUT DELETE)
export const fetchApartments = createAsyncThunk('apartments/fetchApartments', async () => {
    const response = await axios.get<any[]>(API_URL);
    // Helper to extract id from various backend shapes
    const getId = (item: any): string | undefined => {
        if (!item) return undefined;
        if (typeof item._id === 'string') return item._id;
        if (item._id && typeof item._id === 'object') {
            if (item._id.$oid) return item._id.$oid;
            if (typeof item._id.toString === 'function') return item._id.toString();
        }
        if (typeof item.id === 'string') return item.id;
        return undefined;
    };

    // Normalize backend _id to id (string) for frontend
    const data = response.data.map(item => ({
        id: getId(item) ?? String(item.id ?? ''),
        name: item.name,
        detail: item.detail,
        price: item.price,
    } as Apartment));
    return data;
});

export const addApartment = createAsyncThunk('apartments/addApartment', async (newApartment: {
    name: string;
    detail: string;
    price: number
}) => {
    const response = await axios.post<any>(API_URL, newApartment);
    const getId = (item: any): string | undefined => {
        if (!item) return undefined;
        if (typeof item._id === 'string') return item._id;
        if (item._id && typeof item._id === 'object') {
            if (item._id.$oid) return item._id.$oid;
            if (typeof item._id.toString === 'function') return item._id.toString();
        }
        if (typeof item.id === 'string') return item.id;
        return undefined;
    };

    // backend returns object with _id
    const created: Apartment = {
        id: getId(response.data) ?? String(response.data.id ?? ''),
        name: response.data.name,
        detail: response.data.detail,
        price: response.data.price,
    };
    return created;
});

export const updateApartment = createAsyncThunk('apartments/updateApartment', async (updatedApartment: Apartment) => {
    const response = await axios.put<any>(`${API_URL}/${updatedApartment.id}`, updatedApartment);
    const getId = (item: any): string | undefined => {
        if (!item) return undefined;
        if (typeof item._id === 'string') return item._id;
        if (item._id && typeof item._id === 'object') {
            if (item._id.$oid) return item._id.$oid;
            if (typeof item._id.toString === 'function') return item._id.toString();
        }
        if (typeof item.id === 'string') return item.id;
        return undefined;
    };

    // Normalize response
    const updated: Apartment = {
        id: getId(response.data) ?? updatedApartment.id,
        name: response.data.name,
        detail: response.data.detail,
        price: response.data.price,
    };
    return updated;
});

export const deleteApartment = createAsyncThunk('apartments/deleteApartment', async (id: string) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
});

// Redux Slice 
const apartmentSlice = createSlice({
    name: 'apartments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Apartments
            .addCase(fetchApartments.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchApartments.fulfilled, (state, action: PayloadAction<Apartment[]>) => {
                state.loading = false;
                state.apartments = action.payload;
            })
            .addCase(fetchApartments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch apartments';
            })
            // Add Apartment
            .addCase(addApartment.fulfilled, (state, action: PayloadAction<Apartment>) => {
                state.apartments.push(action.payload);
            })
            // Update Apartment
            .addCase(updateApartment.fulfilled, (state, action: PayloadAction<Apartment>) => {
                const index = state.apartments.findIndex(apartment => apartment.id === action.payload.id);
                if (index !== -1) {
                    state.apartments[index] = action.payload;
                }
            })
            // Delete Apartment
            .addCase(deleteApartment.fulfilled, (state, action: PayloadAction<string>) => {
                state.apartments = state.apartments.filter(apartment => apartment.id !== action.payload);
            });
    },
});

export default apartmentSlice.reducer;

// Selectors 
export const selectApartments = (state: RootState) => state.apartments.apartments;
export const selectLoading = (state: RootState) => state.apartments.loading;
export const selectError = (state: RootState) => state.apartments.error;