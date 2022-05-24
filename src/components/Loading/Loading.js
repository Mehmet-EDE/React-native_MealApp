import { StyleSheet, Text, View } from 'react-native'
import LottieView from 'lottie-react-native';
import React from 'react'

const Loading = () => {
  return (
    <LottieView source={require('../../Assets/loading.json')} autoPlay />
  )
}

export default Loading