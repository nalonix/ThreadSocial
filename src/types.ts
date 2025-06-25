export type User = {
    id: string;
    username: string;
    name: string;
    bio: string;
    image: string;
}

export type Post = {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    
    authorId: string;
    user: User;

    parentId: string | null;
    parent: Post | null;

    replies: Post[];
}