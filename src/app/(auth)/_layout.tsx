import { useAuth } from '@/providers/AuthProvider';
import { Redirect, Stack } from 'expo-router';

export default function AuthLayout() {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        // Redirect to the main app if already authenticated
        return <Redirect href="/(protected)/" />;
    }

    return (
        <Stack 
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right',
            }}
        >
            <Stack.Screen name="signup" />
            <Stack.Screen name="login"  />
        </Stack>
    );
}