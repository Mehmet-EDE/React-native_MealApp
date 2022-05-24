import { Text, View } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'

const Error = () => {
 return (
   <AnimatedLottieView source={require('../../Assets/error.json')} autoPlay />
 )
}

export default Error