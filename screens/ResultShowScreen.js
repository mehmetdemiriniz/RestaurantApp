import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function ResultShowScreen({ route }) {
    const { id } = route.params
    const [result, setResult] = useState(null)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        //todo loading screen
        return null
    }

    return (
        <View styles={styles.container}>
            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.phone}>{result.phone}</Text>

            {result.is_closed ? 
                <View> 
                    <AntDesign name="closecircle" size={24} style={{ alignSelf: 'center', color: 'red' }} />
                    <Text style={{ alignSelf: 'center', color: 'red' }}>Kapalı</Text>
                </View>
                :
                <View style={styles.statusContainer}>
                    <AntDesign name="checkcircle" size={24} style={styles.statusIcon} />
                    <Text style={styles.statusText}>Açık</Text>
                </View>
                }
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    image: {
        height: 180,
        borderRadius: 15,
        margin: 10,
    },
    title: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    phone: {
        alignSelf: 'center',
        fontSize: 14,
    },
    statusContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 5,
    },
    statusIcon: {
        color: 'green',
    },
    statusText: {
        alignSelf: 'center',
        marginLeft: 5,
        fontWeight: 'bold',
        color: 'green',
    }

})
