import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {itemStyle} from './itemStyle';
import img from '../../../assets/images/curlybraces.png';

const Item = () => {
  const [state, setState] = useState(false);

  return (
    <View style={itemStyle.container}>
      <Image source={img} style={itemStyle.img} />
      <View style={itemStyle.wrapTitle}>
        <Text style={itemStyle.title}>GATAU</Text>
        <Icon
          name="heart"
          size={20}
          color={state ? 'red' : 'white'}
          onPress={() => setState(!state)}
        />
      </View>
      <Text style={itemStyle.price}>Rp.MAHAL</Text>
    </View>
  );
};

export default Item;
