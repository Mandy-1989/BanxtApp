import * as React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import HomePage from "@modules/home/Home"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const icon = route.name;
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {

                        if (route.name == 'globe') {
                            navigation.navigate(route.name, { isFromTab: true });
                        }
                        else {
                            navigation.navigate(route.name);
                        }
                    }
                };

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={{ flex: 1 }}>
                        {/* {
                            icon == 'questioncircleo' ?
                                <AntDesign style={{ alignSelf: 'center' }} name={icon} size={24} color={isFocused ? '#673ab7' : '#222'} /> :
                                <Entypo style={{ alignSelf: 'center' }} name={icon} size={22} color={isFocused ? '#673ab7' : '#222'} />
                        } */}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
                <Tab.Screen name="Home" component={HomePage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}