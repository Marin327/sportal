import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

import SearchBar from './components/SearchBar';
import CategoryList from './components/CategoryList';
import UpcomingMatchCard from './components/UpcomingMatchCard';
import LoadingScreen from './components/LoadingScreen';
import LiveMatch from './components/LiveMatch';
import TeamCard from './components/TeamCard';
import MatchStats from './components/MatchStats';
import TeamStanding from './components/TeamStanding';
import NewsCard from './components/NewsCard';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Футбол');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    switch (selectedCategory) {
      case 'Футбол':
        return (
          <>
            <Text style={styles.subtitle}>Предстоящи мачове</Text>
            <UpcomingMatchCard homeTeam="Барселона" awayTeam="Реал Мадрид" matchTime="20:00" />
            <UpcomingMatchCard homeTeam="ЦСКА" awayTeam="Левски" matchTime="18:30" />

            <Text style={styles.subtitle}>На живо</Text>
            <LiveMatch homeTeam="Лудогорец" awayTeam="Ботев" currentScore="2 - 1" />
            <LiveMatch homeTeam="Ювентус" awayTeam="Милан" currentScore="0 - 0" />

            <Text style={styles.subtitle}>Отбори</Text>
            <TeamCard teamName="Барселона" teamLogo="https://upload.wikimedia.org/wikipedia/commons/4/47/FC_Barcelona_%28crest%29.svg" ranking={1} />
            <TeamCard teamName="Реал Мадрид" teamLogo="https://upload.wikimedia.org/wikipedia/commons/5/56/Real_Madrid_CF.svg" ranking={2} />

            <Text style={styles.subtitle}>Статистика на мачове</Text>
            <MatchStats homeTeam="Лудогорец" awayTeam="Ботев" homeTeamStats="50% владеене" awayTeamStats="48%" />

            <Text style={styles.subtitle}>Класиране</Text>
            <TeamStanding teamName="Барселона" position={1} points={78} />
            <TeamStanding teamName="Реал Мадрид" position={2} points={76} />

            <Text style={styles.subtitle}>Футболни новини</Text>
            <NewsCard title="Барселона победи Реал" content="С гол в последните минути Барса спечели." />
            <NewsCard title="Лудогорец с титлата" content="След напрегнат мач Лудогорец взе шампионата." />
          </>
        );

      case 'Тенис':
        return (
          <>
            <Text style={styles.subtitle}>Предстоящи мачове</Text>
            <UpcomingMatchCard homeTeam="Джокович" awayTeam="Надал" matchTime="17:00" />
            <UpcomingMatchCard homeTeam="Алкарас" awayTeam="Синер" matchTime="19:00" />

            <Text style={styles.subtitle}>На живо</Text>
            <LiveMatch homeTeam="Мъри" awayTeam="Федерер" currentScore="1 - 1 (30:30)" />

            <Text style={styles.subtitle}>Играчите</Text>
            <TeamCard teamName="Новак Джокович" teamLogo="https://i.imgur.com/0rZ8n0G.png" ranking={1} />
            <TeamCard teamName="Рафаел Надал" teamLogo="https://i.imgur.com/GmtUv6S.png" ranking={2} />

            <Text style={styles.subtitle}>Тенис новини</Text>
            <NewsCard title="Джокович на полуфинал" content="След 3-часов мач, сърбинът се класира." />
            <NewsCard title="Алкарас изненада Синер" content="Младата звезда победи с 2:1 сета." />
          </>
        );

      case 'Баскетбол':
        return (
          <>
            <Text style={styles.subtitle}>Предстоящи мачове</Text>
            <UpcomingMatchCard homeTeam="Лейкърс" awayTeam="Голдън Стейт" matchTime="21:00" />
            <UpcomingMatchCard homeTeam="Чикаго Булс" awayTeam="Маями Хийт" matchTime="22:30" />

            <Text style={styles.subtitle}>На живо</Text>
            <LiveMatch homeTeam="Бостън Селтикс" awayTeam="Милуоки" currentScore="98 - 97" />

            <Text style={styles.subtitle}>Отбори</Text>
            <TeamCard teamName="Лейкърс" teamLogo="https://upload.wikimedia.org/wikipedia/en/3/3c/Los_Angeles_Lakers_logo.svg" ranking={3} />
            <TeamCard teamName="Голдън Стейт" teamLogo="https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg" ranking={4} />

            <Text style={styles.subtitle}>Класиране</Text>
            <TeamStanding teamName="Лейкърс" position={1} points={65} />
            <TeamStanding teamName="Селтикс" position={2} points={62} />

            <Text style={styles.subtitle}>Баскетбол новини</Text>
            <NewsCard title="Леброн с трипъл-дабъл" content="Легендата на НБА изведе Лейкърс до победа." />
            <NewsCard title="Булс с ключова победа" content="Чикаго победи в оспорван мач срещу Бруклин." />
          </>
        );

      default:
        return <Text>Избери категория</Text>;
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Добре дошъл в Sportal BG</Text>
      <SearchBar />

      <Text style={styles.subtitle}>Категории</Text>
      <CategoryList categories={['Футбол', 'Тенис', 'Баскетбол']} onSelectCategory={setSelectedCategory} />

      {renderContent()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
 title: {
  fontSize: 26,
  fontWeight: 'bold',
  marginBottom: 16,
  marginTop: 32, // Добавено
  textAlign: 'center', // По желание за центриране
},
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 12,
  },
});

export default App;
