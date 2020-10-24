import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';

import Button from '../../components/Button';
import BottomNav from '../../components/BottomNav';
import {Cart as CartCard} from '../../components/Card';

import {cartStyle} from './cartStyle';

const Cart = ({navigation}) => {
  let data = [
    {
      id: 0,
      title: 'Baterai Laptop Dell Latitude e6410',
      price: 200000,
      qty: 1,
      img: null,
    },
    {
      id: 1,
      title: 'Keyboard Laptop Dell Latitude e6410',
      price: 200000,
      qty: 1,
      img: null,
    },
    {
      id: 2,
      title: 'Adaptor Laptop Dell Latitude e6410',
      price: 150000,
      qty: 1,
      img: null,
    },
  ];

  return (
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
        <Button
          containerStyle={cartStyle.btn}
          title="HAPUS SEMUA"
          titleStyle={cartStyle.btnTitleStyle}
        />
      </View>
      <View style={cartStyle.wrapCard}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(item) => <CartCard {...item.item} />}
        />
      </View>
      <View style={cartStyle.bottomNavContainer}>
        <BottomNav
          homePress={() => navigation.navigate('dashboard')}
          cartPress={() => navigation.navigate('cart')}
          cartColor="#5C88CB"
        />
      </View>
    </View>
  );
};

export default Cart;
