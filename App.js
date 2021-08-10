import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Header from './src/components/HeaderComponent/Header';



function App() {
  return (
    <SafeAreaProvider>
      <Header />
    </SafeAreaProvider>

  );
}
export default App;