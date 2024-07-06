import React, { useState, useEffect} from 'react';
import { Box, Text,Container,TextInput, Button, PreferenceBox} from '../components';
import { HomeNavigationProps } from '../components/navigation/Navigation';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const HomeStack = createStackNavigator();

// just for testing, still wating for the database
// const categories: string[] = [
//     'Category 1',
//     'Category 2',
//     'Category 3',
//     'Category 4',1
//     'Category 5',
// ];

export const Preference: React.FC<Partial<HomeNavigationProps<"Preference">>> = ({ navigation}) => {
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
    const [searchQuery, setSearchQuery] = React.useState<string>('');
    const [filteredCategories, setFilteredCategories] = React.useState<string[]>(categories);
    const [checkFiveCategories, setCheckFiveCategories] = React.useState<boolean>(false);
    const [userName, setUserName] = React.useState<string>('');

    const handleSelectionChange = (selected: string[]) => {
        setSelectedCategories(selected);
      };

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        query !== '' ? 
        setFilteredCategories(
            categories.filter(category =>
              category.toLowerCase().startsWith(query.toLowerCase())
            ))
        : setFilteredCategories(categories);  
    }

    const handleNextStep = () =>{
        selectedCategories.length >=5 ? navigation?.navigate("NewsPage") : setCheckFiveCategories(true);
        //await storeSelectedCategories();
    }

    const fetchCategories = async () => {
        axios.get('http://localhost:8000/categories/')
        .then((response)=>{
            setCategories(response.data);
            setFilteredCategories(response.data);
        })
        .catch((error)=>{
            console.log(error);
        }) 
    }

    const updateUserPreferences = async (preferCategories: string[]) => {
        const token = await AsyncStorage.getItem('token');
        return axios.post(
          'http://localhost:8000/users/update-prefer-categories/',
          { prefer_categories: preferCategories },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      };

    const getUserName = async () => {
        try {
          const token = await AsyncStorage.getItem('token');
          if (!token) {
            throw new Error('Token not found');
          }
      
        const response = await axios.get('http://localhost:8000/users/me/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
      
          return response.data.username;
        } catch (error) {
          console.error('Error fetching user name:', error);
          return 'TempName'; 
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
          const username = await getUserName();
          setUserName(username);
        };
    
        fetchUserData();
        fetchCategories();
        updateUserPreferences(selectedCategories);
    }, []);

    return(
        <Container pattern={1} >
            <Box>
                {/* need to change this to the user's name */}
                <Text variant = "title1" textAlign="center" marginBottom="l">Hello {userName}</Text>
                <Text variant = "title1" textAlign="center" marginBottom="l">Select your interested categories!!</Text>
                
            </Box>
            <Box marginBottom="m">
                <TextInput
                icon="none"
                placeholder="Search"
                value={searchQuery}
                onChangeText={handleSearch}
                />
            </Box>
            <Box>
                <PreferenceBox categories = {filteredCategories} onSelectionChange={handleSelectionChange} />
            </Box>
            {checkFiveCategories ? 
             <Box marginBottom="m">
                <Text variant="body" >Please select at least 5 categories</Text>
             </Box> 
            : null
            }
            <Box  marginTop="l">
                <Button variant='primary' label = "Next!!" onPress={handleNextStep}></Button>
            </Box> 
        </Container>
    );
}


