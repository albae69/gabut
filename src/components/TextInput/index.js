import React from 'react';
import {TextInput} from 'react-native';

import {textInputStyle} from './textInputStyle.js';

const TextInputComponent = ({
  containerStyle,
  value,
  onChangeText,
  onSubmitEditing,
  secureTextEntry,
  keyboardType,
  returnKeyType,
  placeholder,
}) => {
  return (
    <TextInput
      style={[textInputStyle.input, containerStyle]}
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
      placeholder={placeholder}
    />
  );
};

export default TextInputComponent;
