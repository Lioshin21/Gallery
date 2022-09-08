import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import gallerySlice from './slices/gallerySlice';

const store = configureStore({
  reducer: {
    gallery: gallerySlice,
  },
});

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
