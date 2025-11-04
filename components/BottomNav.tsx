import React from 'react';
import { ActiveView } from '../types';
import { HomeIcon, CompassIcon, PlusCircleIcon, MessageIcon, UserIcon } from './Icons';

interface BottomNavProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
}

const NavItem: React.FC<{
  label: ActiveView;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className={`flex flex-col items-center justify-center w-full h-full transition-colors duration-300 ${isActive ? 'text-primary' : 'text-on-surface-secondary hover:text-on-surface'}`}
  >
    {icon}
  </button>
);

const BottomNav: React.FC<BottomNavProps> = ({ activeView, setActiveView }) => {
  const navItems: { label: ActiveView; icon: React.ReactNode }[] = [
    { label: 'home', icon: <HomeIcon className="w-6 h-6" /> },
    { label: 'discover', icon: <CompassIcon className="w-6 h-6" /> },
    { label: 'shorts', icon: <PlusCircleIcon className="w-8 h-8" /> },
    { label: 'messages', icon: <MessageIcon className="w-6 h-6" /> },
    { label: 'profile', icon: <UserIcon className="w-6 h-6" /> },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-16 bg-surface border-t border-gray-800 z-50 max-w-lg mx-auto">
      <nav className="flex justify-around items-center h-full">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            isActive={activeView === item.label}
            onClick={() => setActiveView(item.label)}
          />
        ))}
      </nav>
    </footer>
  );
};

export default BottomNav;
