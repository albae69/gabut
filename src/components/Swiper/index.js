import React from 'react';
import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper';

import img from '../../assets/images/curlybraces.png';
import {swiperStyle} from './swiperStyle';

const SwiperComponent = () => {
  return (
    <View style={swiperStyle.container}>
      <Swiper
        autoplay={true}
        autoplayTimeout={5}
        dotColor="white"
        <Image source={img} style={swiperStyle.img} />
        <Image source={img} style={swiperStyle.img} />
        <Image source={img} style={swiperStyle.img} />
      </Swiper>
    </View>
  );
};

export default SwiperComponent;
