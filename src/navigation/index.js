import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import Splash from '../screens/Splash';

import BoardingStack from './BoardingStack';
import UnboardingStack from './UnboardingStack';

const Navigation = () => {
  const AuthStack = () => {
    const isLogin = useSelector((state) => state.auth.isLogin);
    return isLogin ? <BoardingStack /> : <UnboardingStack />;
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // setLoading(true);
    // const load = setTimeout(() => {
    //   setLoading(false);
    // }, 1000);
    // return () => {
    //   clearTimeout(load);
    // };
  }, []);

  return (
    <NavigationContainer>
      {loading ? <Splash /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Navigation;
