import React from 'react';
import { MessageCircle, ChevronRight, Monitor, ExternalLink, TrendingUp } from 'lucide-react';
import { TELEGRAM_LINKS } from '../constants';

export default function Practice() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-800 mb-5 md:mb-6 flex items-center gap-2 md:gap-3">
          <Monitor className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0" /> Practice Platforms
        </h3>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
          <a href="https://testbook.com/" target="_blank" rel="noreferrer" className="flex-1 text-center px-4 md:px-6 py-3 md:py-4 bg-blue-50 text-blue-700 font-bold tracking-wide rounded-xl md:rounded-2xl hover:bg-blue-100 border border-blue-200 transition-colors text-[14px] md:text-[16px]">
            Testbook (PYQs)
          </a>
          <a href="https://www.oliveboard.in/" target="_blank" rel="noreferrer" className="flex-1 text-center px-4 md:px-6 py-3 md:py-4 bg-emerald-50 text-emerald-700 font-bold tracking-wide rounded-xl md:rounded-2xl hover:bg-emerald-100 border border-emerald-200 transition-colors text-[14px] md:text-[16px]">
            Oliveboard (Live Mocks)
          </a>
          <a href="https://practicemock.com/" target="_blank" rel="noreferrer" className="flex-1 text-center px-4 md:px-6 py-3 md:py-4 bg-slate-50 text-slate-700 font-bold tracking-wide rounded-xl md:rounded-2xl hover:bg-slate-100 border border-slate-200 transition-colors text-[14px] md:text-[16px]">
            PracticeMock
          </a>
        </div>
      </div>

      <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-800 mb-5 md:mb-6 flex items-center gap-2 md:gap-3">
          <ExternalLink className="w-5 h-5 md:w-6 md:h-6 text-amber-500 flex-shrink-0" /> Official & Utilities
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          <a href="https://ssc.gov.in/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all group">
            <div className="bg-amber-50 p-2 md:p-2.5 rounded-lg text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors flex-shrink-0">
              <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div className="font-bold text-[14px] md:text-[16px] text-slate-800 group-hover:text-amber-600 truncate">Official SSC Portal</div>
          </a>
          <a href="https://rtionline.gov.in/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all group">
            <div className="bg-amber-50 p-2 md:p-2.5 rounded-lg text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors flex-shrink-0">
              <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div className="font-bold text-[14px] md:text-[16px] text-slate-800 group-hover:text-amber-600 truncate">RTI Portal</div>
          </a>
          <a href="https://rankmitra.in/" target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all group">
            <div className="bg-amber-50 p-2 md:p-2.5 rounded-lg text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors flex-shrink-0">
              <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <div className="font-bold text-[14px] md:text-[16px] text-slate-800 group-hover:text-amber-600 truncate">Rank Mitra</div>
          </a>
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-xl mt-6 md:mt-8">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2 md:mb-3 flex items-center gap-2 md:gap-3">
          <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-blue-400 flex-shrink-0" /> Ultimate Resource Hub
        </h2>
        <p className="text-slate-300 font-medium text-[15px] md:text-lg">The most powerful Telegram communities for free PYQs and targets.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {TELEGRAM_LINKS.map((link, i) => (
          <a 
            key={i}
            href={link.url} 
            target="_blank" 
            rel="noreferrer"
            className="bg-white border border-slate-200 p-5 md:p-6 rounded-2xl md:rounded-3xl hover:border-blue-400 hover:shadow-lg transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <div className="bg-blue-50 p-2 md:p-2.5 rounded-lg md:rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-colors flex-shrink-0">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-500 group-hover:text-white" />
                </div>
                <h3 className="text-[16px] md:text-lg font-extrabold tracking-tight text-slate-800 group-hover:text-blue-600 line-clamp-1">{link.title}</h3>
              </div>
              <p className="text-[14px] md:text-[15px] text-slate-600 font-medium leading-relaxed mb-4 md:mb-6">{link.desc}</p>
            </div>
            <div className="text-blue-600 text-[13px] md:text-sm font-bold tracking-wide uppercase flex items-center gap-1 group-hover:translate-x-1 transition-transform w-max">
              Join Channel <ChevronRight className="w-4 h-4" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
