/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Squares2X2Icon} from 'react-native-heroicons/solid';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.avatar} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <View>
          <Squares2X2Icon size={32} color={'black'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  avatar: {
    height: 48,
    width: 48,
    backgroundColor: '#B5B4B5',
    borderRadius: 14,
  },
});
