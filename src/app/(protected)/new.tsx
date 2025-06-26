import { View, Text, Pressable, TextInput } from 'react-native';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NewPostScreen() {
  const [text, setText] = useState(''); 
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
        />

      <View>
        <Pressable 
          onPress={() => console.log('Post submitted 👉', text)}
          className='bg-white p-3 px-6 self-end rounded-full'  
        >
          <Text className="text-black font-bold">Post</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}