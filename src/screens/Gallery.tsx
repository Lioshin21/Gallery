import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {getPhotos} from '../store/slices/gallerySlice';
import {useAppDispatch, useAppSelector} from '../store/store';
import {PhotoType} from '../types';
import Photo from '../components/Photo';
import {GalleryProps} from '../../App';

const Gallery = ({navigation}: GalleryProps) => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector(state => state.gallery.photos);
  useEffect(() => {
    dispatch(getPhotos());
    console.log(photos);
  }, []);

  return (
    <View>
      <ScrollView style={styles.container}>
        {photos.map((photo: PhotoType) => {
          return (
            <Photo
              navigation={navigation}
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

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default Gallery;
