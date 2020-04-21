import React, { Component } from 'react';
import { Path } from 'react-native-svg'

import { SafeAreaView, Dimensions, View, Text, TouchableOpacity } from 'react-native'
import { Buttons } from '@components/ButtonGroup'
import Icon from 'react-native-vector-icons/Entypo';
import Notification from 'react-native-vector-icons/Ionicons';
import strings from '@styles/strings';
import colors from '@styles/colors'
import { marginHorizontal } from '@assets/StyleConfig'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { styles } from '@styles/styles';

Icon.loadFont();
Notification.loadFont();
const value = 1234.56

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }

    render() {

        const data = [0, 80, 20, 90, 40, 80,]

        const buttons = ['Bankxt Account', 'Savings Goals']
        const { selectedIndex } = this.state

        const Line = ({ line }) => (
            <Path
                key={'line'}
                d={line}
                stroke={'rgb(134, 65, 244)'}
                strokeWidth={5}
                fill={'none'}
            />
        )
        return (
            <SafeAreaView style={styles.safeArea}>
                <KeyboardAwareScrollView style={styles.keyboardAwareScrollView} showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', ...marginHorizontal, marginTop: 40 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Text style={{ fontSize: 16, color: colors.ACCENT2, fontFamily: 'Avenir', fontWeight: '500' }}>{strings.CURRENT_BALANCE}</Text>
                                <Text style={{ fontSize: 14, color: colors.WHITE, fontFamily: 'Avenir', fontWeight: '800' }}>$  <Text style={{ fontSize: 28 }}>{value}</Text></Text>
                            </View>
                            <TouchableOpacity
                                style={{
                                    width: 22,
                                    height: 22,
                                    backgroundColor: colors.ACCENT3,
                                    borderRadius: 11,
                                    marginLeft: 10
                                }}>
                                <Icon name="chevron-down" size={22} color={colors.Primary1} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{
                            width: 54,
                            height: 54,
                            borderRadius: 10,
                            backgroundColor: colors.Primary1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Notification name="md-notifications" size={40} color={colors.ACCENT3} />
                        </TouchableOpacity>
                    </View>

                    <Buttons
                        style={{ marginTop: 25 }}
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                    />

                    <View style={{
                        backgroundColor: 'white',
                        height: Dimensions.get('screen').height,
                        marginTop: 25,
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                    }}>
                        <View style={{ flexDirection: 'row', ...marginHorizontal, marginTop: 24 }}>
                            <View>
                                <Text style={{ fontSize: 16, color: '#8E857E', fontFamily: 'Avenir', fontWeight: '500' }}>{strings.TOTAL}:</Text>
                                <Text style={{ fontSize: 14, color: colors.BLACK, fontFamily: 'Avenir', fontWeight: '800' }}>$  <Text style={{ fontSize: 28 }}>{value}</Text></Text>
                            </View>
                        </View>

                    </View>

                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}