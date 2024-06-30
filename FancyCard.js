import { Text, View, StyleSheet, Image } from 'react-native'
import React from 'react'

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headerText}>Images</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={require('./assets/krishna.jpg.jpg')}
                    style={styles.cardImage}
                />
                
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={require('./assets/nisha2.jpg')}
                    style={styles.cardImage}
                />
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={require('./assets/nisha3.jpg')}
                    style={styles.cardImage}
                />
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={require('./assets/nisha4.jpg')}
                    style={styles.cardImage}
                />
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={require('./assets/nisha5.jpg')}
                    style={styles.cardImage}
                />
            </View>
        </View>
    )
}

export default FancyCard

const styles = StyleSheet.create({
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 10,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        margin: 10,
        padding: 10,
    },
    cardElevated: {
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardImage: {
        height: 400,
        width: 320,
        borderRadius: 8,

    },
    imageBox: {
        margin: 8
    }
})
