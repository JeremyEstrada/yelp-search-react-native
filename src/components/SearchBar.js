import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

import COLORS from '../constants/COLORS';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.searchbar}>
            <Feather name='search' style={styles.iconStyle}/>
            <TextInput 
                style={styles.inputStyle}
                placeholder="Search" 
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                autoCapitalize='none'
                autoCorrect={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    searchbar: {
        backgroundColor: COLORS.searchBarColor,
        height: 50,
        borderRadius: 5,
        marginTop: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
    },
    inputStyle: {
        flex: 1,
    },


});

export default SearchBar;