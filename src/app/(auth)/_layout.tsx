import { Stack } from 'expo-router';

export default function ProtectedLayout() {
    return (
        <Stack 
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
            }}
        >
            <Stack.Screen
                name="(tabs)"
                options={{ headerShown: false, animation: 'fade_from_bottom' }}
            />
            <Stack.Screen
                name="new"
                options={{ title: "New Thread",presentation: "modal", animation: 'slide_from_bottom' }}
            />
        </Stack>
    );
}