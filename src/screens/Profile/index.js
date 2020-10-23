import React from 'react';
import {View, Text} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';

import {profileStyle} from './profileStyle';

const Profile = ({navigation}) => {
  return (
    <View style={profileStyle.container}>
      <View style={profileStyle.wrapProfile}>
        <Icons name="arrowleft" size={25} onPress={() => navigation.goBack()} />
        <Text style={profileStyle.ml2}>PROFIL</Text>
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
            <Text style={profileStyle.text1}>Wishlist</Text>
          </View>
          <View style={profileStyle.p2}>
            <Text style={profileStyle.text1}>Pengaturan</Text>
          </View>
          <View style={profileStyle.p5}>
            <Text style={profileStyle.text1}>Keluar</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
