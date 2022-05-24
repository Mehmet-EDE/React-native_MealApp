import {StyleSheet} from 'react-native'

export const styles=StyleSheet.create({
 container:{
  justifyContent:'center',
  flexDirection:'column',
 },
 image:{
  height:300,
  padding:5,
  margin:5,
  borderRadius:10,
  borderColor:'#FF4949',
  borderWidth:0.5
 },
 title:{
  backgroundColor:'rgba(0,0,0,0.7)',
  marginTop:-32,
  borderBottomRightRadius:11,
  borderBottomLeftRadius:13,
  textAlign:'center',
  fontSize:20,
  color:'#fff',
  width:'97.5%',
  alignItems:'center',
  position:'absolute',
  zIndex:1
 },
 innerContainer:{
  alignItems:'center'
 }
})