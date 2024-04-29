import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Login Screen</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <Button title='Login' onPress={() => navigation.navigate("Homepage")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
});
