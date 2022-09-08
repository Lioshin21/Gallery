import {getData} from './../../api';
import {GalleryState, PhotoType} from './../../types';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const getPhotos = createAsyncThunk<PhotoType[]>(
  'products/getPhotos',
  async () => {
    const photos = await getData().then(response => response);

    const payload: Array<PhotoType> = [];

    photos.map((element: any) => {
      payload.push({
        id: element.id,
        fullPhoto: element.urls.full,
        smallPhoto: element.urls.small,
        userName: element.user.username,
      });
    });

    return payload;
  },
);

const gallerySlice = createSlice({
  name: 'photos',
  initialState: {
    photos: [],
  } as GalleryState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPhotos.fulfilled, (state, action) => {
      state.photos = [...action.payload];
    });
  },
});

export default gallerySlice.reducer;
