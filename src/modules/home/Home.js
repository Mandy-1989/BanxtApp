import React, { Component } from 'react';
import { Path } from 'react-native-svg'
import { AreaChart, Grid, ProgressCircle } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { SafeAreaView, Dimensions, View, Text, TouchableOpacity } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Entypo';
import Notification from 'react-native-vector-icons/Ionicons';
import strings from '@styles/strings';
import colors from '@styles/colors'
import { marginHorizontal } from '@assets/StyleConfig'

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
            <SafeAreaView style={{ backgroundColor: colors.ACCENT1 }}>
                <View style={{ backgroundColor: colors.ACCENT1 }}>
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


                    <ButtonGroup
                        onPress={this.updateIndex}
                        selectedIndex={selectedIndex}
                        buttons={buttons}
                        textStyle={{ color: 'white', fontSize: 16, fontFamily: 'Avenir', fontWeight: '800' }}
                        containerStyle={{ height: 54, marginTop: 20, borderRadius: 15, borderWidth: 0, backgroundColor: colors.ACCENT3, ...marginHorizontal }}
                        selectedButtonStyle={{ borderRadius: 15, backgroundColor: 'white' }}
                        selectedTextStyle={{ color: colors.Primary1 }}
                        innerBorderStyle={{ width: 0 }}
                    />

                    <View style={{
                        width: 167,
                        marginLeft: 10,
                        height: 184,
                        backgroundColor: 'white',
                        borderRadius: 10
                    }}>
                        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 10, marginRight: 10, alignItems: 'center' }}>
                            <View style={{ height: 15, width: 15, backgroundColor: 'blue', marginLeft: 12 }}></View>
                            <ProgressCircle
                                style={{ height: 40, width: 40, position: 'absolute' }}
                                progress={0.3}
                                progressColor={'rgb(134, 65, 244)'}
                                strokeWidth={7}
                                cornerRadius={5}
                            />
                            <Icon name="dots-three-vertical" size={30} color="#4F8EF7" />
                        </View>
                        <AreaChart
                            style={{ marginTop: 20, height: 70, width: '100%' }}
                            data={data}
                            contentInset={{ top: 5, bottom: 5 }}
                            curve={shape.curveNatural}
                            svg={{ fill: 'rgba(134, 65, 244, 0.1)' }}
                        >
                            <Line />
                        </AreaChart>
                        <Text style={{ alignSelf: 'center' }}>Main Banxt</Text>
                        <Text style={{ alignSelf: 'center' }}>$ 1,234.56</Text>

                    </View>

                </View>
            </SafeAreaView>
        )
    }
}