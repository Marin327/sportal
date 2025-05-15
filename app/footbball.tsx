import { ScrollView, StyleSheet, Text } from 'react-native';
import LiveMatch from '../components/LiveMatch';
import UpcomingMatchCard from '../components/UpcomingMatchCard';
import TeamCard from '../components/TeamCard';
import MatchStats from '../components/MatchStats';
import TeamStanding from '../components/TeamStanding';
import NewsCard from '../components/NewsCard';

export default function FootballScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Футбол</Text>

      <Text style={styles.subtitle}>Предстоящи мачове</Text>
      <UpcomingMatchCard homeTeam="Барселона" awayTeam="Реал Мадрид" matchTime="20:00" />
      <UpcomingMatchCard homeTeam="ЦСКА" awayTeam="Левски" matchTime="18:30" />

      <Text style={styles.subtitle}>На живо</Text>
      <LiveMatch homeTeam="Лудогорец" awayTeam="Ботев" currentScore="2 - 1" />

      <Text style={styles.subtitle}>Отбори</Text>
      <TeamCard teamName="Барселона" teamLogo="..." ranking={1} />

      <Text style={styles.subtitle}>Статистика</Text>
      <MatchStats homeTeam="Барселона" awayTeam="Реал" homeTeamStats="60%" awayTeamStats="40%" />
      <TeamStanding teamName="Барса" position={1} points={75} />

      <Text style={styles.subtitle}>Новини</Text>
      <NewsCard title="Барса победи Реал!" content="Историческа победа..." />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 12,
  },
});
