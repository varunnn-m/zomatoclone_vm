import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { LOGIN_TITLE, THEME_COLOR } from "../strings.js"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { TextInput } from 'react-native-gesture-handler'
import auth from '@react-native-firebase/auth';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { set } from 'immer/dist/internal.js'

const Login = () => {

    const [mobileNum, setMobileNum] = useState('')
    const [confirm, setConfirm] = useState(null)
    const [otp,setOtp]=useState("")
    const [codeInput,setCodeInput]=useState("")

    const signInWithPhoneNumber = async () => {
        const confirmation = await auth().signInWithPhoneNumber("+91" + mobileNum);
        setConfirm(confirmation);
        console.log(confirmation)
        console.log(mobileNum)

    }

    const verifyOtp = async ()=>{
        try {
            const res=await confirm.confirm(otp);
            console.log("Verification successful: ",res)
          } catch (error) {
            console.log('Invalid code.');
          }
    }


    return (
        <KeyboardAvoidingView style={styles.container} behavior="position">
        <View>
            <StatusBar backgroundColor={THEME_COLOR + "99"} translucent={false} barStyle="light-content" />
            <View style={styles.containerIn}>
                <Image source={require('../images/BannerRed.png')} style={styles.banner} />
            </View>
            <Text style={styles.loginTitle}>{LOGIN_TITLE}</Text>

            {
                confirm== null ?
                    <View>
                        <View style={styles.divider}>
                            <View style={[styles.dividerView, { marginLeft: 20 }]}>
                            </View>
                            <Text style={styles.dividerText}>Login or Signup</Text>
                            <View style={[styles.dividerView, { marginRight: 20 }]}>
                            </View>
                        </View>
                        <TextInput placeholder='mobile number' keyboardType='number-pad' style={styles.mobileInput} onChangeText={setMobileNum} />
                        <TouchableOpacity style={[styles.login,{backgroundColor:mobileNum.length!==10?"grey":THEME_COLOR}]} onPress={signInWithPhoneNumber}>
                            <Text style={{ fontWeight: "500", color: "white" }}>Login with OTP</Text>
                        </TouchableOpacity>
                    </View>

                    :
                    <View>
                        <View style={styles.divider}>
                            <View style={[styles.dividerView, { marginLeft: 20 }]}>
                            </View>
                            <Text style={styles.dividerText}>Enter OTP</Text>
                            <View style={[styles.dividerView, { marginRight: 20 }]}>
                            </View>
                        </View>

                        <OTPInputView
                            style={{ width: '80%', height: 85,alignSelf:"center",backgroundColor:"#fff5f5" }}
                            pinCount={6}

                            onCodeChanged = {code => {setCodeInput(code)}}
                            autoFocusOnLoad
                            codeInputFieldStyle={styles.underlineStyleBase}
                            codeInputHighlightStyle={styles.underlineStyleHighLighted}
                            onCodeFilled={(code => {
                                console.log(`Code is ${code}, you are good to go!`)
                                setOtp(code)
                            })}

                        />
                        <TouchableOpacity style={[styles.login,{backgroundColor:codeInput.length<6?"grey":THEME_COLOR}]} onPress={verifyOtp} disabled={codeInput.length<6}>
                            <Text style={{ fontWeight: "500", color: "white" }}>Verify OTP</Text>
                        </TouchableOpacity>



                    </View>
            }
        </View>
        </KeyboardAvoidingView>
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
        width: responsiveWidth(90),
        borderRadius: 10,
        height: responsiveHeight(6),
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: responsiveHeight(3.7)
    },
    
      underlineStyleBase: {
        width: "140%",
        height: "50%",
        borderWidth: 1,
        borderColor:"#00000099",
        borderRadius:10,
        backgroundColor:"white",
        color:"black"
      },
    
      underlineStyleHighLighted: {
        borderColor: THEME_COLOR,
      }
})
