import { View, Text,Image } from 'react-native'
import React from 'react'
import { styles } from './DetailCard.style'

const DetailCard = ({ meals }) => {
 return (
  <View>
   <Image style={styles.image} source={{ uri: meals.strMealThumb }} />
   <Text style={styles.title}>{meals.strMeal}</Text>
   <Text style={styles.description} >{meals.strInstructions}</Text>
  </View>
 )
}

export default DetailCard