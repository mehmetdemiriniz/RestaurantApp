import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function ResultDetail({ result }) {
  return (
    <View style={styles.container}>
        <Image
        style={styles.imgContainer}
        source={ result.image_url ? { uri: result.image_url } : null}  />
        <Text style={styles.title}>{result.name}</Text>
        <Text style={styles.description}>{result.rating} Yıldızlı Restoran, {result.review_count} Değerlendirme</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15
    },
    imgContainer: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    title: {
        fontWeight: 'bold'
    },
    description: {
        color: 'gray',
        fontSize: 12
    }
})