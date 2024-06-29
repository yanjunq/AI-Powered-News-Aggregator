// import { StatusBar } from 'expo-status-bar';
// import { StatusBar } from 'react-native';
// import React from 'react';
// import { Dimensions, Image, StyleSheet } from 'react-native';
// import Box from '@mui/material/Box';
// import theme from 'your-theme-path'; // Ensure you import your theme correctly if you're using it

// export const assets = [require("../assets/patterns/news.png")];
// const { width } = Dimensions.get("window");
// const aspectRatio = 750 / 1125;
// const height = width * aspectRatio;

// interface ContainerProps {
//     children: React.ReactNode;
// }

// const Container = ({ children }: ContainerProps) => {
//     return (
//         <Box flex={1} backgroundColor="white">
//             <StatusBar barStyle="light-content" />
//             <Box borderBottomLeftRadius="xl" overflow="hidden" height={height * 0.61}>
//                 <Image
//                     source={assets[0]}
//                     style={{
//                         width,
//                         height,
//                         borderBottomLeftRadius: theme.borderRadii.xl,
//                     }}
//                 />
//             </Box>
//             <Box flex={1} overflow="hidden">
//                 <Image
//                     source={assets[0]}
//                     style={{
//                         ...StyleSheet.absoluteFillObject,
//                         width,
//                         height,
//                         borderBottomLeftRadius: theme.borderRadii.xl,
//                     }}
//                 />
//                 <Box
//                     borderRadius="xl"
//                     borderTopLeftRadius={0}
//                     backgroundColor="white"
//                     flex={1}>
//                     {children}
//                 </Box>
//             </Box>
//         </Box>
//     );
// }

// export default Container;