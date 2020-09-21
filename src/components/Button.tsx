import React from 'react';
import {StyleSheet, Text, Dimensions, TouchableHighlight} from 'react-native';

// import { Container } from './styles';

interface Props {
  onClick: (n?: number, op?: string) => void;
  label: string;
  double?: boolean;
  triple?: boolean;
  op?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const stylesButton: any = [styles.buttom];
  if (props.double) {
    stylesButton.push(styles.buttomDouble);
  }
  if (props.triple) {
    stylesButton.push(styles.buttomTriple);
  }
  if (props.op) {
    stylesButton.push(styles.operationButton);
  }

  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  buttom: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#888',
  },

  operationButton: {
    backgroundColor: '#fa9231',
    color: '#fff',
  },

  buttomDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },

  buttomTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});

export default Button;
