import React, { useState, useEffect } from 'react';
import { ScrollView, Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';

import SearchBar from './components/SearchBar';
import UpcomingMatchCard from './components/UpcomingMatchCard';
import LoadingScreen from './components/LoadingScreen';
import LiveMatch from './components/LiveMatch';
import TeamCard from './components/TeamCard';
import MatchStats from './components/MatchStats';
import TeamStanding from './components/TeamStanding';
import NewsCard from './components/NewsCard';

const categories = ['Футбол', 'Тенис', 'Баскетбол'];

const App = () => {
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Футбол');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const showNotification = (message) => {
    Alert.alert('Известие', message);
  };

  const renderFootball = () => (
    <>
      <Text style={styles.subtitle}>Предстоящи мачове във Футбол</Text>
      <UpcomingMatchCard homeTeam="Барселона" awayTeam="Реал Мадрид" matchTime="20:00" />
      <UpcomingMatchCard homeTeam="ЦСКА" awayTeam="Левски" matchTime="18:30" />

      <Text style={styles.subtitle}>На живо във Футбол</Text>
      <LiveMatch
        homeTeam="Лудогорец"
        awayTeam="Ботев"
        currentScore="2 - 1"
        time="75'"
        onGoal={() => showNotification('Гол за Лудогорец!')}
      />
      <LiveMatch homeTeam="Ювентус" awayTeam="Милан" currentScore="0 - 0" time="60'" />

      <Text style={styles.subtitle}>Отбори във Футбол</Text>
      <TeamCard teamName="Барселона" teamLogo="https://upload.wikimedia.org/wikipedia/commons/4/47/FC_Barcelona_%28crest%29.svg" ranking={1} />
      <TeamCard teamName="Реал Мадрид" teamLogo="https://upload.wikimedia.org/wikipedia/commons/5/56/Real_Madrid_CF.svg" ranking={2} />

      <Text style={styles.subtitle}>Статистика на мачове във Футбол</Text>
      <MatchStats homeTeam="Лудогорец" awayTeam="Ботев" homeTeamStats="50% владеене" awayTeamStats="48%" />

      <Text style={styles.subtitle}>Класиране във Футбол</Text>
      <TeamStanding teamName="Барселона" position={1} points={78} />
      <TeamStanding teamName="Реал Мадрид" position={2} points={76} />

      <Text style={styles.subtitle}>Футболни новини</Text>
      <NewsCard title="Барселона победи Реал" content="С гол в последните минути Барса спечели." />
      <NewsCard title="Лудогорец с титлата" content="След напрегнат мач Лудогорец взе шампионата." />
    </>
  );

  const renderTennis = () => (
    <>
      <Text style={styles.subtitle}>Предстоящи мачове в Тенис</Text>
      <UpcomingMatchCard homeTeam="Джокович" awayTeam="Надал" matchTime="17:00" />
      <UpcomingMatchCard homeTeam="Алкарас" awayTeam="Синер" matchTime="19:00" />

      <Text style={styles.subtitle}>На живо в Тенис</Text>
      <LiveMatch homeTeam="Мъри" awayTeam="Федерер" currentScore="1 - 1 (30:30)" time="3' сет" />

      <Text style={styles.subtitle}>Играчите в Тенис</Text>
      <TeamCard teamName="Новак Джокович" teamLogo="https://i.imgur.com/0rZ8n0G.png" ranking={1} />
      <TeamCard teamName="Рафаел Надал" teamLogo="https://i.imgur.com/GmtUv6S.png" ranking={2} />

      <Text style={styles.subtitle}>Тенис новини</Text>
      <NewsCard title="Джокович на полуфинал" content="След 3-часов мач, сърбинът се класира." />
      <NewsCard title="Алкарас изненада Синер" content="Младата звезда победи с 2:1 сета." />
    </>
  );

  const renderBasketball = () => (
    <>
      <Text style={styles.subtitle}>Предстоящи мачове в Баскетбол</Text>
      <UpcomingMatchCard homeTeam="Лейкърс" awayTeam="Голдън Стейт" matchTime="21:00" />
      <UpcomingMatchCard homeTeam="Чикаго Булс" awayTeam="Маями Хийт" matchTime="22:30" />

      <Text style={styles.subtitle}>На живо в Баскетбол</Text>
      <LiveMatch homeTeam="Бостън Селтикс" awayTeam="Милуоки" currentScore="98 - 97" time="4-ти период" />

      <Text style={styles.subtitle}>Отбори в Баскетбол</Text>
      <TeamCard teamName="Лейкърс" teamLogo="https://upload.wikimedia.org/wikipedia/en/3/3c/Los_Angeles_Lakers_logo.svg" ranking={3} />
      <TeamCard teamName="Голдън Стейт" teamLogo="https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg" ranking={4} />

      <Text style={styles.subtitle}>Класиране в Баскетбол</Text>
      <TeamStanding teamName="Лейкърс" position={1} points={65} />
      <TeamStanding teamName="Селтикс" position={2} points={62} />

      <Text style={styles.subtitle}>Баскетбол новини</Text>
      <NewsCard title="Леброн с трипъл-дабъл" content="Легендата на НБА изведе Лейкърс до победа." />
      <NewsCard title="Булс с ключова победа" content="Чикаго победи в оспорван мач срещу Бруклин." />
    </>
  );

  const renderContent = () => {
    switch (selectedCategory) {
      case 'Футбол':
        return renderFootball();
      case 'Тенис':
        return renderTennis();
      case 'Баскетбол':
        return renderBasketball();
      default:
        return <Text style={styles.defaultText}>Избери категория</Text>;
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добре дошъл в Sportal BG</Text>
      <SearchBar />

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.tab,
              selectedCategory === cat && styles.activeTab,
            ]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text style={[
              styles.tabText,
              selectedCategory === cat && styles.activeTabText,
            ]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.contentContainer}>
        {renderContent()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#FFD700',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#1E1E1E',
    marginHorizontal: 16,
    borderRadius: 8,
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#FFD700',
  },
  tabText: {
    color: '#ccc',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#FFD700',
    fontWeight: '700',
  },
  contentContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 12,
    color: '#FFD700',
  },
  defaultText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default App;
