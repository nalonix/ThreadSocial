import { Slot, Stack, Tabs } from 'expo-router';

export default function RootLayout(){
    console.log('RootLayout rendered');
  // This is the root layout component for the app.
    return <Slot />;
}