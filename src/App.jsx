import React from 'react';
import {ImageBackground, SafeAreaView} from 'react-native';
import Breathing from './screens/Breathing';
import Header from './components/Header';

export default function App() {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('./assets/images/bg.png')}
        resizeMode="cover"
        style={{height: '100%'}}>
        <Header />
        <Breathing />
      </ImageBackground>
    </SafeAreaView>
  );
}
