import React from "react";
import { Header } from 'react-native-elements';

const AppBar = () => {
  return (
    <>
      <Header
        backgroundColor='black'
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Wrestling App', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        onPress={() => alert("click")}
        placement="center"
      />
    </>
  )
}

export default AppBar