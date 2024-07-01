import React from 'react';
import { Box, Text, Button, useTheme, TextInput} from '../components';
import { AuthNavigationProps } from '../components/navigation/Navigation';
import {Container} from '../components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextInput as RNTextInput} from 'react-native';
import {Footer} from '../components/Footer';

// const schema = Yup.object().shape({
//     email:Yup.string().email('Invalid email').required('Required'),
//     userName: Yup.string().required('Required'),
//     password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
//     passwordConfirmation: Yup.string().equals([Yup.ref('password')], 'Passwords do not match').required('Required')
// });

const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    userName: Yup.string().required('Required'), 
    password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    passwordConfirmation: Yup.string().oneOf([Yup.ref('password')], 'Passwords do not match').required('Required')
});

export const SignUp: React.FC<Partial<AuthNavigationProps<"SignUp">>> = ({ navigation}) => {

    const {
        handleChange,
        handleBlur,
        handleSubmit,
        errors,
        touched
      } = useFormik({
        validationSchema: schema,
        initialValues: { email: '', password: '', confirmPassword: '' },
        onSubmit: () => {
          navigation?.navigate('Home');
        }
      });

      const password = React.useRef<RNTextInput>(null);
      const confirmPassword = React.useRef<RNTextInput>(null);
      const footer = <Footer name = "Already have an account?" action = "Login here" onPress = {()=> navigation?.navigate('Login')} />;

    return(
    
        // <Container pattern={1}  {...{footer}} >
        <Container pattern={1} >
            <Text variant = "title1" textAlign="center" marginBottom="l">Create account</Text>
            <Text variant="body" textAlign="center" marginBottom="l">
                Let us know your email and password.
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
                        returnKeyType="next"
                        returnKeyLabel="next"
                        onSubmitEditing={() => password.current?.focus()}
                    />
                </Box>
                
                <Box marginBottom="m">
                    <TextInput 
                        icon="username" 
                        placeholder="Enter your name"
                        onChangeText={handleChange('userName')}
                        onBlur={handleBlur('userName')} 
                        error={errors.email}
                        touched={touched.email}
                        autoComplete="name"
                        returnKeyType="next"
                        returnKeyLabel="next"
                        onSubmitEditing={() => password.current?.focus()}
                    />
                </Box>

                <Box marginBottom="m">
                    <TextInput 
                        ref={password}
                        icon="lock" 
                        placeholder="Enter your password" 
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        error={errors.password}
                        touched={touched.password}
                        autoComplete="password"
                        autoCapitalize="none"
                        returnKeyType="next"
                        returnKeyLabel="next"
                        onSubmitEditing={() => confirmPassword.current?.focus()}
                        secureTextEntry
                    />
                </Box>
                <TextInput 
                    ref={confirmPassword}
                    icon="lock" 
                    placeholder="Confirm your password" 
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    error={errors.confirmPassword}
                    touched={touched.confirmPassword}
                    autoComplete="password"
                    autoCapitalize="none"
                    returnKeyType="go"
                    returnKeyLabel="go"
                    onSubmitEditing={() => handleSubmit()}
                    secureTextEntry
                />
                <Box alignItems="center" marginTop="m">
                    <Button variant="primary" label="Create your account" onPress={()=>
                    {handleSubmit;
                        navigation?.navigate('Welcome');
                    }} />
                </Box>
            </Box>
     </Container>
    );

}
