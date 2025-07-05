import { View, Text, Pressable, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'expo-router';
import { useAuth } from '@/providers/AuthProvider';

export default function NewPostScreen() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Use auth provider to get the current user
  const {user} = useAuth();
  
  async function handleSubmit() {

    if (!text.trim()) {
      Alert.alert('Please enter some text.');
      return;
    }
    setLoading(true);
    // You may want to get the current user from supabase.auth.getUser() here
    const { error } = await supabase.from('posts').insert({ content: text, userId: user?.id  });
    setLoading(false);
    if (error) {
      Alert.alert('Error', error.message);
    } else {
      setText('');
      router.back(); // Go back to previous screen
    }
  }

  return (
    <SafeAreaView className='p-4'>
      <Text className="text-white text-lg font-bold">username</Text>
      <TextInput 
        placeholder="What's on your mind?"
        className='text-white text-lg'
        multiline
        numberOfLines={8}
        placeholderTextColor="#888"
        onChangeText={setText}
        value={text}
        editable={!loading}
      />
      <View>
        <Pressable 
          onPress={handleSubmit}
          className={`bg-white p-3 px-6 self-end rounded-full ${loading ? 'opacity-50' : ''}`}
          disabled={loading}
        >
          <Text className="text-black font-bold">{loading ? 'Posting...' : 'Post'}</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}