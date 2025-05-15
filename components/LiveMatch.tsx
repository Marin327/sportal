import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type LiveMatchProps = {
  homeTeam: string;
  awayTeam: string;
  currentScore: string;
};

const LiveMatch = ({ homeTeam, awayTeam, currentScore }: LiveMatchProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teams}>{homeTeam} vs {awayTeam}</Text>
      <Text style={styles.score}>{currentScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
  },
  teams: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  score: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff4500',
    marginTop: 4,
  },
});

export default LiveMatch;
