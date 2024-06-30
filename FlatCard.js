import {  Text, View , StyleSheet } from 'react-native'
import React from 'react'

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headertext}>About</Text>
      <View style={styles.container}>
        <View style={[styles.card , styles.card1]}>
          <Text style={{fontSize:25 , fontWeight:'bold'}}>My</Text>
        </View>
        <View style={[styles.card , styles.card2]}>
          <Text style={{fontSize:25 , fontWeight:'bold'}}>Name</Text>
        </View>
        <View style={[styles.card , styles.card3]}>
          <Text style={{fontSize:25 , fontWeight:'bold'}}>Krishna</Text>
        </View>
      </View>
    </View>
  )
}

export default FlatCard

const styles = StyleSheet.create({
  headertext:{
    fontSize:28,
    fontWeight:'bold',
    marginTop:40,
    marginLeft:10,
  },
  container:{
    flex:1,
    flexDirection:'row',
    padding:8,


  },
  card:{
    height:100,
    width:100,
    margin:5,
    borderRadius:8,
    flex:1,
    alignItems:'center',
    justifyContent:'center',

  },
  card1:{
    backgroundColor:'#fb8500',
    elevation:5,

  },
  card2:{
    backgroundColor:'#ffb703',
    elevation:5,

  },
  card3:{
    backgroundColor:'#219ebc',
    elevation:5,

  }
 
})