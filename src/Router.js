import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from './pages/Category/Categories';
import Foods from './pages/foods/Foods';
import Detail from './pages/Detail/Detail';


const Stack=createNativeStackNavigator()
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Categories' component={Categories}
        options={{
          title:'Categories',
          headerStyle:{
            backgroundColor:'#ff7043',
          },
          headerTitleAlign:'center',
          headerTitleStyle:{color:'#000'}
        }} />
        <Stack.Screen name='Foods' component={Foods} 
        options={{
          title:'Meals',
          headerStyle:{
            backgroundColor:'#ff7043',
          },
          headerTitleAlign:'center',
          headerTitleStyle:{color:'#000'}
        }} />
        <Stack.Screen name='Detail' component={Detail}
        options={{
          title:'Meal Detail',
          headerStyle:{
            backgroundColor:'#ff7043',
          },
          headerTitleAlign:'center',
          headerTitleStyle:{color:'#000'}
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router