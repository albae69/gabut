import React, {useState, useRef} from 'react';
import {View, Text, TextInput, Dimensions} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Button from '../../components/Button';

import {loginStyle} from '../Login/loginStyle';
import {splashStyle} from '../Splash/splashStyle';

const Register = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const emailRef = useRef();
  const passwordRef = useRef();

  const {height} = Dimensions.get('window');

  return (
    <View style={loginStyle.container}>
      <View style={{marginTop: height / 9}}>
        <View>
          <Text style={[splashStyle.title, {color: '#43D9BE'}]}>GABUT</Text>
          <Text style={[splashStyle.subTitle, {color: '#43D9BE'}]}>
            GATAU, GABUT AJA.
          </Text>
          <TextInput
            style={loginStyle.input}
            placeholder="fullname"
            value={input.fullname}
            onChangeText={(i) => setInput({...input, fullname: i})}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />
          <TextInput
            style={loginStyle.input}
            ref={emailRef}
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
        <Button
          title="DAFTAR"
          onPress={() => alert(JSON.stringify(input))}
          loadingSize="small"
          loadingColor="white"
          isLoading={loading}
        />
      </View>
      <View style={loginStyle.wrapNoAcc}>
        <Text style={loginStyle.noAcc}>
          sudah punya akun?{' '}
          <Text
            style={{color: '#43D9BE'}}
            onPress={() => navigation.navigate('login')}>
            Daftar
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Register;
