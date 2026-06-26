import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Animacion1 from './components/Animacion1';
import Animacion2 from './components/Animacion2';

export default function App() {
  return (
    <View style={styles.container}>
        <Animacion2/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
});
