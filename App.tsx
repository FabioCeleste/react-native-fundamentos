import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import Draw from './src/Menu';

const appum: React.FC = () => {
  return (
    <NavigationContainer>
      <Draw />
    </NavigationContainer>
  );
};

export default appum;
