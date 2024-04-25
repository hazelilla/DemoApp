import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import CustomButton from '../components/CustomButton';
import CustomHeader from '../components/CustomHeader';
import { StackNavigationProp } from '@react-navigation/stack';
import { requestPermission } from '../utils/permissionUtil';

type RootStackParamList = {
  HomeScreen: undefined;
  SecondScreen: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  const goToSecondScreen = () => {
    navigation.navigate('SecondScreen');
  };

  const requestCameraPermission = async () => {
    await requestPermission('CAMERA');
  };

  const requestMicrophonePermission = async () => {
    await requestPermission('MICROPHONE');
  };

  const requestPhotoLibraryPermission = async () => {
    await requestPermission('PHOTO_LIBRARY');
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Home Screen" />
      <View flex center>
        <Text marginv-20>This is the Home Screen</Text>
        <CustomButton title="Go to Second Screen" onPress={goToSecondScreen} color='pink'/>
        <CustomButton title="Request Camera Permission" onPress={requestCameraPermission} />
        <CustomButton title="Request Microphone Permission" onPress={requestMicrophonePermission} />
        <CustomButton title="Request Photo Library Permission" onPress={requestPhotoLibraryPermission} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default HomeScreen;
