import React, { ComponentProps } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleProp, TextStyle } from 'react-native';

interface TabBarIconProps {
  name: ComponentProps<typeof Ionicons>['name'];
  color: string;
  style?: StyleProp<TextStyle>;
}

export function TabBarIcon({ name, color, style }: TabBarIconProps) {
  return <Ionicons name={name} size={28} color={color} style={[{ marginBottom: -3 }, style]} />;
}