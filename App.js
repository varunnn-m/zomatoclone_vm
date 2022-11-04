import React from 'react';
import {


  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { THEME_COLOR } from "./src/strings"
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";



const App = () => {


  return (

    <View style={styles.container}>
      <Image
      source={require('./src/images/logo.png')}
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
  logo:{
    width:responsiveWidth(34) ,
    height:responsiveHeight(17)
  }


});

export default App;
