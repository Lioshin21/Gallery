import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ShowPhotoProps} from '../../App';

const ShowPhoto = ({route, navigation}: ShowPhotoProps) => {
  const fullPhoto = route.params;

  return (
    <>
      {console.log(fullPhoto)}
      <View>
        <Image style={styles.image} source={{uri: JSON.stringify(fullPhoto)}} />
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
