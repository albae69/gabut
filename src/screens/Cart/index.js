import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import BottomNav from '../../components/BottomNav';
import {Cart as CartCard} from '../../components/Card';

import {cartStyle} from './cartStyle';

const Cart = ({navigation}) => {
  let data = [];

  return (
    <>
      <View style={cartStyle.container}>
        <Text style={cartStyle.title}>KERANJANG</Text>
        <View style={cartStyle.wrapPrice}>
          <View>
            <Text style={cartStyle.total}>Total Bayar :</Text>
            <Text style={cartStyle.total}>
              Rp.
              {data
                .reduce((sum, item) => {
                  return sum + item.price;
                }, 0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>
          </View>
          <Icons name="delete" size={25} color="red" />
        </View>
        <View style={cartStyle.wrapCard}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(item) => <CartCard {...item.item} />}
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <View style={cartStyle.bottomNavContainer}>
          <BottomNav
            homePress={() => navigation.navigate('dashboard')}
            cartPress={() => navigation.navigate('cart')}
            cartColor="#5C88CB"
          />
        </View>
      </View>
    </>
  );
};

export default Cart;
