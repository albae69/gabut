import React from 'react';
import {View, Text} from 'react-native';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

import {loginStyle} from '../Login/loginStyle';
import {splashStyle} from '../Splash/splashStyle';
import {forgotPasswordStyle} from './forgotPasswordStyle';

const ForgotPassword = ({navigation}) => {
  return (
    <View style={loginStyle.container}>
      <View style={loginStyle.alignCenter}>
        <View style={splashStyle.brand}>
          <Text style={[splashStyle.title, {color: '#43D9BE'}]}>GABUTPOS</Text>
          <Text style={[splashStyle.subTitle, {color: '#43D9BE'}]}>
            GATAU, GABUT AJA.
          </Text>
          <View style={{marginTop: 20}}>
            <Text style={{color: 'lightgray'}}>
              link reset password akan dikirm ke email anda.
            </Text>
          </View>
          <View style={forgotPasswordStyle.inputContainer}>
            <TextInput
              placeholder="email"
              containerStyle={forgotPasswordStyle.inputContainer}
            />
            <Button title="KIRIM" containerStyle={{marginTop: 20}} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ForgotPassword;
