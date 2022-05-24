import { StyleSheet } from 'react-native'
export default StyleSheet.create({
 container:{
  justifyContent:'flex-start',
  borderWidth:0.5,
  borderTopLeftRadius:55,
  borderBottomLeftRadius:55,
  marginTop:5,
  marginBottom:5,
  padding:5,
  flexDirection:'row',
  borderColor:'#FF4949',
  backgroundColor:'#333'
 },
 title:{
  fontSize:20,
  fontWeight:'bold',
  margin:5,
  color:'#fff',
  alignSelf:'center'
 },
 img:{
  height:75,
  width:125,
  resizeMode:'contain',
  alignSelf:'baseline',
  margin:5
 },
 innerContainer:{
  // justifyContent:'flex-start',
 }
})