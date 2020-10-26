import React from 'react';
import {View, ImageBackground, Text} from 'react-native';

import {categortStyle} from './categoryStyle';

const Category = ({name, src}) => {
  return (
    <View style={categortStyle.container}>
      <ImageBackground source={src} style={{flex: 1}}>
        <Text style={categortStyle.category}>{name}</Text>
      </ImageBackground>
    </View>
  );
};

export default Category;
