import { View, FlatList } from 'react-native'
import React from 'react'
import { styles } from './Foods.style'
import FoodList from '../../components/FoodList'
import useFetch from '../../Hooks/useFetch'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'
import Config from 'react-native-config'

const Foods = ({ route, navigation }) => {
 const param = route.params.cat
 const { data, error, loading } = useFetch({ url: `${Config.API_URL}/filter.php?c=${param}` })
 console.log('Loading:', loading)
 const selectedMeal = (id) => {
  navigation.navigate('Detail', { idMeal: id })
 }
 const renderFoods = ({ item }) => <FoodList meal={item} selectedMeal={() => selectedMeal(item.idMeal)} />
 if (error) {
  console.log(error)
  return (
   <Error />
  )
 }
 return (
  <View style={styles.container}>
   {
    loading ? <Loading /> : <FlatList data={data.meals} renderItem={renderFoods} />
   }
  </View>
 )
}

export default Foods