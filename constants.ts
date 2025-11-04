import { User, Story, Post, Community, MessageThread } from './types';

export const MOCK_USERS: User[] = [
  { 
    id: 'u1', 
    username: 'alex_codes', 
    avatarUrl: 'https://picsum.photos/id/1005/100/100',
    bio: 'Software Engineer 🚀 | Building the future, one line of code at a time. | Coffee enthusiast ☕',
    postsCount: 12,
    followers: 1250,
    following: 300,
  },
  { id: 'u2', username: 'sara_designs', avatarUrl: 'https://picsum.photos/id/1011/100/100' },
  { id: 'u3', username: 'leo_adventures', avatarUrl: 'https://picsum.photos/id/1025/100/100' },
  { id: 'u4', username: 'mia_music', avatarUrl: 'https://picsum.photos/id/103/100/100' },
  { id: 'u5', username: 'dave_eats', avatarUrl: 'https://picsum.photos/id/104/100/100' },
  { id: 'u6', username: 'chloe_travels', avatarUrl: 'https://picsum.photos/id/1057/100/100' },
];

export const MOCK_STORIES: Story[] = MOCK_USERS.map((user, index) => ({
  id: `s${index + 1}`,
  user: user,
  imageUrl: `https://picsum.photos/id/2${index + 1}0/400/800`,
  viewed: index > 2,
}));

export const MOCK_POSTS: Post[] = [
  {
    id: 'p1',
    user: MOCK_USERS[2],
    imageUrl: 'https://picsum.photos/id/237/600/800',
    caption: 'Exploring the great outdoors with my best friend. 🌲🐾 #dogsofinstagram #adventure',
    likes: 1245,
    comments: 87,
    timestamp: '2h ago',
  },
  {
    id: 'p2',
    user: MOCK_USERS[1],
    imageUrl: 'https://picsum.photos/id/1/600/700',
    caption: 'Morning light and a fresh cup of coffee. The perfect start to a productive day. ✨ #uidesign #creativity',
    likes: 832,
    comments: 45,
    timestamp: '5h ago',
  },
    {
    id: 'p3',
    user: MOCK_USERS[4],
    imageUrl: 'https://picsum.photos/id/1060/600/600',
    caption: 'Just whipped up this deliciousness! Who wants a slice? 🍰 #foodie #baking',
    likes: 2109,
    comments: 213,
    timestamp: '1d ago',
  },
  {
    id: 'p4',
    user: MOCK_USERS[0],
    imageUrl: 'https://picsum.photos/id/5/600/600',
    caption: 'Debugging session in full swing. The matrix is real! #coding #developerlife',
    likes: 950,
    comments: 62,
    timestamp: '2d ago',
  },
  {
    id: 'p5',
    user: MOCK_USERS[0],
    imageUrl: 'https://picsum.photos/id/12/600/600',
    caption: 'New setup is finally complete. Time to be productive!',
    likes: 1800,
    comments: 150,
    timestamp: '4d ago',
  },
];

export const MOCK_COMMUNITIES: Community[] = [
  {
    id: 'c1',
    name: 'Indie Game Developers',
    description: 'A place to share projects, get feedback, and collaborate.',
    memberCount: 14800,
    bannerUrl: 'https://picsum.photos/id/10/800/400',
  },
  {
    id: 'c2',
    name: 'Urban Gardeners',
    description: 'Growing your own food in the city. Tips, tricks, and harvests!',
    memberCount: 8900,
    bannerUrl: 'https://picsum.photos/id/30/800/400',
  },
  {
    id: 'c3',
    name: 'Minimalist Photography',
    description: 'Less is more. A community for lovers of clean, simple photography.',
    memberCount: 22300,
    bannerUrl: 'https://picsum.photos/id/40/800/400',
  },
  {
    id: 'c4',
    name: 'Synthwave & Retro Futurism',
    description: 'For fans of neon grids, chrome sunsets, and 80s synth music.',
    memberCount: 31000,
    bannerUrl: 'https://picsum.photos/id/50/800/400',
  },
];

export const MOCK_MESSAGES: MessageThread[] = [
    {
        id: 'm1',
        user: MOCK_USERS[1],
        lastMessage: "Hey! Just saw your new design, it's amazing!",
        timestamp: '10m',
        unread: true,
    },
    {
        id: 'm2',
        user: MOCK_USERS[3],
        lastMessage: "Sounds good, let's catch up later this week.",
        timestamp: '1h',
        unread: false,
    },
    {
        id: 'm3',
        user: MOCK_USERS[4],
        lastMessage: "Did you get a chance to listen to that new track?",
        timestamp: '3h',
        unread: false,
    },
    {
        id: 'm4',
        user: MOCK_USERS[0],
        lastMessage: "Yeah, the API documentation is in the main repo.",
        timestamp: '1d',
        unread: false,
    },
    {
        id: 'm5',
        user: MOCK_USERS[5],
        lastMessage: "OMG that place in Bali looks incredible!",
        timestamp: '2d',
        unread: true,
    },
];