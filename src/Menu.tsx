import React from 'react';

import Simple from './components/Simple';
import ParImpar from './components/ParImpar';
import {Multi, Mega} from './components/Multi';

import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

// import { Container } from './styles';

const MyDrawer: React.FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Simple" component={Simple} />
      <Drawer.Screen name="ParImpar" component={ParImpar} />
      <Drawer.Screen name="Multi" component={Multi} />
      <Drawer.Screen name="Mega" component={Mega} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
