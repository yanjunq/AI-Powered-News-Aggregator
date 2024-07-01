import React from 'react';
import { Box, Text, Button, useTheme, Container} from '../components';
import { HomeNavigationProps } from '../components/navigation/Navigation';
import { createStackNavigator } from '@react-navigation/stack';
import {CategoriesBar} from '../components';


const HomeStack = createStackNavigator();

// just for testing, still wating for the database
const categories = [
    { id: '1', title: 'Category 1', icon: 'home' },
    { id: '2', title: 'Category 2', icon: 'business' },
    { id: '3', title: 'Category 3', icon: 'school' },
    { id: '4', title: 'Category 4', icon: 'fitness-center' },
    { id: '5', title: 'Category 5', icon: 'restaurant' },
  ];


export const NewsPage: React.FC<Partial<HomeNavigationProps<"NewsPage">>> = ({ navigation}) => {
    const theme = useTheme();

    return(
        <Container pattern={1} >
            <Box>
                <Text variant = "title1" textAlign="center" marginBottom="l">Create account</Text>
            </Box>
           <Box>
            

           </Box>
        
        </Container>
    );
}

