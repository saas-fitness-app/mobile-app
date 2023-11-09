import {Link, LinkProps} from 'expo-router';
import {StyleSheet} from 'react-native';

import {Text, View} from '../../utils/Themed';

import Colors from '../../../constants/Colors';

interface ActionButtonProps extends LinkProps<string> {
  text: string;
}

const ActionButton = ({href, replace, text}: ActionButtonProps) => {
  return (
    <Link href={href} replace={replace}>
      <View style={styles.link}>
        <Text style={styles.linkText} darkColor={Colors.dark.text} lightColor={Colors.dark.text}>
          {text}
        </Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  link: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 290,
    height: 72,
    borderRadius: 24,
    backgroundColor: '#17B28D',
    color: 'white',
    fontWeight: 'bold',
  },

  linkText: {
    fontSize: 25,
    fontWeight: '600',
  },
});

export default ActionButton;
