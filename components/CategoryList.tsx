// /app/components/CategoryList.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type CategoryListProps = {
  categories: string[];
  onSelectCategory: (category: string) => void;
};

const CategoryList = ({ categories, onSelectCategory }: CategoryListProps) => {
  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={styles.categoryButton}
          onPress={() => onSelectCategory(category)}
        >
          <Text style={styles.categoryText}>{category}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  categoryButton: {
    padding: 10,
    backgroundColor: '#1e90ff',
    borderRadius: 8,
    marginRight: 10,
    marginBottom: 10,
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CategoryList;
