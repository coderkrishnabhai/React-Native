import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
    return (
        <View>
            <Text style={styles.headertext}>Mobile No.</Text>
            <View>
                <ScrollView horizontal={true}>
                    <View  style = {styles.container}>
                        <View style={[styles.card, styles.cardElevator]}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>9</Text>
                        </View>
                        <View style={[styles.card, styles.cardElevator]}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>5</Text>
                        </View>
                        <View style={[styles.card, styles.cardElevator]}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>7</Text>
                        </View>
                        <View style={[styles.card, styles.cardElevator]}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>2</Text>
                        </View>
                        <View style={[styles.card, styles.cardElevator]}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>3</Text>
                        </View>
                        <View style={[styles.card, styles.cardElevator]}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>7</Text>
                        </View>
                        <View style={[styles.card, styles.cardElevator]}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>5</Text>
                        </View>
                        <View style={[styles.card, styles.cardElevator]}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>0</Text>
                        </View>
                        <View style={[styles.card, styles.cardElevator]}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>0</Text>
                        </View>
                        <View style={[styles.card, styles.cardElevator]}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>4</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default ElevatedCard

const styles = StyleSheet.create({
    headertext: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 10,
    },
    container: {
        padding: 4,
        flex: 1,
        flexDirection: 'row',
    },
    card: {
        height: 60,
        width: 60,
        margin: 2,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardElevator: {
        backgroundColor: '#a2d2ff',
        elevation: 5
    }
})
