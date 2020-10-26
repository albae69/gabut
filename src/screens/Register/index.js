import React from 'react';
import {View, Text} from 'react-native';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

import {loginStyle} from '../Login/loginStyle';
import {splashStyle} from '../Splash/splashStyle';

const Register = ({navigation}) => {
  return (
    <View style={loginStyle.container}>
      <View style={loginStyle.alignCenter}>
        <View style={splashStyle.brand}>
          <Text style={[splashStyle.title, {color: '#43D9BE'}]}>GABUT</Text>
          <Text style={[splashStyle.subTitle, {color: '#43D9BE'}]}>
            GATAU, GABUT AJA.
          </Text>
          <View style={loginStyle.inputContainer}>
            <TextInput placeholder="fullname" />
            <TextInput placeholder="email" />
            <TextInput placeholder="password" secureTextEntry={true} />
          </View>
        </View>
        <Button title="DAFTAR" />
      </View>
      <View style={loginStyle.wrapNoAcc}>
        <Text style={loginStyle.noAcc}>
          sudah punya akun?
          <Text
            style={{color: '#43D9BE'}}
            onPress={() => navigation.navigate('login')}>
            {' '}
            Masuk
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Register;
