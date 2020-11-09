import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import Splash from '../screens/Splash';

import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';
import Dashboard from '../screens/Dashboard';
import Detail from '../screens/Detail';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const BoardingStack = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="dashboard" component={Dashboard} />
      <Stack.Screen name="cart" component={Cart} />
      <Stack.Screen name="detail" component={Detail} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="forgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const load = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(load);
    };
  }, []);

  return (
    <NavigationContainer>
      {loading ? <Splash /> : <BoardingStack />}
    </NavigationContainer>
  );
};

export default Navigation;
