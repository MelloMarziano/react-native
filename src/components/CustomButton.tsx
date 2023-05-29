import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export interface Props {
  title: String;
  children: JSX.Element;
  //isSelected: boolean;
}

export const CustomButton = ({title, children}: Props) => {
  return (
    <TouchableOpacity style={[styles.container, styles.shadowProp]}>
      <View style={styles.buttonContent}>
        {children}
        <Text style={{marginTop: 10}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: 110,
    backgroundColor: 'white',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadowProp: {
    shadowColor: '#B5B4B5',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  buttonContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
