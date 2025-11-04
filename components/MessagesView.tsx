import React from 'react';
import { MOCK_MESSAGES } from '../constants';
import { MessageThread } from '../types';

const MessageItem: React.FC<{ thread: MessageThread }> = ({ thread }) => (
    <div className="flex items-center p-3 space-x-4 hover:bg-surface transition-colors rounded-lg cursor-pointer">
        <div className="relative flex-shrink-0">
            <img className="w-14 h-14 rounded-full object-cover" src={thread.user.avatarUrl} alt={thread.user.username} />
            {thread.unread && (
                <span className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-gradient-to-tr from-primary to-secondary border-2 border-surface"></span>
            )}
        </div>
        <div className="flex-1 min-w-0">
            <div className="flex justify-between items-center">
                <p className="font-semibold text-on-surface truncate">{thread.user.username}</p>
                <p className="text-xs text-on-surface-secondary">{thread.timestamp}</p>
            </div>
            <p className={`truncate text-sm ${thread.unread ? 'text-on-surface font-medium' : 'text-on-surface-secondary'}`}>
                {thread.lastMessage}
            </p>
        </div>
    </div>
);


const MessagesView: React.FC = () => (
    <div>
        <header className="p-4 sticky top-0 bg-background/80 backdrop-blur-sm z-10 border-b border-surface">
            <h1 className="text-2xl font-bold text-on-surface">Messages</h1>
        </header>
        <div className="px-1 py-2">
            {MOCK_MESSAGES.map(thread => <MessageItem key={thread.id} thread={thread} />)}
        </div>
    </div>
);

export default MessagesView;
