import { StatusBar, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { THEME_COLOR } from "../strings.js"
import { responsiveHeight } from 'react-native-responsive-dimensions'

const Login = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={THEME_COLOR} barStyle="light-content" />
        <View style={styles.containerIn}>
            <Image source={require('../images/banner.png')} style={styles.banner}/>

        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white"
    },
    containerIn:{
        height:responsiveHeight(50)
    },
    banner:{
        height:"100%",
        width:"100%"
    }
})