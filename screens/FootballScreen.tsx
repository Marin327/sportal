import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import UpcomingMatchCard from '../components/UpcomingMatchCard';
import NewsCard from '../components/NewsCard';

const FootballScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Футбол</Text>

      <Text style={styles.subtitle}>Предстоящи мачове</Text>
      <UpcomingMatchCard homeTeam="Барселона" awayTeam="Реал Мадрид" matchTime="20:00" />
      <UpcomingMatchCard homeTeam="ЦСКА" awayTeam="Левски" matchTime="18:30" />

      <Text style={styles.subtitle}>Топ новини за футбол</Text>
      <NewsCard title="Лудогорец спечели Купата на България!" content="Лудогорец победи в драматичен финал." />
      <NewsCard title="Барселона надви Реал Мадрид" content="Барселона спечели с 3-0." />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 12,
  },
});

export default FootballScreen;