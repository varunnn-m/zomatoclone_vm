import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectMobileNum, selectIsLoggedIn } from '../redux/globalSlice'

const Home = () => {

    const isLoggedIn=useSelector(selectIsLoggedIn)
    const mobileNum=useSelector(selectMobileNum)
  return (
    <View>
      <Text>Home</Text>
      <Text>{`Welcome ${mobileNum} , your log in status is ${isLoggedIn}`}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})