// /app/components/UpcomingMatchCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type MatchCardProps = {
  homeTeam: string;
  awayTeam: string;
  matchTime: string;
};

const UpcomingMatchCard = ({ homeTeam, awayTeam, matchTime }: MatchCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>{homeTeam} vs {awayTeam}</Text>
      <Text style={styles.text}>Време: {matchTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 12,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default UpcomingMatchCard;
