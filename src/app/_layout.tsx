
import "../../global.css";
import { Slot } from 'expo-router';

import { ThemeProvider, DarkTheme } from '@react-navigation/native'

const myTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(77, 236, 59)',
  }
}

export default function RootLayout(){
    console.info('RootLayout rendered');

    return (
      <ThemeProvider value={myTheme}>
        <Slot />
      </ThemeProvider>
    )
}