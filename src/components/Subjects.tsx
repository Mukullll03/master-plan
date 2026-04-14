import React, { useState } from 'react';
import { ChevronRight, PlayCircle, TrendingUp, Target, BookOpen, BookMarked, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SUBJECTS_DATA } from '../constants';

const ICON_MAP: Record<string, React.ReactNode> = {
  'trending-up': <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />,
  'target': <Target className="w-5 h-5 md:w-6 md:h-6" />,
  'book-open': <BookOpen className="w-5 h-5 md:w-6 md:h-6" />,
  'book-marked': <BookMarked className="w-5 h-5 md:w-6 md:h-6" />,
  'monitor': <Monitor className="w-5 h-5 md:w-6 md:h-6" />,
};

export default function Subjects() {
  const [activeSubjectId, setActiveSubjectId] = useState(SUBJECTS_DATA[0].id);
  const [accordionState, setAccordionState] = useState<Record<string, boolean>>({});

  const activeSubject = SUBJECTS_DATA.find(s => s.id === activeSubjectId)!;

  const toggleAccordion = (key: string) => {
    setAccordionState(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8">
      <div className="w-full md:w-48 lg:w-64 flex-shrink-0 flex md:flex-col gap-2.5 overflow-x-auto pb-3 md:pb-0 hide-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
        {SUBJECTS_DATA.map(sub => (
          <button
            key={sub.id}
            onClick={() => {
              setActiveSubjectId(sub.id);
              setAccordionState({});
            }}
            className={`flex items-center gap-2.5 md:gap-3 px-4 md:px-5 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold tracking-wide transition-all text-left whitespace-nowrap flex-shrink-0 text-[14px] md:text-[15px] ${
              activeSubjectId === sub.id 
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
              : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-slate-300'
            }`}
          >
            {ICON_MAP[sub.iconName]}
            {sub.title}
          </button>
        ))}
      </div>

      <div className="flex-1 bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm w-full">
        <div className="flex justify-between items-start border-b border-slate-100 pb-5 md:pb-6 mb-6 md:mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800">{activeSubject.title}</h2>
            <p className="text-blue-600 font-bold tracking-wide mt-1.5 md:mt-2 text-[14px] md:text-[16px]">Target Score: {activeSubject.target}</p>
          </div>
          <div className="p-3 md:p-4 bg-blue-50 text-blue-600 rounded-xl md:rounded-2xl hidden sm:block">
            {ICON_MAP[activeSubject.iconName]}
          </div>
        </div>

        <div className="mb-8 md:mb-10 space-y-3 md:space-y-4">
          {activeSubject.sections.map((section, index) => {
            const key = `${activeSubject.id}-${index}`;
            const isOpen = accordionState[key] || false;
            
            return (
              <div key={key} className="border border-slate-200 rounded-xl md:rounded-2xl overflow-hidden bg-white shadow-sm hover:border-slate-300 transition-colors">
                <button
                  className="w-full flex justify-between items-center p-4 md:p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
                  onClick={() => toggleAccordion(key)}
                >
                  <span className="font-bold text-[15px] md:text-[17px] text-slate-800 tracking-tight leading-tight">{section.title}</span>
                  <div className={`p-1.5 rounded-full bg-white shadow-sm transition-transform duration-300 ml-3 flex-shrink-0 ${isOpen ? 'rotate-90' : ''}`}>
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 md:p-6 border-t border-slate-100 bg-white">
                        <ul className="space-y-3 md:space-y-4">
                          {section.points.map((point, pIdx) => (
                            <li key={pIdx} className="flex gap-3 md:gap-4 text-slate-700 leading-relaxed items-start">
                              <div className="mt-2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                              <div>
                                {point.label && <strong className="text-slate-900 block sm:inline mr-2 text-[14px] md:text-[15px]">{point.label}:</strong>}
                                <span className="font-medium text-[14px] md:text-[15px]">{point.text}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-800 mb-4 md:mb-5 flex items-center gap-2">
          <PlayCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500" /> Resource Links
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {activeSubject.links.map((link, lIdx) => (
            <a 
              key={lIdx}
              href={link.url} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-xl md:rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group bg-white"
            >
              <div className="bg-red-50 p-2.5 md:p-3 rounded-lg md:rounded-xl text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors flex-shrink-0">
                <PlayCircle className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="overflow-hidden">
                <div className="font-bold text-[14px] md:text-[16px] text-slate-800 group-hover:text-blue-600 line-clamp-2 leading-snug mb-0.5 md:mb-1 truncate">{link.title}</div>
                <div className="text-[11px] md:text-[13px] font-semibold tracking-wide text-slate-500 uppercase truncate">{link.author}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
