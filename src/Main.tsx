import React, {useState} from 'react';

import {View, StyleSheet, Text} from 'react-native';
import Button from './components/Button';
import Display from './components/Display';

// import { Container } from './styles';

const Main: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [clearDisplay, setClearDisplay] = useState(false);
  const [operation, setOperation] = useState('');
  const [values, setValues] = useState([0, 0]);
  const [current, setCurrent] = useState(0);

  function addDigit(n: string): void {
    if (n === '.' && displayValue.includes('.')) {
      return;
    }

    const clearDisplayValidate = displayValue === '0' || clearDisplay;
    const currentValue = clearDisplayValidate ? '' : displayValue;
    const newDisplayValue = currentValue + n;
    setDisplayValue(newDisplayValue);
    setClearDisplay(false);
    if (n !== '.') {
      const newValues = [...values];
      const newNumber = parseFloat(newDisplayValue);
      newValues[current] = newNumber;
      setValues(newValues);
    }
  }
  function clearMemory(): void {
    setDisplayValue('0');
    setClearDisplay(false);
    setOperation('');
    setValues([0, 0]);
    setCurrent(0);
  }
  function operationFunc(op: string): void {
    if (current === 0) {
      setOperation(op);
      setClearDisplay(true);
      setCurrent(1);
    } else {
      const equals = op === '=';
      const newValues = [...values];

      try {
        newValues[0] = eval(`${newValues[0]} ${operation} ${newValues[1]}`);
      } catch {
        newValues[0] = values[0];
      }
      newValues[1] = 0;
      setDisplayValue(newValues[0].toString());
      setOperation(equals ? '' : op);
      setCurrent(equals ? 0 : 1);
      setValues(newValues);
    }
  }

  return (
    <View style={styles.container}>
      <Display value={displayValue} />
      <View style={styles.buttons}>
        <Button label={'AC'} triple onClick={clearMemory} />
        <Button label={'/'} op onClick={() => operationFunc('/')} />
        <Button label={'7'} onClick={() => addDigit('7')} />
        <Button label={'8'} onClick={() => addDigit('8')} />
        <Button label={'9'} onClick={() => addDigit('9')} />
        <Button label={'*'} op onClick={() => operationFunc('*')} />
        <Button label={'4'} onClick={() => addDigit('4')} />
        <Button label={'5'} onClick={() => addDigit('5')} />
        <Button label={'6'} onClick={() => addDigit('6')} />
        <Button label={'-'} op onClick={() => operationFunc('-')} />
        <Button label={'1'} onClick={() => addDigit('1')} />
        <Button label={'2'} onClick={() => addDigit('2')} />
        <Button label={'3'} onClick={() => addDigit('3')} />
        <Button label={'+'} op onClick={() => operationFunc('+')} />
        <Button label={'0'} double onClick={() => addDigit('0')} />
        <Button label={'.'} onClick={() => addDigit('.')} />
        <Button label={'='} op onClick={() => operationFunc('=')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Main;
