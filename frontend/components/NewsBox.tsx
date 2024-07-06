import React, { useState } from 'react';
import {Text, Box, Button} from './';
import {View, FlatList, TouchableOpacity, StyleSheet , ScrollView} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 


type NewsBoxProps = {
    categories: string[];
    
  };

const NewsBoxProps: React.FC<NewsBoxProps> = ({categories}) => {
    
    const initializeCategories = (categorie:string[]) => {
        return categories.reduce((obj: { [x: string]: boolean; }, category: string) => {
            obj[category] = false;
            return obj;
        }, {});
    };

    const [readCategories, setReadCategories] = useState(initializeCategories(categories));
    const [newsItem, setNewsItem] = useState({});
    
    const handleLoardMore = ()=>{
    }

    return(

        <ScrollView>
            <Box>
            </Box>
            <Box>
                <Button label = "Load more" onPress = {()=>{}}/>
            </Box>
        </ScrollView>
        
    

    );

};

export default NewsBoxProps;


