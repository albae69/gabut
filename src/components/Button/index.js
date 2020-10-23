import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

import {buttonStyle} from './buttonStyle';

const ButtonComponent = ({
  title,
  onPress,
  containerStyle,
  loadingSize,
  loadingColor,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyle.container, containerStyle]}>
      {isLoading ? (
        <ActivityIndicator size={loadingSize} color={loadingColor} />
      ) : (
        <Text style={buttonStyle.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
