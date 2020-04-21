import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import colors from '@styles/colors'
import { marginHorizontal } from '@assets/StyleConfig'
import { AreaChart, Grid, ProgressCircle } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

export const AccountList = (props) =>
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


export const style = StyleSheet.create({
    containerStyle: {
        height: 54,
        marginTop: 20,
        borderRadius: 15,
        borderWidth: 0,
        backgroundColor: colors.ACCENT3,
        ...marginHorizontal
    },
    textStyle: { color: 'white', fontSize: 16, fontFamily: 'Avenir', fontWeight: '800' },
    selectedButtonStyle: { borderRadius: 15, backgroundColor: 'white' },
    selectedTextStyle: { color: colors.Primary1 },
    innerBorderStyle: { width: 0 }
})