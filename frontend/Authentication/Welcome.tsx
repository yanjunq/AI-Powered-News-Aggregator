import React from 'react';
import { Box, Text, Button, useTheme } from '../components';
import { AuthNavigationProps } from '../components/navigation/Navigation';
import { View, StyleSheet } from 'react-native';

// const Welcome = ({ navigation }: AuthNavigationProps<"Welcome">) => {
  //const Welcome: React.FC<AuthNavigationProps<'Welcome'>> = ({ navigation, route }) =>{
export const Welcome: React.FC<Partial<AuthNavigationProps<"Welcome">>> = ({ navigation }) => {
    // const theme = useTheme();

    return(
        <Box flex={1} backgroundColor = "background">
            <Box flex={1} 
            borderBottomRightRadius="xl" 
            backgroundColor="background2" 
            justifyContent="flex-end" 
            alignItems="center">
                {/* <Image source={require('../../assets/5.png')} style={{...theme.styles.image, width: Dimensions.get('window').width, height: Dimensions.get('window').height / 2}}/> */}
            </Box>
            <Box flex={1} borderTopLeftRadius="xl">
                <Box backgroundColor="background2" position="absolute" top={0} left={0} right={0} bottom={0}/>
                <Box backgroundColor="background" borderTopLeftRadius="xl" justifyContent="space-evenly" alignItems="center" padding="xl" flex={1}>
                    <Text variant="title2">Let's get started</Text>
                    <Text variant="body" textAlign="center">Login to your account below or signup for an amazing experience</Text>
                    {/* <Button variant="primary" label="Have an account? Login" onPress={() => navigation.navigate('Login')}/>
                    <Button label="Join us, it's Free" onPress={() => navigation.navigate('SignUp')}/>
                    <Button label = "Forgot password?"onPress={() => navigation.navigate("ForgotPassword")}/> */}
                </Box>
            </Box>
        </Box>

        // <View>
        //     <Text>Welcome to the App!</Text>
        // </View>
    );
}

// const Welcome: React.FC<AuthNavigationProps<'Welcome'>> = ({ navigation, route }) => {
//     return (
//       <View>
//         <Text>Welcome to the App!</Text>
//       </View>
//     );
//  };

// export default Welcome;


