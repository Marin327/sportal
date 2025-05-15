import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type TeamCardProps = {
  teamName: string;
  teamLogo: string; // Може да бъде URL или името на картинка
  ranking: number;
};

const TeamCard = ({ teamName, teamLogo, ranking }: TeamCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.ranking}>Рейтинг: {ranking}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ranking: {
    fontSize: 14,
    color: '#777',
  },
});

export default TeamCard;
