import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation';
import {store} from './src/store';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
