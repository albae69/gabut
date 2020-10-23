import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../screens/Dashboard';
import Detail from '../screens/Detail';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const BoardingStack = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="profile">
      <Stack.Screen name="dashboard" component={Dashboard} />
      <Stack.Screen name="cart" component={Cart} />
      <Stack.Screen name="detail" component={Detail} />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default BoardingStack;
