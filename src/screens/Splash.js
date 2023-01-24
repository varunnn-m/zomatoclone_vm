import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  StatusBar
} from 'react-native';
import { THEME_COLOR } from "../strings.js"
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';



const Splash = () => {

  const Navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      Navigation.navigate("Login")
    }, 3000)

  }, [])


  return (

    <View style={styles.container}>
      <StatusBar backgroundColor={THEME_COLOR} barStyle="light-content"/>
      <Image
        source={require('../images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      >

      </Image>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME_COLOR

  },
  logo: {
    width: responsiveWidth(34),
    height: responsiveHeight(17)
  }


});

export default Splash;


//  code ends