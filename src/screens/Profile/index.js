import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {logout} from '../../../authSlice';
import curly from '../../assets/images/curlybraces.png';
import {profileStyle} from './profileStyle';

const Profile = ({navigation}) => {
  const [user, setUser] = useState({
    fullname: 'Ahmad Albaihaqi',
    wallet: 50000,
    photo: '',
  });

  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const clearAll = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      // clear error
    }
  };

  return (
    <Pressable
      onPress={() => (visible == true ? setVisible(false) : null)}
      style={profileStyle.container}>
      <View style={profileStyle.wrapProfile}>
        <Icons
          name="arrowleft"
          size={25}
          color="#43D9BE"
          onPress={() => navigation.goBack()}
        />
        <Text style={[profileStyle.ml2, profileStyle.title]}>PROFIL</Text>
      </View>
      <View style={profileStyle.p}>
        <View style={profileStyle.imgContainer}>
          <Image source={curly} style={profileStyle.img} />
        </View>
        <View style={profileStyle.p}>
          <View style={profileStyle.p2}>
            <View style={profileStyle.wrapEdit}>
              <Text style={profileStyle.text1}>Nama</Text>
              <Icons
                name="edit"
                size={20}
                color="gray"
                onPress={() => {
                  setVisible(!visible);
                }}
              />
            </View>
            {visible ? (
              <TextInput
                autoFocus={true}
                value={user.fullname}
                onChangeText={(i) => setUser({...user, fullname: i})}
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: 'lightgray',
                }}
                onSubmitEditing={() => setVisible(!visible)}
              />
            ) : (
              <Text style={profileStyle.text2}>{user.fullname}</Text>
            )}
          </View>
          <View style={profileStyle.p2}>
            <Text style={profileStyle.text1}>Saldo</Text>
            <Text style={profileStyle.text2}>
              Rp.
              {user.wallet.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </Text>
          </View>
          <View style={profileStyle.p2}>
            <TouchableOpacity>
              <Text style={profileStyle.text1}>Wishlist</Text>
            </TouchableOpacity>
          </View>
          <View style={profileStyle.p5}>
            <TouchableOpacity
              onPress={() => {
                dispatch(logout());
                clearAll();
                navigation.navigate('dashboard');
              }}>
              <Text style={profileStyle.text1}>Keluar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Profile;
