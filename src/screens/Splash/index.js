import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';

import {login} from '../../../authSlice';
import {splashStyle} from './splashStyle';

const Splash = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('isLogin');
      return value != null ? dispatch(login()) : console.log('no data saved!');
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={splashStyle.container}>
      <View style={splashStyle.brand}>
        <Text style={splashStyle.title}>GABUT</Text>
        <Text style={splashStyle.subTitle}>GATAU, GABUT AJA.</Text>
      </View>
      <Text style={splashStyle.cp}>DI BUAT KETIKA GABUT</Text>
    </View>
  );
};

export default Splash;
