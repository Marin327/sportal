import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CategoryList from '../components/CategoryList';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (category: string) => {
    if (category === 'Футбол') {
      navigation.navigate('FootballScreen');
    }
    // Може да добавиш навигация и за други категории като Тенис, Баскетбол и т.н.
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Добре дошъл в Sportal BG</Text>

      <CategoryList
        categories={['Футбол', 'Тенис', 'Баскетбол']}
        onSelectCategory={handleCategoryPress}
      />
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
});

export default HomeScreen;