import {StyleSheet, Image} from 'react-native';

import {Text, View} from './utils/Themed';
import ActionButton from './components/ActionButton/ActionButton';

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>WonderBody</Text>
        <Text style={styles.title}>Bodyfi</Text>
      </View>

      <Image source={require('../assets/images/heart-rate.png')} style={{width: 250, height: 250}} />
      <View style={styles.buttonContainer}>
        <ActionButton href="/(tabs)" replace text="Get Started" />
        <Text style={styles.loginText}>
          Already Have An Account? <Text style={styles.loginSpecial}>Log In</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 5,
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  loginText: {
    paddingTop: 17,
  },
  loginSpecial: {
    textDecorationLine: 'underline',
    color: '#17B28D',
  },
});

export default WelcomePage;
