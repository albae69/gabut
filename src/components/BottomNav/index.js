import React from 'react';
import {View, Text} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import {bottomNavStyle} from './bottomNavStyle';

const BottomNav = ({cartColor, homeColor, homePress, cartPress}) => {
  return (
    <View style={bottomNavStyle.container}>
      <View style={bottomNavStyle.wrapIcons}>
        <Icons
          name="home"
          size={30}
          color={homeColor || 'white'}
          onPress={homePress}
        />
        <Icons
          name="cart"
          size={30}
          color={cartColor || 'white'}
          onPress={cartPress}
        />
      </View>
    </View>
  );
};

export default BottomNav;
