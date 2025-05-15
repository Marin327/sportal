import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

type PlayerCardProps = {
  playerName: string;
  playerPosition: string;
  playerImage: string;
};

const PlayerCard = ({ playerName, playerPosition, playerImage }: PlayerCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: playerImage }} style={styles.image} />
      <Text style={styles.name}>{playerName}</Text>
      <Text style={styles.position}>{playerPosition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 12,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  position: {
    fontSize: 14,
    color: '#888',
  },
});

export default PlayerCard;
