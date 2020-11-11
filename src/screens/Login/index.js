import React, {useState, useRef} from 'react';
import {View, Text, TextInput} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {login} from '../../../authSlice';

import Button from '../../components/Button';

import {loginStyle} from './loginStyle';
import {splashStyle} from '../Splash/splashStyle';

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    email: 'ahmadalbaihaqi@gmail.com',
    password: '',
  });

  const dispatch = useDispatch();

  const logIn = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(login());
      navigation.navigate('dashboard');
    }, 1000);
  };

  const passwordRef = useRef();

  return (
    <View behavior="padding" style={loginStyle.container}>
      <View style={loginStyle.alignCenter}>
        <View style={splashStyle.brand}>
          <Text style={[splashStyle.title, {color: '#43D9BE'}]}>GABUT</Text>
          <Text style={[splashStyle.subTitle, {color: '#43D9BE'}]}>
            GATAU, GABUT AJA.
          </Text>
          <View style={{marginTop: 20}}>
            <TextInput
              style={loginStyle.input}
              placeholder="email"
              value={input.email}
              onChangeText={(i) => setInput({...input, email: i})}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              keyboardType="email-address"
            />
            <TextInput
              style={loginStyle.input}
              placeholder="password"
              secureTextEntry={true}
              ref={passwordRef}
              value={input.password}
              onChangeText={(i) => setInput({...input, password: i})}
            />
            <Text
              style={loginStyle.forgotPassword}
              onPress={() => navigation.navigate('forgotPassword')}>
              lupa kata sandi?
            </Text>
          </View>
        </View>
        <Button
          title="MASUK"
          onPress={() => alert(JSON.stringify(input))}
          loadingSize="small"
          loadingColor="white"
          isLoading={loading}
        />
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
