import React from 'react';
import { MOCK_COMMUNITIES } from '../constants';
import { Community } from '../types';
import { SearchIcon } from './Icons';

const CommunityCard: React.FC<{ community: Community }> = ({ community }) => (
  <div className="relative rounded-xl overflow-hidden aspect-[16/10] group cursor-pointer">
    <img src={community.bannerUrl} alt={community.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
      <h3 className="font-bold text-white text-lg">{community.name}</h3>
      <p className="text-gray-300 text-sm">{community.memberCount.toLocaleString()} members</p>
    </div>
  </div>
);

const DiscoverView: React.FC = () => (
  <div>
    <header className="p-4 sticky top-0 bg-background/80 backdrop-blur-sm z-10 border-b border-surface">
      <h1 className="text-2xl font-bold text-on-surface mb-4">Discover</h1>
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search communities, topics, or people"
          className="w-full bg-surface border-2 border-gray-700 rounded-full py-2.5 pl-12 pr-4 text-on-surface placeholder:text-on-surface-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-secondary">
          <SearchIcon className="w-5 h-5" />
        </div>
      </div>
    </header>
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {MOCK_COMMUNITIES.map(community => <CommunityCard key={community.id} community={community} />)}
    </div>
  </div>
);

export default DiscoverView;
