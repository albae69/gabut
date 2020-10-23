import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import BackButtonIcons from '../../assets/icons/arrowLeft.svg';

import {backButtonStyle} from './backButtonStyle';

const BackButton = ({title}) => {
  return (
    <View style={backButtonStyle.container}>
      <TouchableOpacity style={{backgroundColor: 'red'}}>
        <BackButtonIcons heigt={30} width={30} />
      </TouchableOpacity>
      <Text>{title}</Text>
    </View>
  );
};

export default BackButton;
