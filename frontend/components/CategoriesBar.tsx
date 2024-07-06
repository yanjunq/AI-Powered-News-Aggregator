// CategoriesBar.js
import React, { useState } from 'react';
import {Text} from './';
import {View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { jwtDecode } from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

type CategoriesBarProps = {
  categories: Array<any>;
  onCategorySelect: (category: string) => void;
};

const CategoriesBar: React.FC<CategoriesBarProps> = ({categories, onCategorySelect}) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const handlePress = async (item: string) => {
        setSelectedCategory(item);
        onCategorySelect(item);
        
        const token = await AsyncStorage.getItem('token');
        return axios.post(
          'http://localhost:8000/categories/update_category_news/',
          { category : item},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );  
    };

    return (
        <View style={styles.container}>
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.categoryContainer,
                  selectedCategory === item && styles.selectedCategoryContainer
                ]}
                onPress={() => handlePress(item)}
              >
                {item.icon && <MaterialIcons name={item.icon} size={24} color={selectedCategory  === item ? 'white' : 'black'} />}
                <Text style={[
                  styles.categoryText,
                  selectedCategory === item && styles.selectedCategoryText
                ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      );  
}

const styles = StyleSheet.create({
    container: {
      paddingVertical: 10,
    },
    listContainer: {
      paddingHorizontal: 10,
    },
    categoryContainer: {
      marginRight: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#f0f0f0',
      borderRadius: 20,
      flexDirection: 'row',
      alignItems: 'center'
    },
    selectedCategoryContainer: {
      backgroundColor: '#007bff',
    },
    categoryText: {
      fontSize: 16,
      color: '#333',
      marginLeft: 5,
    },
    selectedCategoryText: {
      color: 'white',
    },
  });


export default CategoriesBar;


