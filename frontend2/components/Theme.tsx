import React, { ReactNode } from "react";
import { Dimensions, ViewStyle, TextStyle, ImageStyle } from "react-native";
import {
  createTheme,
  createText,
  createBox,
  useTheme as useReTheme,
  ThemeProvider as ReStyleThemeProvider,
} from "@shopify/restyle";

const { width } = Dimensions.get("window");
export const aspectRatio = width / 374;


const palette = {
    white: '#FFFFFF',
    grey: '#F0F0F0',
    cyan: '#00FFFF',
    lightCyan: '#E0FFFF',
    darkBlue: '#00008B',
    darkGrey: '#A9A9A9',
    lightBlue: '#ADD8E6',
    darkPink: '#FF1493',
    orange: '#FFA500',
    yellow: '#FFFF00',
    pink: '#FFC0CB',
    violet: '#EE82EE',
  };

const colors = {
    background: palette.white,
    background2: palette.grey,
    primary: palette.cyan,
    primaryLight: palette.lightCyan,
    secondary: palette.darkBlue,
    info: palette.darkGrey,
    edit: palette.lightBlue,
    danger: palette.darkPink,
    body: "rgba(12, 13, 52, 0.7)",
    graph1: palette.orange,
    graph2: palette.yellow,
    drawer1: palette.orange,
    drawer2: palette.yellow,
    drawer3: palette.pink,
    drawer4: palette.violet,
};


const spacing = {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  };
  
  const borderRadii = {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  };
  
  const textVariants = {
    hero: {
      fontFamily: "SFProDisplay-Bold",
      fontSize: 80,
      lineHeight: 80,
      color: "background",
      textAlign: "center",
    },
    title1: {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: 28,
      color: "secondary",
    },
    title2: {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: 24,
      lineHeight: 30,
      color: "secondary",
    },
    title3: {
      fontFamily: "SFProDisplay-Semibold",
      fontSize: 16,
      color: "secondary",
    },
    body: {
      fontFamily: "SFProDisplay-Regular",
      fontSize: 16,
      lineHeight: 24,
      color: "body",
    },
    button: {
      fontFamily: "SFProDisplay-Medium",
      fontSize: 15,
      color: "secondary",
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
  };
  
  const breakpoints = {
    phone: 0,
    tablet: 768,
  };

const theme = createTheme({
    colors,
    spacing,
    borderRadii,
    textVariants,
    breakpoints,
 });

 export const ThemeProvider = ({ children }: { children: ReactNode }) => (
    <ReStyleThemeProvider {...{ theme }}>{children}</ReStyleThemeProvider>
  );
  export type Theme = typeof theme;
  export const Box = createBox<Theme>();
  export const Text = createText<Theme>();
  export const useTheme = () => useReTheme<Theme>();
  
  type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

  export const makeStyles = <T extends NamedStyles<T>>(
    styles: (theme: Theme) => T
  ) => () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
};