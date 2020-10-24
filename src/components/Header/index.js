import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {headerStyle} from './headerStyle';

const Header = ({route, navigation}) => {
  return (
    <View style={headerStyle.container}>
      <Pressable
        style={headerStyle.input}
        onPress={() => navigation.navigate('search')}>
        <Icon name="search" size={20} color="gray" />
        <Text style={headerStyle.placeholder}>Search</Text>
      </Pressable>
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
