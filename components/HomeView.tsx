import React from 'react';
import { MOCK_STORIES, MOCK_POSTS } from '../constants';
import { Story, Post as PostType } from '../types';
import { MoreHorizontalIcon, HeartIcon, MessageIcon, SendIcon, BookmarkIcon } from './Icons';

const StoryBubble: React.FC<{ story: Story }> = ({ story }) => (
  <div className="flex flex-col items-center space-y-1 flex-shrink-0">
    <div className={`p-0.5 rounded-full bg-gradient-to-tr ${story.viewed ? 'from-gray-500 to-gray-700' : 'from-secondary to-primary'}`}>
      <div className="bg-background p-0.5 rounded-full">
        <img className="w-16 h-16 rounded-full object-cover" src={story.user.avatarUrl} alt={story.user.username} />
      </div>
    </div>
    <span className="text-xs text-on-surface-secondary">{story.user.username}</span>
  </div>
);

const Post: React.FC<{ post: PostType }> = ({ post }) => (
  <div className="bg-surface rounded-xl overflow-hidden mb-4">
    <div className="p-3 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <img className="w-10 h-10 rounded-full object-cover" src={post.user.avatarUrl} alt={post.user.username} />
        <span className="font-semibold text-on-surface">{post.user.username}</span>
      </div>
      <button className="text-on-surface-secondary">
        <MoreHorizontalIcon className="w-5 h-5" />
      </button>
    </div>
    <img className="w-full" src={post.imageUrl} alt={`Post by ${post.user.username}`} />
    <div className="p-3">
       <div className="flex justify-between items-center mb-2">
            <div className="flex space-x-4">
                <button className="text-on-surface-secondary hover:text-white transition-colors"><HeartIcon className="w-6 h-6" /></button>
                <button className="text-on-surface-secondary hover:text-white transition-colors"><MessageIcon className="w-6 h-6" /></button>
                <button className="text-on-surface-secondary hover:text-white transition-colors"><SendIcon className="w-6 h-6" /></button>
            </div>
            <button className="text-on-surface-secondary hover:text-white transition-colors"><BookmarkIcon className="w-6 h-6" /></button>
        </div>
        <p className="font-bold text-on-surface text-sm">{post.likes.toLocaleString()} likes</p>
      <p className="text-on-surface text-sm my-1">
        <span className="font-semibold">{post.user.username}</span> {post.caption}
      </p>
      <p className="text-on-surface-secondary text-sm mt-1">View all {post.comments} comments</p>
       <p className="text-gray-500 text-xs mt-2 uppercase">{post.timestamp}</p>
    </div>
  </div>
);

const HomeView: React.FC = () => (
  <div>
    <header className="p-4 flex justify-between items-center sticky top-0 bg-background/80 backdrop-blur-sm z-10 border-b border-surface">
      <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">ConnectSphere</h1>
    </header>
    <div className="px-4 py-3 border-b border-surface">
      <div className="flex space-x-4 overflow-x-auto pb-3 -mb-3 scrollbar-hide">
        {MOCK_STORIES.map(story => <StoryBubble key={story.id} story={story} />)}
      </div>
    </div>
    <div className="p-4">
      {MOCK_POSTS.map(post => <Post key={post.id} post={post} />)}
    </div>
  </div>
);

// Fix: Add default export for the HomeView component.
export default HomeView;