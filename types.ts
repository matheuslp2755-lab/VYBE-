export type ActiveView = 'home' | 'discover' | 'shorts' | 'messages' | 'profile';

export interface User {
  id: string;
  username: string;
  avatarUrl: string;
  bio?: string;
  postsCount?: number;
  followers?: number;
  following?: number;
}

export interface Story {
  id: string;
  user: User;
  imageUrl: string;
  viewed: boolean;
}

export interface Post {
  id: string;
  user: User;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
}

export interface Community {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  bannerUrl: string;
}

export interface MessageThread {
    id: string;
    user: User;
    lastMessage: string;
    timestamp: string;
    unread: boolean;
}