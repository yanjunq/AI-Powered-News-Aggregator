import React, { useState, useEffect } from 'react';
import { Text, Box, Button } from './';
import { ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

type NewsBoxProps = {
  category: string;
};

const NewsBox: React.FC<NewsBoxProps> = ({ category }) => {
  const [news, setNews] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1); // For pagination, if your API supports it

  const fetchNews = async (category: string) => {
    const token = await AsyncStorage.getItem('token');
    axios.get(`http://localhost:8000/get_Category_News?category=${category}&page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setNews(response.data.News);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchNews(category);
  }, [category, page]); // Re-fetch news when category or page changes

  const loadMoreNews = () => {
    setPage((prevPage) => prevPage + 1); // Increment the page to load more news
  };

  return (
    <ScrollView>
      <Box>
        {news.map((item, index) => (
          <Box key={index} style={styles.newsItem}>
            <Text>{item.title}</Text>
            <Button label="AI summary" onPress={() => { }} />
          </Box>
        ))}
      </Box>
      <Box>
        <Button label="Load more" onPress={loadMoreNews} />
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  newsItem: {
    marginBottom: 10,
  },
});

export default NewsBox;



