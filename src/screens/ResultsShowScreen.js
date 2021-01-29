import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    console.log(id);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{result.name}</Text>
            <View style={styles.textBody}>
                <Text style={styles.subtitle}>Address:</Text>
                <Text>{result.location.address1}</Text>
                <Text>{result.location.city}, {result.location.state}  {result.location.zip_code}</Text>
            </View>
            <View style={styles.textBody}>
                <Text style={styles.subtitle}>Phone:</Text>
                <Text>{result.display_phone}</Text>
            </View>
            <Text style={styles.title}>Images</Text>
            <FlatList
                marginLeft={15}
                numColumns={3}
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return (
                        <View>
                            <Image style={styles.image} source={{uri: item}} />
                        </View>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        margin: 15,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    body: {
        fontSize: 14,
    },
    textBody: {
        margin: 15,
    },
    image: {
        height: 150,
        width: 150,
    },
});

export default ResultsShowScreen;