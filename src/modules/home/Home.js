import React, { Component } from 'react';
import { SafeAreaView, Text } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SafeAreaView>
                <Text>Home Page</Text>
            </SafeAreaView>
        )
    }
}