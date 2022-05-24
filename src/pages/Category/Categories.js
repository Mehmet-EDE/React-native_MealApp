import { View, FlatList } from 'react-native'
import React from 'react'
import { styles } from './Categories.style'
import List from '../../components/list'
import Config from 'react-native-config'
import useFetch from '../../Hooks/useFetch'
import Loading from '../../components/Loading/Loading'
import Error from '../../components/Error/Error'

const Categories = ({ navigation }) => {

  const { data, loading, error } = useFetch({ url: `${Config.API_URL}/categories.php` })
  const SelectCategory = cat => {
    navigation.navigate('Foods', { cat })
  }
  const renderData = ({ item }) => <List listItems={item} selected={() => SelectCategory(item.strCategory)} />
  if (error) {
    console.log(error)
    return (
      <Error />
    )
  }
  return (
    <View style={styles.container}>
      {
        loading ? <Loading /> : <FlatList data={data.categories} renderItem={renderData} />
      }
    </View>
  )
}

export default Categories
