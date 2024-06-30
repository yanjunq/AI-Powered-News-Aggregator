import React from 'react';
import { Box, Text, Button, useTheme } from '../components';
import { AuthNavigationProps } from '../components/navigation/Navigation';

export const ForgotPassword: React.FC<Partial<AuthNavigationProps<"ForgotPassword">>> = ({ navigation}) => {
    const theme = useTheme();

    return(
        <Box flex={1} backgroundColor = "background">
        </Box>
    );
}
