import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Padrao from '../styles/default';
// import { Container } from './styles';

interface Props {
  texto: string;
}

const Main: React.FC<Props> = (props) => {
  return <Text style={Padrao.ex}> {props.texto} </Text>;
};

const styles = StyleSheet.create({});

export default Main;
