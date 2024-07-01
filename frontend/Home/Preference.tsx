import React from 'react';
import { Box, Text,Container,TextInput} from '../components';
import { HomeNavigationProps } from '../components/navigation/Navigation';
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();

export const Preference: React.FC<Partial<HomeNavigationProps<"Preference">>> = ({ navigation}) => {

    return(
        <Container pattern={1} >
            <Box>
                {/* need to change this to the user's name */}
                <Text variant = "title1" textAlign="center" marginBottom="l">Hello TempName</Text>
            </Box>
            <Box>
                {/* <TextInput></TextInput> */}
                
                <Text variant = "title1" textAlign="center" marginBottom="l">Create account</Text>
            </Box>   
        </Container>
    );
}


