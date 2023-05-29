import React from 'react';
//import {View} from 'react-native';
import {CustomButton} from './CustomButton';
import {StyleSheet, View} from 'react-native';
import {GlobeAltIcon} from 'react-native-heroicons/solid';

export const ButtonRow = () => {
  return (
    <View>
      <View style={styles.container}>
        <CustomButton title={'Diagnostic'}>
          <GlobeAltIcon />
        </CustomButton>
        <CustomButton title={'Diagnostic'}>
          <GlobeAltIcon />
        </CustomButton>
        <CustomButton title={'Diagnostic'}>
          <GlobeAltIcon />
        </CustomButton>
      </View>
      <View style={styles.container}>
        <CustomButton title={'Diagnostic'}>
          <GlobeAltIcon />
        </CustomButton>
        <CustomButton title={'Diagnostic'}>
          <GlobeAltIcon />
        </CustomButton>
        <CustomButton title={'Diagnostic'}>
          <GlobeAltIcon />
        </CustomButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
