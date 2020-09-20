import React from 'react';

import {View, StyleSheet} from 'react-native';

import Simple from './components/Simple';

// import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <View style={styles.container}>
      <Simple texto="eee" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main;
