import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface Props {

}

const styles = StyleSheet.create({
 fab: { 
  width: 40,
  height: 40,
  backgroundColor: 'pink',
  position: 'absolute',
   right: 10,
   bottom: 10,
   borderRadius: 20,
   shadowColor: '#000',
  	shadowOffset: { width: 2, height: 2},
  	shadowOpacity: 0.3,
  	shadowRadius: 3,

 },
 text: {
  fontSize: 18
 }
});


export const Fab: React.FC<Props> = () => {

	return (
      <TouchableOpacity style={styles.fab}>
      	<Text style={styles.text}>+</Text>
      </TouchableOpacity>
		);
}