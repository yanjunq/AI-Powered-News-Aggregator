import React, { useRef } from 'react';
import { TextInput as RNTextInput } from "react-native";
import { Box, Text, Button, useTheme, Container, TextInput } from '../components';
import { AuthNavigationProps } from '../components/navigation/Navigation';
import { CommonActions } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';


const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

const loginUser = async(email:string, password:string) => {
    try {
      const response = await axios.post('http://localhost:8000/api/token/', {
        email,
        password,
      });
      const {access, refresh} = response.data;
      await AsyncStorage.setItem('token', access);
      await AsyncStorage.setItem('refresh', refresh);
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }   
};

export const Login: React.FC<Partial<AuthNavigationProps<"Login">>> = ({ navigation}) => {
    const {
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      } = useFormik({
        validationSchema: LoginSchema,
        initialValues: { email: "", password: "", remember: false },
        onSubmit: async () => {
          try {
            const data = await loginUser(values.email, values.password);
            await AsyncStorage.setItem('token', data.access);
            navigation?.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              })
            );
          } catch (error) {
            console.error(error);
            alert('Login failed');
          }
        },
      });

      const password = useRef<RNTextInput>(null);
      // const footer = (
      //   <Footer
      //     title="Don't have an account?"
      //     action="Sign Up here"
      //     onPress={() => navigation.navigate("SignUp")}
      //   />
      // );
    
      return (
        // <Container pattern={0} {...{ footer }}>
        <Container pattern={0}>
          <Text variant="title1" textAlign="center" marginBottom="l">
            Welcome Back
          </Text>
          <Text variant="body" textAlign="center" marginBottom="l">
            Use your credentials below and login to your account.
          </Text>
          <Box>
            <Box marginBottom="m">
              <TextInput
                icon="mail"
                placeholder="Enter your email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                error={errors.email}
                touched={touched.email}
                autoComplete="email"
                returnKeyType="next"
                returnKeyLabel="next"
                onSubmitEditing={() => password.current?.focus()}
              />
            </Box>
            <TextInput
              ref={password}
              icon="lock"
              placeholder="Enter your password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password}
              touched={touched.password}
              autoComplete="password"
              autoCapitalize="none"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => handleSubmit()}
              secureTextEntry
            />
            <Box
              flexDirection="row"
              justifyContent="space-between"
              marginVertical="s"
              alignItems="center"
            >
              {/* <Checkbox
                label="Remember me"
                checked={values.remember}
                onChange={() => setFieldValue("remember", !values.remember)}
              /> */}
            
            </Box>

            <Box alignItems="center" marginTop="m">
                <Button 
                    variant="primary" 
                    onPress={() => navigation?.navigate("ForgotPassword")} 
                    label ="Forgot Password"/>
    
            </Box>

            <Box alignItems="center" marginTop="m">

                <Button
                variant="primary"
                label="Log into your account"
                onPress={handleSubmit}
                 />
            </Box>
            
          </Box>
        </Container>
      );
}
