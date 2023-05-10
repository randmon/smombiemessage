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
      marginTop: 50,
    }}>
      <StatusBar style="auto" />
      <View style={{
        width: '100%',
        flexGrow: 1,
      }}>
        <MessageArea/>
      </View>
      <View style={{
        width: '100%',
      }}>
        <Controls/>
      </View>
    </View>
  );
}
