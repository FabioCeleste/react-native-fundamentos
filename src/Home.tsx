import React from 'react';
import {Button} from 'react-native';

// import { Container } from './styles';
interface Props {
  navigation: string;
}

const src: React.FC<Props> = ({navigation}) => {
  function navigate() {
    navigation.navigate('Main');
  }
  return <Button title="teste" onPress={navigate} />;
};

export default src;
