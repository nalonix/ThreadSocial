export type User = {
    id: string;
    username: string;
    name: string;
    bio: string;
    avatar_url: string;
}

export type Post = {
    id: string;
    content: string;
    created_at: Date;
    
    authorId: string;
    user: User;

    parentId: string | null;
    parent: Post | null;

    replies: Post[];
}