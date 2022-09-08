import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getPhotos} from '../store/slices/gallerySlice';
import {useAppDispatch, useAppSelector} from '../store/store';
import {PhotoType} from '../types';

const Photo: React.FC<PhotoType & any> = ({smallPhoto, userName, fullPhoto, navigation}) => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector(state => state.gallery.photos);
  useEffect(() => {
    dispatch(getPhotos());
    console.log(photos);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{userName}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ShowPhoto', {
        screen: 'ShowPhoto',
        fullPhoto})}>
        <Image style={styles.image} source={{uri: smallPhoto}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    fontWeight: '800',
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default Photo;
