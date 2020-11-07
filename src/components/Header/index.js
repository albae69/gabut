import React from 'react';
import {View, TextInput} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {headerStyle} from './headerStyle';

const Header = ({route, navigation}) => {
  return (
    <View style={headerStyle.container}>
      <View
        style={{
          height: 35,
          width: 200,
          backgroundColor: 'white',
          borderRadius: 8,
          paddingLeft: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name="search" size={20} color="gray" />
        <TextInput placeholder="cari" style={{flex: 1}} />
      </View>
      <Icons
        name="account-circle"
        size={30}
        color="white"
        style={headerStyle.account}
        onPress={() => navigation.navigate(route)}
      />
    </View>
  );
};

export default Header;
