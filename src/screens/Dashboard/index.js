import React, {useEffect} from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../../components/Header';
import BottomNav from '../../components/BottomNav';
import SwiperComponent from '../../components/Swiper';
import {Category, Item} from '../../components/Card';

import {dashboardStyle} from './dashboardStyle';
import laptop from '../../assets/images/laptop.jpg';
import curly from '../../assets/images/curlybraces.png';
import gaming from '../../assets/images/gaming.jpg';
import pc from '../../assets/images/pc.jpg';
import smartphone from '../../assets/images/smartphone.jpg';

const {width} = Dimensions.get('window');

const Dashboard = ({navigation}) => {
  const auth = useSelector((state) => state.auth);
  const items = useSelector((state) => state.items);

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('isLogin', value);
    } catch (e) {
      //
    }
  };

  if (auth.isLogin) {
    storeData(JSON.stringify(auth.isLogin));
  }

  const category = [
    {
      id: 1,
      name: 'LAPTOP',
      img: laptop,
    },
    {
      id: 2,
      name: 'SMARTPHONE',
      img: smartphone,
    },
    {
      id: 3,
      name: 'PC',
      img: pc,
    },
    {
      id: 4,
      name: 'GAMING EQUIPMENT',
      img: gaming,
    },
  ];

  return (
    <View style={dashboardStyle.container}>
      <Header
        navigation={navigation}
        route={auth.isLogin ? 'profile' : 'login'}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <SwiperComponent />

        <ScrollView
          style={{margin: 5}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          snapToInterval={width - 180}
          snapToAlignment="start"
          contentInset={{
            top: 0,
            left: 30,
            bottom: 0,
            right: 30,
          }}>
          {category.map((item) => (
            <Category name={item.name} src={item.img} key={item.id} />
          ))}
        </ScrollView>

        <View style={dashboardStyle.itemContainer}>
          {items.map((item) => {
            return (
              <Item
                onPress={() => navigation.navigate('detail', item)}
                key={item.id}
                title={item.title}
                price={item.price
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                wishlist={item.wishlist ? 'red' : 'white'}
                image={item.image == '' ? curly : item.image}
              />
            );
          })}
        </View>
      </ScrollView>

      <View style={dashboardStyle.btnNavContainer}>
        <BottomNav
          homePress={() => navigation.navigate('dashboard')}
          homeColor="#5C88CB"
          cartPress={() => navigation.navigate('cart')}
        />
      </View>
    </View>
  );
};

export default Dashboard;
