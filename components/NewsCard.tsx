import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type NewsCardProps = {
  title: string;
  content: string;
};

const NewsCard = ({ title, content }: NewsCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  content: {
    fontSize: 14,
    color: '#555',
  },
});

export default NewsCard;
