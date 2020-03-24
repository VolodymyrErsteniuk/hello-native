import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

function Home() {
  const [greeting, setGreeting] = useState('');

  const sayHi = () => {
    setGreeting('Welcome to SoftServe');
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header />

        <TouchableOpacity testID="sayHi" onPress={sayHi}>
          <Text>Say Hi</Text>
        </TouchableOpacity>

        <Text testID="greeting">{greeting}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
