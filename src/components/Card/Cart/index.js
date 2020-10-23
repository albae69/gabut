import React from 'react';
import {View, Text} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import {cardCartStyle} from './cardCartStyle';

const Cart = ({title, price, qty}) => {
  return (
    <View style={cardCartStyle.container}>
      <View style={cardCartStyle.row}>
        <View style={cardCartStyle.wrapImg} />
        <View style={cardCartStyle.wrapText}>
          <Text
            style={[
              cardCartStyle.title,
              title.length > 10 ? {fontSize: 12} : {fontSize: 18},
            ]}>
            {title}
          </Text>
          <Text style={cardCartStyle.price}>
            Rp.{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Text>
        </View>
      </View>
      <View style={cardCartStyle.row}>
        <Icons name="delete" size={25} color="red" style={cardCartStyle.mr} />
        <Icons
          name="minus"
          size={25}
          color="#43D9BE"
          style={cardCartStyle.ml}
        />
        <Text style={[cardCartStyle.qty, cardCartStyle.ml]}>{qty}</Text>
        <Icons name="plus" size={25} color="#43D9BE" style={cardCartStyle.ml} />
      </View>
    </View>
  );
};

export default Cart;
