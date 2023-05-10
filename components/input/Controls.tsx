import React from 'react';
import {View, Alert} from 'react-native';
import IconButton from './IconButton';
import { Feather } from "@expo/vector-icons";

const x = 35;
const backgroundColor = '#302f2b';

const Controls = () => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            paddingVertical: 10,
            backgroundColor: '#0f0f0e',
        }}>
            <IconButton color={backgroundColor} size={x} vibration onPress={function (): void {Alert.alert('You tapped the button!');}}>
                <Feather name='circle' size={x} color='#EF476F' />
            </IconButton>
            <IconButton color={backgroundColor} size={x} vibration onPress={function (): void {Alert.alert('You tapped the button!');}}>
                <Feather name='square' size={x} color='#FFD166' />
            </IconButton>
            <IconButton color={backgroundColor} size={x} vibration onPress={function (): void {Alert.alert('You tapped the button!');}}>
                <Feather name='triangle' size={x} color='#06D6A0' />
            </IconButton>
            <IconButton color={backgroundColor} size={x} vibration onPress={function (): void {Alert.alert('You tapped the button!');}}>
                <Feather name='x' size={x} color='#42c8f5' />
            </IconButton>
        </View>
    )
}

export default Controls;