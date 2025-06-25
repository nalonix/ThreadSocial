import { User, Post } from './types';

export const users: User[] = [
    {
        id: 'u1',
        username: 'alice',
        name: 'Alice Smith',
        bio: 'Coffee lover. Cat person.',
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
        id: 'u2',
        username: 'bob',
        name: 'Bob Johnson',
        bio: 'Full-stack dev & gamer.',
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
        id: 'u3',
        username: 'carol',
        name: 'Carol Lee',
        bio: 'Photographer & traveler.',
        image: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
        id: 'u4',
        username: 'dan',
        name: 'Dan Brown',
        bio: 'Writer. Dreamer.',
        image: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
        id: 'u5',
        username: 'eve',
        name: 'Eve Adams',
        bio: 'Tech enthusiast.',
        image: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
];

// Helper to get user by id
const getUser = (id: string) => users.find(u => u.id === id)!;

export const posts: Post[] = [
    {
        id: 'p1',
        title: 'Hello World',
        content: 'This is my first post!',
        createdAt: new Date('2024-06-01T10:00:00Z'),
        authorId: 'u1',
        user: getUser('u1'),
        parentId: null,
        parent: null,
        replies: [],
    },
    {
        id: 'p2',
        title: 'React Native Tips',
        content: 'Here are some tips for React Native development.',
        createdAt: new Date('2024-06-01T11:00:00Z'),
        authorId: 'u2',
        user: getUser('u2'),
        parentId: null,
        parent: null,
        replies: [],
    },
    {
        id: 'p3',
        title: 'Travel Diaries',
        content: 'Just got back from Japan!',
        createdAt: new Date('2024-06-01T12:00:00Z'),
        authorId: 'u3',
        user: getUser('u3'),
        parentId: null,
        parent: null,
        replies: [],
    },
    {
        id: 'p4',
        title: 'Book Recommendations',
        content: 'Check out these amazing books.',
        createdAt: new Date('2024-06-01T13:00:00Z'),
        authorId: 'u4',
        user: getUser('u4'),
        parentId: null,
        parent: null,
        replies: [],
    },
    {
        id: 'p5',
        title: 'Tech News',
        content: 'Latest updates in tech.',
        createdAt: new Date('2024-06-01T14:00:00Z'),
        authorId: 'u5',
        user: getUser('u5'),
        parentId: null,
        parent: null,
        replies: [],
    },
    // Replies to p1
    {
        id: 'p6',
        title: '',
        content: 'Welcome to the platform!',
        createdAt: new Date('2024-06-01T15:00:00Z'),
        authorId: 'u2',
        user: getUser('u2'),
        parentId: 'p1',
        parent: null, // Will be set later
        replies: [],
    },
    {
        id: 'p7',
        title: '',
        content: 'Nice to see you here!',
        createdAt: new Date('2024-06-01T15:05:00Z'),
        authorId: 'u3',
        user: getUser('u3'),
        parentId: 'p1',
        parent: null,
        replies: [],
    },
    // Replies to p2
    {
        id: 'p8',
        title: '',
        content: 'Thanks for the tips!',
        createdAt: new Date('2024-06-01T16:00:00Z'),
        authorId: 'u1',
        user: getUser('u1'),
        parentId: 'p2',
        parent: null,
        replies: [],
    },
    {
        id: 'p9',
        title: '',
        content: 'Very helpful.',
        createdAt: new Date('2024-06-01T16:10:00Z'),
        authorId: 'u5',
        user: getUser('u5'),
        parentId: 'p2',
        parent: null,
        replies: [],
    },
    // Replies to p3
    {
        id: 'p10',
        title: '',
        content: 'Japan is on my bucket list!',
        createdAt: new Date('2024-06-01T17:00:00Z'),
        authorId: 'u4',
        user: getUser('u4'),
        parentId: 'p3',
        parent: null,
        replies: [],
    },
    // Replies to p6 (nested reply)
    {
        id: 'p11',
        title: '',
        content: 'Thank you!',
        createdAt: new Date('2024-06-01T17:10:00Z'),
        authorId: 'u1',
        user: getUser('u1'),
        parentId: 'p6',
        parent: null,
        replies: [],
    },
    // More top-level posts
    {
        id: 'p12',
        title: 'Photography Tips',
        content: 'How to take better photos.',
        createdAt: new Date('2024-06-01T18:00:00Z'),
        authorId: 'u3',
        user: getUser('u3'),
        parentId: null,
        parent: null,
        replies: [],
    },
    {
        id: 'p13',
        title: 'Favorite Movies',
        content: 'What are your favorite movies?',
        createdAt: new Date('2024-06-01T19:00:00Z'),
        authorId: 'u4',
        user: getUser('u4'),
        parentId: null,
        parent: null,
        replies: [],
    },
    {
        id: 'p14',
        title: 'Healthy Recipes',
        content: 'Share your best healthy recipes!',
        createdAt: new Date('2024-06-01T20:00:00Z'),
        authorId: 'u5',
        user: getUser('u5'),
        parentId: null,
        parent: null,
        replies: [],
    },
    {
        id: 'p15',
        title: 'Weekend Plans',
        content: 'What are you doing this weekend?',
        createdAt: new Date('2024-06-01T21:00:00Z'),
        authorId: 'u2',
        user: getUser('u2'),
        parentId: null,
        parent: null,
        replies: [],
    },
];

// Set parent and replies relationships
const postMap: { [id: string]: Post } = {};
posts.forEach(post => postMap[post.id] = post);

posts.forEach(post => {
        if (post.parentId) {
            post.parent = postMap[post.parentId];
            postMap[post.parentId].replies.push(post);
        }
    }
)