import Button from '@/components/Button';
import PostListItem from '@/components/PostListItem';
import { posts } from '@/dummyData';
import {  Text, View, FlatList } from 'react-native';


export default function HomeScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item })=> <PostListItem post={item} />}
    />
  );
}
