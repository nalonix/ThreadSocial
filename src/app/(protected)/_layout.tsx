import { useAuth } from '@/providers/AuthProvider';
import { Redirect, Stack } from 'expo-router';

export default function ProtectedLayout() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        // Redirect to login if not authenticated
        return <Redirect href="/(auth)/login" />;
    }
    return (
        <Stack >
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
