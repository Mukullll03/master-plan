import React, { useState } from 'react';
import { LayoutDashboard, BookOpen, Sparkles, Clock, Link as LinkIcon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TabId } from '../types';

interface HeaderProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
}

const TABS: { id: TabId; label: string; icon: React.ReactNode }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" /> },
  { id: 'subjects', label: 'Subjects', icon: <BookOpen className="w-5 h-5" /> },
  { id: 'ai', label: 'AI Tools', icon: <Sparkles className="w-5 h-5" /> },
  { id: 'schedule', label: 'Time Mgt', icon: <Clock className="w-5 h-5" /> },
  { id: 'practice', label: 'Practice', icon: <LinkIcon className="w-5 h-5" /> }
];

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabClick = (id: TabId) => {
    setActiveTab(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5 md:gap-3">
            <img 
              src="https://framerusercontent.com/images/DGPdl3nBCOFyGKcpCA3RRw5QM2M.jpg?scale-down-to=512&width=1200&height=1200" 
              alt="CGL Master Logo" 
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl shadow-md object-cover"
            />
            <h1 className="font-extrabold text-xl md:text-2xl tracking-tight text-slate-800">
              CGL Master <span className="text-blue-600">Plan</span>
            </h1>
          </div>
          
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-[15px] font-bold tracking-wide transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                  ? 'bg-slate-900 text-white shadow-md' 
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <div className={activeTab === tab.id ? 'text-white' : 'text-slate-400'}>
                  {React.cloneElement(tab.icon as React.ReactElement, { className: 'w-4 h-4' })}
                </div>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          <button 
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2.5 rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all border border-slate-200 flex items-center gap-2 font-bold text-sm md:text-base"
          >
            <Menu className="w-5 h-5" />
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] md:w-[320px] bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <h2 className="font-extrabold text-xl text-slate-800">Navigation</h2>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="flex-1 p-4 space-y-2">
                {TABS.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl font-bold transition-all ${
                      activeTab === tab.id 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <div className={`${activeTab === tab.id ? 'text-white' : 'text-slate-400'}`}>
                      {tab.icon}
                    </div>
                    <span className="text-lg">{tab.label}</span>
                    {activeTab === tab.id && (
                      <motion.div 
                        layoutId="active-indicator"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-white"
                      />
                    )}
                  </button>
                ))}
              </nav>

              <div className="p-6 border-t border-slate-100 bg-slate-50">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Stats</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Target</p>
                    <p className="text-lg font-extrabold text-blue-600">345+</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-slate-200">
                    <p className="text-[10px] font-bold text-slate-500 uppercase">Grade Pay</p>
                    <p className="text-lg font-extrabold text-indigo-600">4600</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
