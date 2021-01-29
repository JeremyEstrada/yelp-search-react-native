import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import searchScreen from './SearchScreen';
import resultsScreen from './ResultsShowScreen';

const mainNavigator = createStackNavigator({
    Search: searchScreen,
    Result: resultsScreen,
}, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'PROJECT ELAPID API TESTS'
    }
});

export default createAppContainer(mainNavigator);