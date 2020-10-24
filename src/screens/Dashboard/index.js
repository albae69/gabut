import React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

import Header from '../../components/Header';
import BottomNav from '../../components/BottomNav';
import SwiperComponent from '../../components/Swiper';
import Category from '../../components/Card/Category';

import {dashboardStyle} from './dashboardStyle';
import laptop from '../../assets/images/laptop.jpg';
import gaming from '../../assets/images/gaming.png';
import pc from '../../assets/images/pc.jpg';
import smartphone from '../../assets/images/smartphone.jpg';

const {width} = Dimensions.get('window');

const Dashboard = ({navigation}) => {
  const state = useSelector((state) => state);

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
        route={state.auth.isLogin ? 'profile' : 'login'}
      />

      <SwiperComponent />
      <ScrollView
        style={{flex: 1}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
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
