import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Controls from './components/input/Controls';
import MessageArea from './components/messaging/message-area';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 40,
    }}>
      <StatusBar style="auto" />
      <View style={{
        width: '100%',
        maxHeight: '90%',
      }}>
        <MessageArea/>
      </View>
      <View style={{
        width: '100%',
        maxHeight: '10%',
      }}>
        <Controls/>
      </View>
    </View>
  );
}
