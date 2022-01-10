/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SwitchNavigation} from './src';
import {AuthProvider} from './src/contexts';

const App: () => Node = () => {
  return (
    <AuthProvider>
      <SwitchNavigation />
    </AuthProvider>
  );
};

export default App;
