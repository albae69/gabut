import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';

import Header from '../../components/Header';
import BottomNav from '../../components/BottomNav';
import SwiperComponent from '../../components/Swiper';

import {dashboardStyle} from './dashboardStyle';

const {width} = Dimensions.get('window');

const Dashboard = ({navigation}) => {
  const state = useSelector((state) => state);

  return (
    <View style={dashboardStyle.container}>
      <Header
        navigation={navigation}
        route={state.auth.isLogin ? 'profile' : 'login'}
      />
      <SwiperComponent />
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
