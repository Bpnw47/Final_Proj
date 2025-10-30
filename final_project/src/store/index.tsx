import { configureStore } from '@reduxjs/toolkit';
import apartmentReducer from './apartmentSlice';
const store = configureStore({
    reducer: {
        apartments: apartmentReducer,
    },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;