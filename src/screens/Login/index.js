import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {login} from '../../../slice';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

import {loginStyle} from './loginStyle';
import {splashStyle} from '../Splash/splashStyle';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.isLogin);
  console.log(state);

  return (
    <View style={loginStyle.container}>
      <View style={loginStyle.alignCenter}>
        <View style={splashStyle.brand}>
          <Text style={[splashStyle.title, {color: '#43D9BE'}]}>GABUTPOS</Text>
          <Text style={[splashStyle.subTitle, {color: '#43D9BE'}]}>
            GATAU, GABUT AJA.
          </Text>
          <View style={loginStyle.inputContainer}>
            <TextInput placeholder="email" />
            <TextInput placeholder="password" secureTextEntry={true} />
            <Text
              style={loginStyle.forgotPassword}
              onPress={() => navigation.navigate('forgotPassword')}>
              lupa kata sandi?
            </Text>
          </View>
        </View>
        <Button title="MASUK" onPress={() => dispatch(login())} />
      </View>
      <View style={loginStyle.wrapNoAcc}>
        <Text style={loginStyle.noAcc}>
          belum punya akun?{' '}
          <Text
            style={{color: '#43D9BE'}}
            onPress={() => navigation.navigate('register')}>
            Daftar
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Login;
