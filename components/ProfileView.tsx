import React, { useState } from 'react';
import { MOCK_USERS, MOCK_POSTS } from '../constants';
import { GridIcon } from './Icons';

const ProfileView: React.FC = () => {
    const user = MOCK_USERS[0]; // Assuming the first user is the logged-in user
    const userPosts = MOCK_POSTS.filter(post => post.user.id === user.id);

    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState(user.username);
    const [bio, setBio] = useState(user.bio || '');
    const [avatar, setAvatar] = useState(user.avatarUrl);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setAvatarPreview(URL.createObjectURL(file));
        }
    };
    
    const handleSave = () => {
        // Here you would typically call an API to save the changes
        console.log("Saving profile:", { username, bio, avatar: avatarPreview || avatar });
        if(avatarPreview) {
            setAvatar(avatarPreview);
        }
        setIsEditing(false);
    };

    const handleCancel = () => {
        setUsername(user.username);
        setBio(user.bio || '');
        setAvatarPreview(null);
        setIsEditing(false);
    }

    const StatItem: React.FC<{ value: number; label: string }> = ({ value, label }) => (
        <div className="text-center">
            <p className="font-bold text-lg">{value}</p>
            <p className="text-sm text-on-surface-secondary">{label}</p>
        </div>
    );

    return (
        <div>
            <header className="p-4 flex items-center justify-between sticky top-0 bg-background/80 backdrop-blur-sm z-10 border-b border-surface">
                <h1 className="text-xl font-bold text-on-surface">{username}</h1>
            </header>
            
            <div className="p-4">
                <div className="flex items-center space-x-4">
                    <div className="relative">
                         <img className="w-24 h-24 rounded-full object-cover" src={avatarPreview || avatar} alt={username} />
                         {isEditing && (
                             <label htmlFor="avatar-upload" className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-full cursor-pointer text-white text-xs font-semibold">
                                Mudar foto
                                <input id="avatar-upload" type="file" className="hidden" accept="image/*" onChange={handleAvatarChange} />
                             </label>
                         )}
                    </div>
                    <div className="flex-1 flex justify-around">
                        <StatItem value={userPosts.length} label="Posts" />
                        <StatItem value={user.followers || 0} label="Seguidores" />
                        <StatItem value={user.following || 0} label="Seguindo" />
                    </div>
                </div>

                <div className="mt-4">
                    {isEditing ? (
                        <div className="space-y-4">
                             <input 
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="w-full bg-surface border-2 border-gray-700 rounded-lg py-2 px-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Nome de usuário"
                            />
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                className="w-full bg-surface border-2 border-gray-700 rounded-lg py-2 px-3 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Sua biografia..."
                                rows={3}
                            />
                        </div>
                    ) : (
                        <>
                            <p className="font-semibold text-on-surface">{username}</p>
                            <p className="text-on-surface-secondary text-sm whitespace-pre-line">{bio}</p>
                        </>
                    )}
                </div>
                
                <div className="mt-4 flex items-center space-x-2">
                   {isEditing ? (
                       <>
                        <button onClick={handleSave} className="flex-1 bg-primary text-background font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity">
                            Salvar Alterações
                        </button>
                        <button onClick={handleCancel} className="flex-1 bg-surface text-on-surface font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
                            Cancelar
                        </button>
                       </>
                   ) : (
                    <button onClick={() => setIsEditing(true)} className="flex-1 bg-surface text-on-surface font-bold py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
                        Editar Perfil
                    </button>
                   )}
                </div>
            </div>

            <div className="border-t border-surface">
                <div className="flex justify-around">
                     <button className="flex-1 p-3 text-primary border-t-2 border-primary">
                        <GridIcon className="w-6 h-6 mx-auto" />
                     </button>
                     <button className="flex-1 p-3 text-on-surface-secondary">
                        <BookmarkIcon className="w-6 h-6 mx-auto" />
                     </button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-0.5">
                {userPosts.map(post => (
                    <div key={post.id} className="aspect-square bg-surface">
                        <img src={post.imageUrl} alt={post.caption} className="w-full h-full object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

// Dummy BookmarkIcon component to avoid breaking changes in other files
const BookmarkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
    </svg>
);

export default ProfileView;