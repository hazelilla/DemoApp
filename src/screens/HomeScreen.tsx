import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomHeader from '../components/CustomHeader';
import { StackNavigationProp } from '@react-navigation/stack';

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

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Home Screen" />
      <View style={styles.content}>
        <Text>This is the Home Screen</Text>
        <CustomButton title="Go to Second Screen" onPress={goToSecondScreen} />
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

export default HomeScreen;
