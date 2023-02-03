import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LOGIN_TITLE, THEME_COLOR } from "../strings.js"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { TextInput } from 'react-native-gesture-handler'
import auth from '@react-native-firebase/auth';

const Login = () => {

    const[mobileNum,setMobileNum]=useState('')

    const signInWithPhoneNumber=async ()=> {
        const confirmation = await auth().signInWithPhoneNumber("+91"+mobileNum);
        //setConfirm(confirmation);
        console.log(confirmation)
        console.log(mobileNum)
        
    }
    

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"transparent"} translucent={true} barStyle="light-content" />
            <View style={styles.containerIn}>
                <Image source={require('../images/BannerRed.png')} style={styles.banner} />
            </View>
            <Text style={styles.loginTitle}>{LOGIN_TITLE}</Text>
            <View style={styles.divider}>
                <View style={[styles.dividerView, { marginLeft: 20 }]}>
                </View>
                <Text style={styles.dividerText}>Login or Signup</Text>
                <View style={[styles.dividerView, { marginRight: 20 }]}>
                </View>
            </View>
            <TextInput placeholder='mobile number' keyboardType='number-pad' style={styles.mobileInput} onChangeText={setMobileNum} />
            <TouchableOpacity style={styles.login} onPress={signInWithPhoneNumber}>
                <Text style={{ fontWeight: "500", color: "white" }}>Login with OTP</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff5f5"
    },
    containerIn: {
        height: responsiveHeight(50)
    },
    banner: {
        height: "100%",
        width: "100%"
    },
    loginTitle: {
        fontSize: responsiveFontSize(3),
        fontWeight: "800",
        color: "black",
        alignSelf: "center",
        width: responsiveWidth(85),
        textAlign: "center",
    },
    divider: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        marginTop: responsiveHeight(3.7),
        justifyContent: "space-evenly"
    },
    dividerView: {
        height: 1.8,
        backgroundColor: "#00000099",
        width: "25%",

    },
    dividerText: {
        fontSize: responsiveFontSize(2.5),
        fontWeight: "500",
        color: "#00000099",
        marginHorizontal: 20

    },
    mobileInput: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#000000",
        width: responsiveWidth(90),
        alignSelf: "center",
        marginTop: responsiveHeight(3.7),
        padding: 12,

    },
    login: {
        backgroundColor: THEME_COLOR,
        width: responsiveWidth(90),
        borderRadius: 10,
        height: responsiveHeight(6),
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: responsiveHeight(3.7)
    }
})
