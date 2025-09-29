import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const Richard = "Richard";
  return (
    <View style={styles.container}>
      <Text>Richard Gabriel</Text>
      <Text>2o Info - Turma B</Text>
      <Text>2025</Text>
      <StatusBar style="auto"/>

    <TextInput
      style={styles.input}
      value={Richard}
      editable={false}
   />

<StatusBar style='light'/>
</View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
