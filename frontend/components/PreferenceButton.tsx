import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface PreferenceButtonProps {
  label: string;
  select: boolean;
  onPress: () => void;
}

const Button: React.FC<PreferenceButtonProps> = ({ label, select, onPress}) => {
  return (
    <TouchableOpacity style={[styles.button, select ? styles.selectedButton :styles.unselectedButton]} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e7e7e7',
    color: 'black'
  },
  selectedButton: {
    backgroundColor: 'blue',
  },
  unselectedButton: {
    backgroundColor: '#f0f0f0',
  },
  label: {
    color: 'white',
    fontSize: 16,
  },
});

export default Button;
