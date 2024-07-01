import React from 'react';
import { Box, Text, Button, useTheme } from '../components';
import { HomeNavigationProps } from '../components/navigation/Navigation';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export const NewsPage: React.FC<Partial<HomeNavigationProps<"NewsPage">>> = ({ navigation}) => {
    const theme = useTheme();

    return(
        <Box flex={1} backgroundColor = "background">

        </Box>
    );
}

