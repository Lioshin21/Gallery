import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
// Redux
import {getPhotos} from '../store/slices/gallerySlice';
import {useAppDispatch, useAppSelector} from '../store/store';
// Types
import {PhotoType} from '../types';
// Components
import Photo from '../components/Photo';

const Gallery = () => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector(state => state.gallery.photos);

  useEffect(() => {
    dispatch(getPhotos());
  }, []);

  return (
    <View>
      <ScrollView>
        {photos.map((photo: PhotoType) => {
          return (
            <Photo
              userName={photo.userName}
              fullPhoto={photo.fullPhoto}
              key={photo.id}
              id={photo.id}
              smallPhoto={photo.smallPhoto}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Gallery;
