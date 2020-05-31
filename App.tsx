import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {observer} from 'mobx-react-lite';
import { CounterStoreContext } from "./store/CounterStore";
import Router from './router/Router';

const App = () => {
  const counterStore = useContext(CounterStoreContext);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
       <Router />
       </View>
      
    </View>
  );
}


/*

 <Text style={styles.text}>Love God and keep HIS commandment </Text>
      <Text style={styles.text}>Great!</Text>
      <Text style={styles.text}>
                  {counterStore.count}
              </Text>
              <Button title="increment" onPress={() => counterStore.count++} />

              */


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
  },
  text: {
    color: '#fff'
  },
  wrapper: {
    width: '100%',
    maxWidth: 425,

  }

});

export default App