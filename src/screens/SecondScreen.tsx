import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import CustomHeader from '../components/CustomHeader';
import { requestPermission } from '../utils/permissionUtil';
import CustomButton from '../components/CustomButton';
import { useTranslation } from 'react-i18next';

const SecondScreen: React.FC = () => {
  const { t } = useTranslation();
  const contactsPermissionReason = t('common:microphonePermissionReason');
  const calendarPermissionReason = t('common:microphonePermissionReason');

  const requestContactsPermission = async () => {
    await requestPermission('CONTACTS', contactsPermissionReason);
  };

  const requestCalendarPermission = async () => {
    await requestPermission('CALENDARS', calendarPermissionReason);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Second Screen" />
      <View flex center>
        <Text marginV-20>This is the Second Screen</Text>
        <CustomButton title="Request Contacts Permission" onPress={requestContactsPermission} />
        <CustomButton title="Request Calendar Permission" onPress={requestCalendarPermission} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default SecondScreen;
