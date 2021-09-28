import { Jost_400Regular, Jost_600SemiBold, useFonts } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import React from 'react';
import Routes from './src/routes';
import 'react-native-gesture-handler';

export type NavigationProps = {
  navigate: (screen:string) => void;
}

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded)
    return <AppLoading />
  
  return (
    <Routes />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
