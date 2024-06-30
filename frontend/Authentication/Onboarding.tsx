import React from 'react';
import { Box, Text, Button, useTheme } from '../components';
import { AuthNavigationProps } from '../components/navigation/Navigation';

export const Onboarding: React.FC<Partial<AuthNavigationProps<"Onboarding">>> = ({ navigation}) => {
    const theme = useTheme();

    return(
        <Box>
        </Box>
    );
}
