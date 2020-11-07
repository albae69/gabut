import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {itemStyle} from './itemStyle';
import img from '../../../assets/images/curlybraces.png';

const Item = () => {
  const [state, setState] = useState(false);
  const isLogin = useSelector((state) => state.auth.isLogin);

  const navigation = useNavigation();

  return (
    <Pressable
      style={itemStyle.container}
      onPress={() => navigation.navigate('detail')}>
      <Image source={img} style={itemStyle.img} />
      <View style={itemStyle.wrapTitle}>
        <Text style={itemStyle.title}>GATAU</Text>
        {isLogin ? (
          <Icon
            name="heart"
            size={20}
            color={state ? 'red' : 'white'}
            onPress={() => setState(!state)}
          />
        ) : (
          <Icon
            name="heart"
            size={20}
            color="white"
            onPress={() =>
              alert('you must login before add item into wishlist')
            }
          />
        )}
      </View>
      <Text style={itemStyle.price}>Rp.MAHAL</Text>
    </Pressable>
  );
};

export default Item;
