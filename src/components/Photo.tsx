import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// Types
import {PhotoType} from '../types';
// Navigation
import { useNavigation } from '@react-navigation/native';
import { ShowPhotoProps } from '../../App';


const Photo: React.FC<PhotoType> = ({smallPhoto, userName, fullPhoto}) => {

  const navigation = useNavigation<ShowPhotoScreenNavigationProp>();
  type ShowPhotoScreenNavigationProp = ShowPhotoProps['navigation'];
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{userName}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ShowPhoto', {fullPhoto})}>
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
