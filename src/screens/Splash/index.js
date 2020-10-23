import React from 'react';
import {Text, View} from 'react-native';

import {splashStyle} from './splashStyle';

const Splash = () => {
  return (
    <View style={splashStyle.container}>
      <View style={splashStyle.brand}>
        <Text style={splashStyle.title}>GABUTPOS</Text>
        <Text style={splashStyle.subTitle}>GATAU, GABUT AJA.</Text>
      </View>
      <Text style={splashStyle.cp}>DI BUAT KETIKA GABUT</Text>
    </View>
  );
};

export default Splash;
