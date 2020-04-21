import React, { Component } from "react";
import { SafeAreaView, Text } from 'react-native';
import NavigationService from "@navigation/NavigationService"
import { styles } from "@styles/splash";

export default class Splash extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        setTimeout(() => {
            NavigationService.navigate("TabNavigator", null)
        }, 3000)
    }

    render() {
        return (
            <SafeAreaView style={styles.viewParent}>
                <Text>Splash Screen</Text>
            </SafeAreaView>
        )
    }
}