import React, {useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={styles.screen}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchAPI(term)}
            />
            {errorMessage ? <Text style={styles.errMessage}>{errorMessage}</Text> : null}
            <Text style={styles.resultTextContainer}>We have found {results.length} results near you</Text>
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title="Cost Effective" 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title="Bit Pricey"
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title="Really Pricey" 
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    resultTextContainer: {
        margin: 15,
    },
    errMessage: {
        color: 'red',
    },
});

export default SearchScreen;