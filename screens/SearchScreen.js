import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../components/ResultList';

export default function SearchScreen() {

  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price;
    })
  }

  const [term, setTerm] = useState('')

  return (
    <View>
        <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
        
        {errorMessage ? <Text>{errorMessage}</Text> : null}

        { results.length > 0 ?
          <>
          <ResultList title="Ucuz Restoranlar" results={filterResultsByPrice('₺')} />
          <ResultList title="Normal Restoranlar" results={filterResultsByPrice('₺₺')} />
          <ResultList title="Pahalı Restoranlar" results={filterResultsByPrice('₺₺₺')} />
          </>
          : null
        }
      </View>
  )
}

const styles = StyleSheet.create({})
