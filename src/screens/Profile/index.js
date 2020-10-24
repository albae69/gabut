import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';

import {logout} from '../../../authSlice';

import {profileStyle} from './profileStyle';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.isLogin);
  console.log(state);

  return (
    <View style={profileStyle.container}>
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
          <View style={profileStyle.img} />
        </View>
        <View style={profileStyle.p}>
          <View style={profileStyle.p2}>
            <Text style={profileStyle.text1}>Nama</Text>
            <Text style={profileStyle.text2}>Ahmad Albaihaqi</Text>
          </View>
          <View style={profileStyle.p2}>
            <Text style={profileStyle.text1}>Alamat</Text>
            <Text style={profileStyle.text2}>Yogyakarta, Indonesia</Text>
          </View>
          <View style={profileStyle.p2}>
            <Text style={profileStyle.text1}>Saldo</Text>
            <Text style={profileStyle.text2}>Rp.5,000,000,-</Text>
          </View>
          <View style={profileStyle.p2}>
            <TouchableOpacity>
              <Text style={profileStyle.text1}>Wishlist</Text>
            </TouchableOpacity>
          </View>
          <View style={profileStyle.p2}>
            <TouchableOpacity>
              <Text style={profileStyle.text1}>Pengaturan</Text>
            </TouchableOpacity>
          </View>
          <View style={profileStyle.p5}>
            <TouchableOpacity onPress={() => dispatch(logout())}>
              <Text style={profileStyle.text1}>Keluar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
