import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PreferenceButton from './PreferenceButton';

interface PreferenceBoxProps {
    categories: string[];
    onSelectionChange: (selectedCategories: string[]) => void;
}

const PreferenceBox: React.FC<PreferenceBoxProps> = ({ categories, onSelectionChange}) => {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [toggleStates, setToggleStates] = useState<{ [key: string]: boolean }>({});

    
    // may need to change it to index since we can get the id 
    const toggleCategory = (category: string)=>{
        selectedCategories.includes(category) 
        ? setSelectedCategories(selectedCategories.filter((cat)=> cat !== category)) 
        : setSelectedCategories([...selectedCategories, category]);

        setToggleStates((prevToggleStates) => ({
            ...prevToggleStates,
            [category]: !prevToggleStates[category],
        }));
    };
    
    useEffect(() => {
        onSelectionChange(selectedCategories);
      }, [selectedCategories, onSelectionChange]);

    return(
        <View style={styles.container}>
           {categories.map((category)=>(
                <PreferenceButton
                      key={category}
                      label={category}
                      select ={toggleStates[category] || false}
                      onPress={()=>toggleCategory(category)}
                 />
           ))}
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    categoryButton: {
      padding: 10,
      margin: 5,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: '#000',
    },
    selectedButton: {
      backgroundColor: 'blue',
    },
    categoryText: {
      color: '#000',
    },
    selectedText: {
      color: 'white',
    },
  });

export default PreferenceBox;