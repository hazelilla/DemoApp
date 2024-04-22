import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import CustomHeader from '../components/CustomHeader';

const SecondScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Second Screen" />
      <View style={styles.content}>
        <Text>This is the Second Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SecondScreen;
