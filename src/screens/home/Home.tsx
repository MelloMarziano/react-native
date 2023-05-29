/* eslint-disable react/react-in-jsx-scope */
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import {TitlePage} from '../../components/TitlePage';
import {InputSearch} from '../../components/InputSearch';
import {Notification} from '../../components/Notification';
import {ButtonRow} from '../../components/ButtonRow';

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header />
        <ScrollView style={styles.scrollStyle}>
          <TitlePage />
          <InputSearch />
          <Notification />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>What do you need?</Text>
          </View>
          <ButtonRow />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5EBFC',
    paddingBottom: 10,
  },
  titleContainer: {
    marginTop: 30,
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollStyle: {
    height: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
