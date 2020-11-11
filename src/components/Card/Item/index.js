import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

import {itemStyle} from './itemStyle';

const Item = ({wishlist, setWishList, title, price, image, onPress}) => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <Pressable style={itemStyle.container} onPress={onPress}>
      <Image source={image} style={itemStyle.img} />
      <View style={itemStyle.wrapTitle}>
        <Text style={itemStyle.title}>{title}</Text>
        {isLogin ? (
          <Icon
            name="heart"
            size={20}
            color={wishlist}
            onPress={() => setWishList(!wishlist)}
          />
        ) : (
          <Icon
            name="heart"
            size={20}
            color={wishlist}
            onPress={() =>
              alert('you must login before add item into wishlist')
            }
          />
        )}
      </View>
      <Text style={itemStyle.price}>Rp.{price}</Text>
    </Pressable>
  );
};

export default Item;
