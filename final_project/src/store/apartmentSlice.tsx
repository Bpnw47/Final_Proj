import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { type RootState } from './index'; 
// กำหนด Type สำหรับ Apartment
export interface Apartment {
    id: number;
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
const API_URL = 'http://localhost:3000/Apartment'; 
// Async Thunks สำหรับ API calls (ใช้ Axios GET POST PUT DELETE)
export const fetchApartments = createAsyncThunk('apartments/fetchApartments', async () => {
    const response = await axios.get<Apartment[]>(API_URL);
    return response.data;
});

export const addApartment = createAsyncThunk('apartments/addApartment', async (newApartment: {
    name: string;
    detail: string;
    price: number
}) => {
    const response = await axios.post<Apartment>(API_URL, newApartment);
    return response.data;
});

export const updateApartment = createAsyncThunk('apartments/updateApartment', async (updatedApartment: Apartment) => {
    const response = await axios.put<Apartment>(`${API_URL}/${updatedApartment.id}`, updatedApartment);
    return response.data;
});

export const deleteApartment = createAsyncThunk('apartments/deleteApartment', async (id: number) => {
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
            .addCase(deleteApartment.fulfilled, (state, action: PayloadAction<number>) => {
                state.apartments = state.apartments.filter(apartment => apartment.id !== action.payload);
            });
    },
});

export default apartmentSlice.reducer;

// Selectors 
export const selectApartments = (state: RootState) => state.apartments.apartments;
export const selectLoading = (state: RootState) => state.apartments.loading;
export const selectError = (state: RootState) => state.apartments.error;