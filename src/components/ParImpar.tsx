import React from 'react';
import {View, Text} from 'react-native';

import Padrao from '../styles/default';
// import { Container } from './styles';

interface Props {
  numero?: number;
}

const components: React.FC<Props> = () => {
  return (
    <View>
      {5 % 2 === 0 ? (
        <Text style={Padrao.ex}>Par</Text>
      ) : (
        <Text style={Padrao.ex}>Impar</Text>
      )}
    </View>
  );
};

export default components;
