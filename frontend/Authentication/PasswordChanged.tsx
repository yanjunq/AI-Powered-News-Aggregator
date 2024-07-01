import React from 'react';
import { TextInput as RNTextInput } from "react-native";
import { Box, Text, Button, useTheme, Container, TextInput } from '../components';
import { AuthNavigationProps } from '../components/navigation/Navigation';

export const PasswordChanged: React.FC<Partial<AuthNavigationProps<"PasswordChanged">>> = ({ navigation}) => {
    const SIZE = 80;

    return(
        <Container pattern={0} footer={
            <Box flexDirection="row" justifyContent="center">
                <Button 
                    label ="x"
                    variant ="primary" 
                    onPress={() => navigation?.pop()} 
                />
            </Box>
        }>
            <Text variant="title1" textAlign="center" marginVertical="l">Your password was successfully changed</Text>
            <Text variant="body" textAlign="center" marginBottom="l">Close this window and login again.</Text>
            <Box alignItems="center" marginTop="m">
                <Button variant="primary" label="Login again" onPress={() => navigation?.navigate('Login')} />
            </Box>
        </Container>
    );
}
