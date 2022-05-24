import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
 image: {
  height: 350,
  width: 350,
  resizeMode: 'cover',
  alignSelf: 'center',
  margin:5
 },
 title: {
  fontWeight: 'bold',
  fontSize: 25,
  textDecorationLine: 'underline',
  marginBottom: 10,
  color: '#fff',
 },
 description: {
  fontSize: 17,
  color: 'white'
 },
 Btn:{
  height:35,
  width:'90%',
  alignItems:'center',
  justifyContent:'center',
  margin:10,
  padding:5,
  backgroundColor:'#4D4C7D',
  borderRadius:15
 }
})