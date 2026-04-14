import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Subjects from './components/Subjects';
import AITools from './components/AITools';
import Schedule from './components/Schedule';
import Practice from './components/Practice';
import { TabId } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('dashboard');

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-6xl mx-auto px-4 mt-6 md:mt-10 pb-12 md:pb-16">
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'subjects' && <Subjects />}
        {activeTab === 'ai' && <AITools />}
        {activeTab === 'schedule' && <Schedule />}
        {activeTab === 'practice' && <Practice />}
      </main>
    </div>
  );
}
