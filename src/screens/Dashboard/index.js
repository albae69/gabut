import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import Header from '../../components/Header';

import {dashboardStyle} from './dashboardStyle';

const Dashboard = ({navigation}) => {
  const state = useSelector((state) => state);

  return (
    <View style={dashboardStyle.container}>
      <Header
        navigation={navigation}
        route={state.auth.isLogin ? 'profile' : 'login'}
      />
    </View>
  );
};

export default Dashboard;
