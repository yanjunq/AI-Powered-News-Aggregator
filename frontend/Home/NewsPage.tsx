import React, {useState} from 'react';
import { Box, Text, Button, useTheme, Container, NewsBox} from '../components';
import { HomeNavigationProps } from '../components/navigation/Navigation';
import { createStackNavigator } from '@react-navigation/stack';
import {CategoriesBar} from '../components'; // Import CategoriesBarProps
import { TextInput } from 'react-native-gesture-handler';


const HomeStack = createStackNavigator();

// just for testing, still wating for the database

export const NewsPage: React.FC<Partial<HomeNavigationProps<"NewsPage">>> = ({ navigation}) => {
    const theme = useTheme();
    const [categories, setCategories] = useState<string[]>([]);

    return(
        <Container pattern={1} >
            <Box>
                {/* maybe need an icon here  */}
                {/* <Button variant="default" label="Log out" onPress={() => navigation?.navigate("Welcome")}/> */}
                {/* not finish  */}
                <Button variant="default" label= "Refresh" onPress={() => navigation?.navigate("Preference")}/>
            </Box>

            <Box>
                <TextInput placeholder="Search" onChangeText={()=>{}}/>
            </Box>

           <Box>
            {/* <CategoriesBar categories= {categories} onCategoryPress={()}/> */}
           </Box>

           <Box>
            
           </Box>


        
        </Container>
    );
}

