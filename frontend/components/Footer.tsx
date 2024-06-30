import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Box, Text } from './';

interface FooterProps{
    name : string;
    action: string;
    onPress: ()=>void;
}

export const Footer = ({name, action, onPress}: FooterProps) => {
    return(
        <>
            <Box alignItems="center" marginTop="m">
                    <BorderlessButton {...{ onPress }}>
                        <Text variant="button" color="background">
                            <Text>{`${name} `}</Text>
                            <Text color="primary">{action}</Text>
                        </Text>
                    </BorderlessButton>
            </Box>
        </>
    )
}


