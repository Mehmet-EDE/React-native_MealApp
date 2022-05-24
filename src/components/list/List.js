import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './List.style'

const List = ({ listItems,selected }) => {
 // console.log('qwe2', listItems)
 return (
  <TouchableWithoutFeedback onPress={selected}>
   <View style={styles.container}>
    <View style={styles.innerContainer}>
     <Image style={styles.img} source={{ uri: listItems.strCategoryThumb }} />
    </View>
    <Text style={styles.title}>{listItems.strCategory}</Text>
   </View>
  </TouchableWithoutFeedback>
 )
}

export default List