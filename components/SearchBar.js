import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar({ term, onTermChange, onTermSubmit}) {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign name="search1" size={24} style={styles.iconStyle} />
      <TextInput placeholder="Search" style={styles.inputStyle}
      autoCorrect={false}
      autoCapitalize="none"
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  }
})
