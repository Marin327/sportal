import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type MatchStatsProps = {
  homeTeam: string;
  awayTeam: string;
  homeTeamStats: string;
  awayTeamStats: string;
};

const MatchStats = ({ homeTeam, awayTeam, homeTeamStats, awayTeamStats }: MatchStatsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{homeTeam} vs {awayTeam}</Text>
      <Text style={styles.stats}>Статистика на мач: </Text>
      <Text>{homeTeam}: {homeTeamStats}</Text>
      <Text>{awayTeam}: {awayTeamStats}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  stats: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
});

export default MatchStats;
