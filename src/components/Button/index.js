import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

import {buttonStyle} from './buttonStyle';

const ButtonComponent = ({
  title,
  titleStyle,
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
        <Text style={[buttonStyle.title, titleStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
