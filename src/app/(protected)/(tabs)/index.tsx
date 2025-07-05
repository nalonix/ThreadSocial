import PostListItem from '@/components/PostListItem';
import { posts } from '@/dummyData';
import { Link } from 'expo-router';
import {  Text, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
      <FlatList
        data={posts}
        renderItem={({ item })=> <PostListItem post={item} />}
        ListHeaderComponent={() => (
          <>
          <Link href="/new" asChild>
            <Text className="text-blue-500 text-3xl text-center my-4">New Post</Text>
          </Link>
          <Link href="/signup" asChild>
            <Text className="text-blue-500 text-3xl text-center my-4">Auth</Text>
          </Link>
          </>
        )}
      />
  );
}
