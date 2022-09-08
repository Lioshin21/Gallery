import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
// Types
import {ShowPhotoProps} from '../../App';

const ShowPhoto = ({route}: ShowPhotoProps) => {

  const {fullPhoto} = route.params;

  return (
    <>
      <View>
        <Image style={styles.image} source={{uri: fullPhoto}} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ShowPhoto;
