import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';
import CustomHeader from '../components/CustomHeader';
import { requestPermission } from '../utils/permissionUtil';
import CustomButton from '../components/CustomButton';

const SecondScreen: React.FC = () => {

  const requestContactsPermission = async () => {
    await requestPermission('CONTACTS');
  };

  const requestCalendarPermission = async () => {
    await requestPermission('CALENDARS');
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Second Screen" />
      <View style={styles.wrapper}>
        <Text marginV-20>This is the Second Screen</Text>
        <CustomButton title="Request Contacts Permission" onPress={requestContactsPermission} />
        <CustomButton title="Request Calendar Permission" onPress={requestCalendarPermission} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
  }
});

export default SecondScreen;
