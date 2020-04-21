import React, { Component } from 'react';
import {
    StyleSheet,
} from 'react-native';
import colors from '@styles/colors'
import { marginHorizontal } from '@assets/StyleConfig'
import { ButtonGroup } from 'react-native-elements'

export const Buttons = (props) =>
    <ButtonGroup
        onPress={props.onPress}
        selectedIndex={props.selectedIndex}
        buttons={props.buttons}
        textStyle={style.textStyle}
        containerStyle={[style.containerStyle, props.style]}
        selectedButtonStyle={style.selectedButtonStyle}
        selectedTextStyle={style.selectedTextStyle}
        innerBorderStyle={style.innerBorderStyle}
    />

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