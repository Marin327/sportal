import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type MatchItemProps = {
  homeTeam: string;
  awayTeam: string;
  score: string;
  status: string; // Пример: "На живо", "Полувреме", "Край"
};

const MatchItem = ({ homeTeam, awayTeam, score, status }: MatchItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.team}>{homeTeam}</Text>
        <Text style={styles.score}>{score}</Text>
        <Text style={styles.team}>{awayTeam}</Text>
      </View>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    elevation: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  team: {
    fontSize: 16,
    fontWeight: '600',
    width: '35%',
    textAlign: 'center',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e90ff',
  },
  status: {
    marginTop: 6,
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});

export default MatchItem;
