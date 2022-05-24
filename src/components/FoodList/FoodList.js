import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { styles } from './FoodList.style'

const FoodList = ({ meal,selectedMeal }) => {
 return (
  <TouchableWithoutFeedback onPress={selectedMeal}>
   <View style={styles.container}>
    <Image style={styles.image} source={{ uri: meal.strMealThumb }} accessibilityLabel={'asd'} />
    <View style={styles.innerContainer}>
     <Text style={styles.title}>{meal.strMeal}</Text>
    </View>
   </View>
  </TouchableWithoutFeedback>
 )
}

export default FoodList