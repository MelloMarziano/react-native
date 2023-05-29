import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {MagnifyingGlassIcon} from 'react-native-heroicons/solid';

export const InputSearch = () => {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <MagnifyingGlassIcon />
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 30,
    backgroundColor: 'white',
  },
  shadowProp: {
    shadowColor: '#B5B4B5',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
  input: {
    height: 40,
    padding: 10,
  },
});
