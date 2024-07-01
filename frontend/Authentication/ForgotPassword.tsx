import React, { useRef } from 'react';
import { TextInput as RNTextInput } from "react-native";
import { Box, Text, Button, useTheme, Container, TextInput } from '../components';
import { AuthNavigationProps } from '../components/navigation/Navigation';
import { useFormik } from "formik";
import * as Yup from "yup";

const ForgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required')
});

export const ForgotPassword: React.FC<Partial<AuthNavigationProps<"ForgotPassword">>> = ({ navigation}) => {
    const { 
        handleChange, handleBlur, handleSubmit,
        errors, touched 
    } = useFormik({
        validationSchema: ForgotPasswordSchema,
        initialValues: { email: '' },
        onSubmit: () => navigation?.navigate("PasswordChanged") 
    });

    // const footer = 
    //     <Footer 
    //         title="Not working?" 
    //         action="Try another way" 
    //         onPress={() => Linking.openURL("mailto:help@support.com")} 
    //     />
    
    return(

        <Container pattern={2} >
        <Text variant="title1" textAlign="center" marginBottom="l">Forgot Password?</Text>
        <Text variant="body" textAlign="center" marginBottom="l">
            Enter the email address associated with your account.
        </Text>
        <Box>
            <Box marginBottom="m">
                <TextInput 
                    icon="mail" 
                    placeholder="Enter your email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')} 
                    error={errors.email}
                    touched={touched.email}
                    autoComplete="email"
                    returnKeyType="go"
                    returnKeyLabel="go"
                    onSubmitEditing={() => handleSubmit()}
                />
            </Box>
            <Box alignItems="center" marginTop="m">
                <Button variant="primary" label="Reset Password" onPress={handleSubmit} />
            </Box>
        </Box>
    </Container>
    );
}
