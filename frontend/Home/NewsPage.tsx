import React, { useEffect, useState } from 'react';
import { Box, Text, Button, Container, NewsBox } from '../components';
import { HomeNavigationProps } from '../components/navigation/Navigation';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesBar from '../components/CategoriesBar'; // Import CategoriesBarProps
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';

const HomeStack = createStackNavigator();

// Just for testing, still waiting for the database

export const NewsPage: React.FC<Partial<HomeNavigationProps<"NewsPage">>> = ({ navigation }) => {
    const [categories, setCategories] = useState<any[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    const fetchCategories = async () => {
        axios.get('http://localhost:8000/categories/')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        // You can perform additional actions here based on the selected category
    };

    useEffect(() => {
        fetchCategories();
    }, []); // Fix the useEffect dependency array

    return (
        <Container pattern={1}>
            <Box>
                {/* Maybe need an icon here */}
                {/* <Button variant="default" label="Log out" onPress={() => navigation?.navigate("Welcome")}/> */}
                {/* Not finished */}
                <Button variant="default" label="Refresh" onPress={() => navigation?.navigate("Preference")} />
            </Box>

            <Box>
                <TextInput placeholder="Search" onChangeText={() => { }} />
            </Box>

            <Box>
                <CategoriesBar categories={categories} onCategorySelect={handleCategorySelect} /> 
            </Box>

            <Box>
                {/* Display selected category or related news */}
                {selectedCategory && <Text>Selected Category: {selectedCategory}</Text>}
                {/* Add more components here to display news or other content */}
            </Box>
        </Container>
    );
};

export default NewsPage;
