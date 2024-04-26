import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  color?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, color, onPress }) => {
  return (
    <TouchableOpacity style={{ ...styles.button, backgroundColor: color ? color : 'blue' }} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    justifyContent: 'center',
    color: 'white'
  },
  button: {
    borderRadius: 5,
    marginVertical: 10,
    padding: 10
  }
});

export default CustomButton;
