'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HomeView from '@/components/views/HomeView';
import EventsView from '@/components/views/EventsView';
import ResourcesView from '@/components/views/ResourcesView';
import AboutView from '@/components/views/AboutView';
import { FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";


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
              <button onClick={() => setActiveView("home")} className="hover:underline">
                Home
              </button>
              <span className="mx-2">|</span>
              <button onClick={() => setActiveView("events")} className="hover:underline">
                Upcoming Events
              </button>
              <span className="mx-2">|</span>
              <button onClick={() => setActiveView("resources")} className="hover:underline">
                Resources
              </button>
              <span className="mx-2">|</span>
              <button onClick={() => setActiveView("about")} className="hover:underline">
                About Us
              </button>
          </div>

          <div className="flex items-center gap-5 text-2xl text-lightGreen/90">
            <FaFacebookF className="w-5 h-5 hover:opacity-80" />
            <FaInstagram className="w-5 h-5 hover:opacity-80" />
            <FaEnvelope className="w-5 h-5 hover:opacity-80" />
          </div>
        </div>
      </footer>
    </div>
  );
}
