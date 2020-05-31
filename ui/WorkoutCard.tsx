import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface Props {

}

export const WorkoutCard: React.FC<Props> = () => {
	return (
        <View style={styles.card}>
          <Text>hello Olaide</Text>
        </View>
		);
}

const styles = StyleSheet.create({
  card: {
  	borderRadius: 3,
  	backgroundColor: '#fff',
  	shadowColor: '#000',
  	shadowOffset: { width: 2, height: 2},
  	shadowOpacity: 0.3,
  	shadowRadius: 3,
  }
})