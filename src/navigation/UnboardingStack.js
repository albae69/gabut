import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';
import Dashboard from '../screens/Dashboard';
import Detail from '../screens/Detail';
import Cart from '../screens/Cart';
import Search from '../screens/Search';

const Stack = createStackNavigator();

const UnboardingStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="dashboard" component={Dashboard} />
      <Stack.Screen name="cart" component={Cart} />
      <Stack.Screen name="detail" component={Detail} />
      <Stack.Screen
        name="login"
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
        component={Login}
      />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
      <Stack.Screen
        name="search"
        component={Search}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forRevealFromBottomAndroid,
        }}
      />
    </Stack.Navigator>
  );
};

export default UnboardingStack;
