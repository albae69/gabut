import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import {backButtonStyle} from './backButtonStyle';

const BackButton = ({title, size, color, titleStyle}) => {
  const navigation = useNavigation();

  return (
    <View style={backButtonStyle.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icons name="arrowleft" size={size} color={color} />
      </TouchableOpacity>
      <Text style={[backButtonStyle.title, titleStyle]}>{title}</Text>
    </View>
  );
};

export default BackButton;
