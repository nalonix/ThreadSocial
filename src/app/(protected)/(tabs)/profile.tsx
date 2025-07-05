import { Text, View } from "react-native"
import { Button } from "react-native";
import { useRouter } from "expo-router";
import { supabase } from "@/lib/supabase";
import { useCallback } from "react";

export default function Profile() {
  // This is the profile tab component.
  const router = useRouter();

  const handleSignOut = useCallback(async () => {
    await supabase.auth.signOut();
    router.replace("/(auth)/login");
  }, [router]);

  return ( 
    <View>
      <Text>Profile</Text>

      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
}