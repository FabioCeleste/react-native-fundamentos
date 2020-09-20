import React from 'react';
import {View, Text} from 'react-native';

// import { Container } from './styles';
import Padrao from '../styles/default';

interface Props {
  texto?: string;
  numeros?: number;
}

export const Multi: React.FC<Props> = (props) => {
  return (
    <View>
      <Text style={Padrao.ex}>
        {typeof props.texto === 'string' &&
          props.texto.split('').reverse().join('')}
        {typeof props.texto === 'undefined' &&
          'stringNull'.split('').reverse().join('')}
      </Text>
    </View>
  );
};

export const Mega: React.FC<Props> = (props) => {
  const [min, max] = [1, 60];
  if (typeof props.numeros === 'number') {
    const numeros: number[] = Array(props.numeros || 6).fill(0);
    for (let i = 0; i < numeros.length; i++) {
      let novo = 0;
      while (numeros.includes(novo)) {
        novo = Math.floor(Math.random() * (max - min + 1) + min);
      }
      numeros[i] = novo;
    }
    numeros.sort((a, b) => a - b);
    return (
      <View>
        <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
      </View>
    );
  } else {
    const numeros: number[] = Array(6).fill(0);
    for (let i = 0; i < numeros.length; i++) {
      let novo = 0;
      while (numeros.includes(novo)) {
        novo = Math.floor(Math.random() * (max - min + 1) + min);
      }
      numeros[i] = novo;
    }
    numeros.sort((a, b) => a - b);
    return (
      <View>
        <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
      </View>
    );
  }
};
