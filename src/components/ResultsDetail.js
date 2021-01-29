import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'black',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        padding: 2.5,
    },
    image: {
        width: 250,
        height: 100,
        borderRadius: 6,
    }, 
    name: {
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default ResultsDetail;