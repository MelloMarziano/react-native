import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const TitlePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleHeader2}>Hello,</Text>
      <Text style={styles.titleHeader1}>Jessika! &nbsp;💊</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 130,
    justifyContent: 'flex-end',
  },
  titleHeader2: {
    fontSize: 28,
    fontWeight: '400',
  },
  titleHeader1: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
