import { View, Text ,StyleSheet, ScrollView,Image} from 'react-native'
import React from 'react'

const ContectList = () => {
    const contacts =[
        {
            uid:1,
            name:'Krishna',
            status:'a coder and trader',
            imageUrl:'./assets/krishna.jpg.jpg'
        },
        {
            uid:2,
            name:'Nisha',
            status:'a coder and trader',
            imageUrl:'./assets/nisha1.jpg'
        },
        {
            uid:3,
            name:'Nisha2',
            status:'a coder and trader',
            imageUrl:'./assets/nisha2.jpg'
        },
        {
            uid:4,
            name:'Nisha3',
            status:'a coder and trader',
            imageUrl:'./assets/nisha3.jpg'
        },
        
    ];
  return (
    <View>
      <Text style={styles.header}>ContectList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}

      >
        {contacts.map(({uid,name,status,imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image 
                source={require('./assets/krishna.jpg.jpg')}
                style={styles.userImage}
                
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}

      </ScrollView>
    </View>
  )
}

export default ContectList

const styles=StyleSheet.create({
    header:{
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 10,
    

    },
    container:{
        paddingHorizontal:14,
        marginBottom:4,
        marginTop:8,
    },
    userCard:{
        flex:1,
       flexDirection:'row',
       alignItems:'center',
       marginBottom:8,
       backgroundColor:'#ced4da',
       padding:4,
       borderRadius:8,



       
    },
    userImage:{
        width:50,
        height:50,
        borderRadius:50,
        marginRight:17,
    },
    userName:{
        fontSize:18,
        fontWeight:'bold',
        color:'#14213d'


    },
    userStatus:{
        color:'#495057'
    }

})