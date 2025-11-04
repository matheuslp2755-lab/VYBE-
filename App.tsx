import React, { useState } from 'react';
import { ActiveView } from './types';
import BottomNav from './components/BottomNav';
import HomeView from './components/HomeView';
import DiscoverView from './components/DiscoverView';
import ShortsView from './components/ShortsView';
import MessagesView from './components/MessagesView';
import ProfileView from './components/ProfileView';
import LoginView from './components/LoginView';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [activeView, setActiveView] = useState<ActiveView>('home');

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <LoginView onLogin={handleLogin} />;
  }

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <HomeView />;
      case 'discover':
        return <DiscoverView />;
      case 'shorts':
        return <ShortsView />;
      case 'messages':
        return <MessagesView />;
      case 'profile':
        return <ProfileView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans max-w-lg mx-auto border-x border-gray-900">
      <main className="pb-20">
        {renderView()}
      </main>
      <BottomNav activeView={activeView} setActiveView={setActiveView} />
    </div>
  );
};

export default App;
