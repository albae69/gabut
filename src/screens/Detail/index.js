import React, {useState} from 'react';
import {View, Text, ImageBackground, Dimensions} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

import BackButton from '../../components/BackButton';
import Button from '../../components/Button';

import {detailStyle} from './detailStyle';
import curlybraces from '../../assets/images/curlybraces.png';

const {height, width} = Dimensions.get('window');

const Detail = ({navigation}) => {
  const [wishList, setWishList] = useState(false);
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <View style={detailStyle.container}>
      <ImageBackground
        source={curlybraces}
        style={{height: height / 3, width: width}}>
        <BackButton
          title="DETAIL"
          color="white"
          size={25}
          titleStyle={{color: 'white'}}
        />
        {isLogin ? (
          <Icons
            name="heart"
            size={25}
            color={wishList ? 'red' : 'white'}
            onPress={() => setWishList(!wishList)}
            style={{position: 'absolute', bottom: 20, right: 20}}
          />
        ) : (
          <Icons
            name="heart"
            size={25}
            color="white"
            style={{position: 'absolute', bottom: 20, right: 20}}
            onPress={() =>
              alert('you must login before add item into wishlist')
            }
          />
        )}
      </ImageBackground>
      <View style={detailStyle.descContainer}>
        <Text style={detailStyle.title}>Title</Text>
        <Text style={detailStyle.price}>Price</Text>
        <Text style={detailStyle.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          tempore cupiditate! Debitis praesentium ut ipsam fugit neque quo
          minima velit repellat iste quae ullam, modi ab laborum, odio impedit
          nihil.
        </Text>
      </View>
      <View style={detailStyle.btnContainer}>
        <Button
          title="BELI"
          titleStyle={detailStyle.btnTitle}
          containerStyle={[detailStyle.btn1, {width: width * 0.25}]}
          onPress={() => alert('hello')}
          activeOpacity={0.9}
        />
        <Button
          title="TAMBAHKAN KE KERANJANG"
          titleStyle={detailStyle.btnTitle}
          containerStyle={[
            detailStyle.btn1,
            {width: width * 0.6, backgroundColor: '#5C88CB'},
          ]}
          onPress={() => navigation.navigate('cart')}
          activeOpacity={0.9}
        />
      </View>
    </View>
  );
};

export default Detail;
