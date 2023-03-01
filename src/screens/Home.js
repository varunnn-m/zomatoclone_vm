import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import {store} from "../redux/store"
import { useSelector } from 'react-redux'

const Home = () => {

    

    const selector=useSelector(state=>state.global)

    // const isLoggedIn=selector.isLoggedIn
    // const mobileNum=selector.mobileNum
    console.log("thisSelector: ",selector)

    const {mobileNum, isLoggedIn}=selector
  return (
    <View>
      <Text>Home</Text>
      <Text>{`Welcome ${mobileNum} , your log in status is ${isLoggedIn} `}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})