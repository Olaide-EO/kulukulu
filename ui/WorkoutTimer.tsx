import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

interface Props {
 
 onXPress: () => void; 	

}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		height: 50,
		width: '100%',
		backgroundColor: '#486550',
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 30,  
	},
	x: {
		color: '#B2A1A1',
		fontSize: 30
	},
	timeText: {
		color: '#fff',
		fontSize: 18
	}
})

export const WorkoutTimer: React.FC<Props> = (onXPress) => {
	return (
         <View style={styles.container}>
            <Text style={styles.timeText} > Hello Olaide</Text>

            <TouchableOpacity onPress={onXPress}>
            <Text style={styles.x}>x</Text>
            </TouchableOpacity>
         </View>
		)
}