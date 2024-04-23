import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TouchableOpacity } from 'react-native-ui-lib';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, color, onPress }) => {
  return (
    <TouchableOpacity marginV-10 padding-10 backgroundColor={color ? color : 'blue'} style={styles.button} onPress={onPress}>
      <Text center color='white'>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
  }
});

export default CustomButton;
