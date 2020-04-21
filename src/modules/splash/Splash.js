import React, { Component } from "react";
import { SafeAreaView, Text } from 'react-native';

export default class Splash extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SafeAreaView>
                <Text>
                    Splash Screen
                </Text>
            </SafeAreaView>
        )
    }
}