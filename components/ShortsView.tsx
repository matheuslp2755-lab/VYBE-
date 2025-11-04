import React from 'react';
import { PlusCircleIcon } from './Icons';

const ShortsView: React.FC = () => (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
        <PlusCircleIcon className="w-24 h-24 text-primary mb-4" />
        <h1 className="text-2xl font-bold text-on-surface">Shorts</h1>
        <p className="text-on-surface-secondary mt-2">This feature is coming soon!</p>
        <p className="text-on-surface-secondary mt-1">Get ready to create and watch amazing short videos.</p>
    </div>
);

export default ShortsView;
