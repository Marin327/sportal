import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type TeamStandingProps = {
  teamName: string;
  position: number;
  points: number;
};

const TeamStanding = ({ teamName, position, points }: TeamStandingProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.position}>Място: {position}</Text>
      <Text style={styles.team}>{teamName}</Text>
      <Text style={styles.points}>Точки: {points}</Text>
      </View>
      );
};

const styles = StyleSheet.create({
container: {
padding: 10,
marginVertical: 6,
backgroundColor: '#fff',
borderRadius: 6,
elevation: 2,
},
position: {
fontSize: 16,
fontWeight: 'bold',
color: '#ff6347',
},
team: {
fontSize: 16,
fontWeight: '600',
},
points: {
fontSize: 14,
color: '#888',
},
});

export default TeamStanding;
