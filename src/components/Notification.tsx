import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {XMarkIcon} from 'react-native-heroicons/solid';

const staticImage = require('./../../assets/img/mask.webp');
export const Notification = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.item, styles.itemICon]}
        activeOpacity={0.7}>
        <XMarkIcon style={{alignSelf: 'center'}} color={'white'} />
      </TouchableOpacity>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>Stay home!</Text>
        <Text style={styles.notificationSubtitle}>
          Schedule an e-visit and discuss the plan with a doctor.
        </Text>
      </View>
      <Image style={styles.tinyLogo} source={staticImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 160,
    backgroundColor: '#6D78DA',
    marginTop: 30,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  notificationContent: {
    width: '55%',
  },
  notificationTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  notificationSubtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '300',
    marginTop: 10,
  },
  item: {
    borderColor: 'rgba(0,0,0,0.2)',
    height: 42,
    width: 42,
    borderRadius: 100,
  },
  itemICon: {
    backgroundColor: '#ED814F',
    position: 'absolute',
    top: -20,
    right: -10,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    height: 230,
    width: 180,
  },
});
