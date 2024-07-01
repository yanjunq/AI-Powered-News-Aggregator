// CategoriesBar.js
import React, { useState } from 'react';
import {Text} from './';
import {View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

type CategoriesBarProps = {
  categories: Array<any>;
  onCategoryPress: (item: any) => void; // Replace 'any' with the actual type of 'item' later 
};

const CategoriesBar: React.FC<CategoriesBarProps> = ({categories, onCategoryPress}) => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
    
    const handlePress = (item: any) => {
        setSelectedCategoryIndex(item.id);
        onCategoryPress(item);
    }

    return (
        <View style={styles.container}>
          <FlatList
            data={categories}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.categoryContainer,
                  selectedCategoryIndex === item.id && styles.selectedCategoryContainer
                ]}
                onPress={() => handlePress(item)}
              >
                {item.icon && <MaterialIcons name={item.icon} size={24} color={selectedCategoryIndex === item.id ? 'white' : 'black'} />}
                <Text style={[
                  styles.categoryText,
                  selectedCategoryIndex === item.id && styles.selectedCategoryText
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


