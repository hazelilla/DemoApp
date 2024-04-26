import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomHeader from '../components/CustomHeader';
import { StackNavigationProp } from '@react-navigation/stack';
import { requestPermission } from '../utils/permissionUtil';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, Easing } from 'react-native-reanimated';

type RootStackParamList = {
  HomeScreen: undefined;
  SecondScreen: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const imageData = [
  { id: 1, image: require('../assets/images/image1.jpg') },
  { id: 2, image: require('../assets/images/image2.jpg') },
  { id: 3, image: require('../assets/images/image3.jpg') },
];

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [isFlatlistVisible, setIsFlatlistVisible] = useState(false);

  const flatlistHeight = useSharedValue(0);
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    height: flatlistHeight.value,
  }));

  const rotateStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  const fadeIn = () => {
    flatlistHeight.value = withTiming(imageData.length * 150, {
      duration: 800,
      easing: Easing.inOut(Easing.ease),
    });
  };

  const fadeOut = () => {
    flatlistHeight.value = withTiming(0, {
      duration: 800,
      easing: Easing.inOut(Easing.ease),
    });
  };

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

  const handleOpenFlatlist = () => {
    setIsFlatlistVisible(!isFlatlistVisible);
    isFlatlistVisible ? fadeOut() : fadeIn();
  };

  const handleItemPress = () => {
    rotation.value = withTiming(rotation.value === 0 ? 360 : 0, {
      duration: 2000,
      easing: Easing.linear,
    });
  };

  const renderItem = ({ item }: { item: typeof imageData[number] }) => (
    <TouchableOpacity onPress={handleItemPress}>
      <Animated.Image source={item.image} style={[styles.image, rotateStyle]} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title="Home Screen" />
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <CustomButton title="Go to Second Screen" onPress={goToSecondScreen} color="pink" />
        <CustomButton title="Request Camera Permission" onPress={requestCameraPermission} />
        <CustomButton title="Request Microphone Permission" onPress={requestMicrophonePermission} />
        <CustomButton title="Request Photo Library Permission" onPress={requestPhotoLibraryPermission} />
        <CustomButton
          title={isFlatlistVisible ? 'Close Flatlist' : 'Open Flatlist'}
          onPress={handleOpenFlatlist}
          color="purple"
        />
        <Animated.View style={[styles.flatlistContainer, animatedStyle]}>
          <FlatList
            data={imageData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 200,
    height: 250,
    margin: 10,
    borderRadius: 10,
  },
  flatlistContainer: {
    overflow: 'hidden',
  },
});

export default HomeScreen;