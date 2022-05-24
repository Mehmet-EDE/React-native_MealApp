import { View, FlatList } from 'react-native'
import React from 'react'
import { styles } from './Detail.style'
import useFetch from '../../Hooks/useFetch'
import Config from 'react-native-config'
import DetailCard from '../../components/DetailCard/DetailCard'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'

const Detail = ({ route }) => {
 const params = route.params.idMeal
 const { data, error, loading } = useFetch({ url: `${Config.API_URL}/lookup.php?i=${params}` })
 const renderMeals = ({ item }) => <DetailCard meals={item} />
 if (error) {
  console.log(error)
  return <Error />
 }
 return (
  <View style={styles.container}>
   {
    loading ? <Loading /> : <FlatList data={data.meals} renderItem={renderMeals} />
   }

  </View>
 )
}

export default Detail