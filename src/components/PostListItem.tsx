import { Post } from "@/types";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Heart, MessageCircle, Repeat, Send } from "lucide-react-native"; // Modern icon set
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function PostListItem({ post }: { post: Post }) {
    // Placeholder counts for likes and reposts
    const likeCount = 0;
    const repostCount = 0;
    const replyCount = post.replies.length;

    return (
        <View className="flex-row items-start px-4 py-3 border-b border-gray-800 bg-black">
            <Image
                source={{ uri: post.user.image }}
                className="w-10 h-10 rounded-full mr-3 mt-1"
            />
            <View className="flex-1">
                <View className="flex-row items-center">
                    <Text className="font-semibold text-base text-gray-100 mr-2">{post.user.username}</Text>
                    <Text className="text-gray-600 text-xs ml-2">
                        • {dayjs(post.createdAt).fromNow()}
                    </Text>
                </View>
                {post.title ? (
                    <Text className="font-semibold text-gray-200 mt-1">{post.title}</Text>
                ) : null}
                <Text className="text-gray-300 mt-1">{post.content}</Text>
                <View className="flex-row mt-3 gap-5 space-x-7">
                    <TouchableOpacity className="flex-row items-center">
                        <Heart size={20} color="gray" />
                        <Text className="text-xs text-gray-500 ml-1">{likeCount}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center">
                        <MessageCircle size={20} color="gray" />
                        <Text className="text-xs text-gray-500 ml-1">{replyCount}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center">
                        <Repeat size={20} color="gray" />
                        <Text className="text-xs text-gray-500 ml-1">{repostCount}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-row items-center">
                        <Send size={20} color="gray" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}