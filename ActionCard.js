import { View, Text, Linking, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink) {
        Linking.openURL(websiteLink)
    }
    return (
        <View>
            <Text style={styles.headerText}>Profile</Text>
            <View style={styles.card}>
                <View style={styles.cardLink}>
                    <TouchableOpacity 
                    onPress={() => openWebsite('https://www.instagram.com/trader_krishna1/')}
                    >
                    <Image
                        source={require('./assets/insta.png')}
                        style={styles.cardLink1}
                    ></Image>
                    
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>openWebsite('https://www.youtube.com/channel/UCXHJISYRqrIsSvGOtvkBZ8A')}
                    >
                        <Image 
                        source={require('./assets/youtube.png')}
                        style={styles.cardLink1}
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>openWebsite('https://www.facebook.com/profile.php?id=100053438236513')}
                    >
                        <Image 
                        source={require('./assets/facebook.png')}
                        style={styles.cardLink1}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ActionCard

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 8,

    },
    card: {
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        flex: 1,
        marginLeft: 20,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    cardLink: {
        height: 100,
       
        borderRadius: 8,
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    cardLink1:{
        height:50,
        width:50,
        margin:10
    }

})