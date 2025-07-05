import PostListItem from '@/components/PostListItem';
import { Post } from '@/types';
import { Link, useRouter } from 'expo-router';
import { useEffect, useState, useCallback } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { supabase } from '@/lib/supabase';
import { Plus } from 'lucide-react-native';

export default function HomeScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('posts')
      .select('*, user:profiles(*)')
      .order('created_at', { ascending: false });
    if (error) {
      setPosts([]);
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <View className="flex-1 bg-black">
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
        refreshing={loading}
        onRefresh={fetchPosts}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        className="absolute bottom-8 right-6 bg-blue-600 rounded-full p-4 shadow-lg"
        onPress={() => router.push('/new')}
        activeOpacity={0.8}
        style={{ elevation: 8 }}
      >
        <Plus color="white" size={28} />
      </TouchableOpacity>
    </View>
  );
}
