'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HomeView from '@/components/views/HomeView';
import EventsView from '@/components/views/EventsView';
import ResourcesView from '@/components/views/ResourcesView';
import AboutView from '@/components/views/AboutView';

export default function ViewManager() {
  const [activeView, setActiveView] = useState('home');

  const renderView = () => {
    switch (activeView) {
      case 'events':
        return <EventsView />;
      case 'resources':
        return <ResourcesView />;
      case 'about':
        return <AboutView />;
      case 'home':
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header onNavigate={setActiveView} activeView={activeView} />
      <main className="flex-1 w-full">
        {renderView()}
      </main>

      <footer className="bg-button px-6 py-6 text-cream">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-cream/25 pt-4 md:flex-row md:items-end md:justify-between">
          <div className="text-xs leading-5 text-cream/75">
            <p>Home | Leadership | Resources | About Us | Gallery</p>
            <p>© 2026 Viking Catholic. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-5 text-2xl text-lightGreen/90">
            <span>f</span>
            <span>◎</span>
            <span>✉</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
