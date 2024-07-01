import React from 'react';
import { Box, Text, Button, useTheme } from '../components';
import { AuthNavigationProps } from '../components/navigation/Navigation';

export const Welcome: React.FC<Partial<AuthNavigationProps<"Welcome">>> = ({ navigation}) => {
    const theme = useTheme();

    return(
        <Box flex={1} backgroundColor = "background">
            <Box flex={1} 
            borderBottomRightRadius="xl" 
            backgroundColor="background2" 
            justifyContent="flex-end" 
            alignItems="center">
            </Box>
            <Box flex={1} borderTopLeftRadius="xl">
                <Box backgroundColor="background2" position="absolute" top={0} left={0} right={0} bottom={0}/>
                <Box backgroundColor="background" borderTopLeftRadius="xl" justifyContent="space-evenly" alignItems="center" padding="xl" flex={1}>
                    <Text variant="title2">Let's get started</Text>
                    <Text variant="body" textAlign="center">Login to your account below or signup for an amazing experience</Text>
                    <Button variant="primary" label="Login" onPress={() => navigation?.navigate('Login')}/>
                    <Button label="Sign in" onPress={() => navigation?.navigate('SignUp')}/>
                    <Button label = "Forgot password?"onPress={() => navigation?.navigate("ForgotPassword")}/>
                </Box>
            </Box>
        </Box>
    );
}
