import { View, Text,Image,TouchableOpacity,Linking } from 'react-native'
import React from 'react'
import { styles } from './DetailCard.style'

const DetailCard = ({ meals }) => {
 return (
  <View>
   <Image style={styles.image} source={{ uri: meals.strMealThumb }} />
   <Text style={styles.title}>{meals.strMeal}</Text>
   <Text style={styles.description} >{meals.strInstructions}</Text>
   <TouchableOpacity onPress={()=>Linking.openURL(meals.strYoutube)} style={styles.Btn}>
    <Text>you can watch the video here</Text>
   </TouchableOpacity>
  </View>
 )
}

export default DetailCard