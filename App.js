import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
import AnimacionImage from './components/AnimacionImage';
import AnimacionScrollView from './components/AnimacionScrollView';
import AnimacionFlatList from './components/AnimacionFlatList';
import AnimacionSectionList from './components/AnimacionSectionList';
import Animacion6 from './components/Animacion6';

export default function App() {
  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
    >
      
      <View style={styles.spacer}>
        <Animacion6 />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  content: {
    paddingBottom: 100,
  },
  spacer: {
    marginBottom: 30,
  },
});
