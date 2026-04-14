import React from 'react';
import { Brain, FileText, Target, Clock, Zap } from 'lucide-react';

export default function Schedule() {
  return (
    <div className="space-y-6 md:space-y-8">
      <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm relative overflow-hidden mb-6 md:mb-8">
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-purple-50/50 rounded-bl-full -z-10"></div>
        <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-800 border-b border-slate-100 pb-3 md:pb-4 mb-5 md:mb-6 flex items-center gap-2 md:gap-3">
          <Brain className="w-5 h-5 md:w-6 md:h-6 text-purple-500 flex-shrink-0" /> Macro Roadmap
        </h3>
        
        <div className="space-y-5 md:space-y-6 relative before:absolute before:inset-0 before:ml-4 md:before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 md:border-4 border-white bg-purple-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm md:text-base">1</div>
            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-purple-50 p-4 md:p-5 rounded-xl md:rounded-2xl border border-purple-100">
              <h4 className="font-bold text-purple-900 text-[15px] md:text-lg mb-1">Months 1 to 3: The Base Build</h4>
              <p className="text-[13px] md:text-sm text-purple-800 font-medium leading-relaxed">Focus 80% time on completing the Maths & English grammar syllabus. Start GK. Give 1 Full Mock every Sunday.</p>
            </div>
          </div>
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 md:border-4 border-white bg-blue-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm md:text-base">2</div>
            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-blue-50 p-4 md:p-5 rounded-xl md:rounded-2xl border border-blue-100">
              <h4 className="font-bold text-blue-900 text-[15px] md:text-lg mb-1">Months 4 to 5: Speed & Sectionals</h4>
              <p className="text-[13px] md:text-sm text-blue-800 font-medium leading-relaxed">Shift focus to Sectional Mocks (3-4/week). Start Computer and Typing. Increase GK revision to 3 hours/day.</p>
            </div>
          </div>
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 md:border-4 border-white bg-emerald-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-sm md:text-base">3</div>
            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-emerald-50 p-4 md:p-5 rounded-xl md:rounded-2xl border border-emerald-100">
              <h4 className="font-bold text-emerald-900 text-[15px] md:text-lg mb-1">Month 6: The Endgame (Mocks)</h4>
              <p className="text-[13px] md:text-sm text-emerald-800 font-medium leading-relaxed">Give 1 Full Mock DAILY. Stop learning new concepts. Rely entirely on your Formula book & revision.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-indigo-50/50 rounded-bl-full -z-10"></div>
          <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-800 border-b border-slate-100 pb-3 md:pb-4 mb-5 md:mb-6 flex items-center gap-2 md:gap-3">
            <FileText className="w-5 h-5 md:w-6 md:h-6 text-indigo-500 flex-shrink-0" /> Tier I (Pre) Pattern
          </h3>
          <div className="flex flex-wrap gap-2.5 md:gap-3 mb-5 md:mb-6">
            <span className="bg-indigo-50 text-indigo-700 px-3 md:px-4 py-1 md:py-1.5 rounded-lg md:rounded-xl font-bold text-[12px] md:text-sm tracking-wide">60 Mins</span>
            <span className="bg-indigo-50 text-indigo-700 px-3 md:px-4 py-1 md:py-1.5 rounded-lg md:rounded-xl font-bold text-[12px] md:text-sm tracking-wide">200 Marks</span>
            <span className="bg-red-50 text-red-600 px-3 md:px-4 py-1 md:py-1.5 rounded-lg md:rounded-xl font-bold text-[12px] md:text-sm tracking-wide">-0.5 Negative/Q</span>
          </div>
          <ul className="space-y-3 md:space-y-4">
            <li className="flex justify-between items-center text-slate-700 border-b border-slate-50 pb-2"><span className="font-bold text-[14px] md:text-[16px]">Maths</span> <span className="font-medium text-slate-500 text-[13px] md:text-sm">25 Q / 50 M</span></li>
            <li className="flex justify-between items-center text-slate-700 border-b border-slate-50 pb-2"><span className="font-bold text-[14px] md:text-[16px]">Reasoning</span> <span className="font-medium text-slate-500 text-[13px] md:text-sm">25 Q / 50 M</span></li>
            <li className="flex justify-between items-center text-slate-700 border-b border-slate-50 pb-2"><span className="font-bold text-[14px] md:text-[16px]">English</span> <span className="font-medium text-slate-500 text-[13px] md:text-sm">25 Q / 50 M</span></li>
            <li className="flex justify-between items-center text-slate-700"><span className="font-bold text-[14px] md:text-[16px]">General Awareness</span> <span className="font-medium text-slate-500 text-[13px] md:text-sm">25 Q / 50 M</span></li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-blue-50/50 rounded-bl-full -z-10"></div>
          <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-slate-800 border-b border-slate-100 pb-3 md:pb-4 mb-5 md:mb-6 flex items-center gap-2 md:gap-3">
            <Target className="w-5 h-5 md:w-6 md:h-6 text-blue-500 flex-shrink-0" /> Tier II (Mains)
          </h3>
          <div className="flex flex-wrap gap-2.5 md:gap-3 mb-5 md:mb-6">
            <span className="bg-blue-50 text-blue-700 px-3 md:px-4 py-1 md:py-1.5 rounded-lg md:rounded-xl font-bold text-[12px] md:text-sm tracking-wide">2 Hrs 15 M</span>
            <span className="bg-blue-50 text-blue-700 px-3 md:px-4 py-1 md:py-1.5 rounded-lg md:rounded-xl font-bold text-[12px] md:text-sm tracking-wide">390 Marks</span>
            <span className="bg-red-50 text-red-600 px-3 md:px-4 py-1 md:py-1.5 rounded-lg md:rounded-xl font-bold text-[12px] md:text-sm tracking-wide">-1 Negative/Q</span>
          </div>
          <ul className="space-y-3 md:space-y-4">
            <li className="text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="flex justify-between items-center font-bold mb-1"><span className="text-slate-800 text-[14px] md:text-[16px]">Sec I (60 Mins)</span> <span className="text-blue-600 text-[13px] md:text-[16px]">180 Marks</span></div>
              <div className="text-[12px] md:text-sm text-slate-500 font-medium">Maths (30Q) + Reasoning (30Q)</div>
            </li>
            <li className="text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="flex justify-between items-center font-bold mb-1"><span className="text-slate-800 text-[14px] md:text-[16px]">Sec II (60 Mins)</span> <span className="text-blue-600 text-[13px] md:text-[16px]">210 Marks</span></div>
              <div className="text-[12px] md:text-sm text-slate-500 font-medium">English (45Q) + GK (25Q)</div>
            </li>
            <li className="text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="flex justify-between items-center font-bold mb-1"><span className="text-slate-800 text-[14px] md:text-[16px]">Sec III (15 Mins)</span> <span className="text-amber-600 text-[13px] md:text-[16px]">60 Marks</span></div>
              <div className="text-[12px] md:text-sm text-slate-500 font-medium">Computer Knowledge (20Q)</div>
            </li>
            <li className="text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <div className="flex justify-between items-center font-bold mb-1"><span className="text-slate-800 text-[14px] md:text-[16px]">DEST (15 Mins)</span> <span className="text-amber-600 text-[13px] md:text-[16px]">Qualifying</span></div>
              <div className="text-[12px] md:text-sm text-slate-500 font-medium">Typing Test (Data Entry)</div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-indigo-600 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-xl">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2 md:mb-3 flex items-center gap-2 md:gap-3">
          <Clock className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0" /> 60-Minute Strategy
        </h2>
        <p className="text-indigo-100 font-medium text-[15px] md:text-lg">Execute this exact timeline in every mock test.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-40 md:h-40 bg-blue-50/50 rounded-bl-full -z-10"></div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-800 border-b border-slate-100 pb-3 md:pb-4 mb-5 md:mb-6">Sec I <span className="text-slate-400 font-medium text-[15px] md:text-lg ml-1 md:ml-2">(Maths & Reason)</span></h3>
          <ul className="space-y-5 md:space-y-6">
            <li className="flex gap-3 md:gap-5 items-start">
              <span className="font-mono font-bold text-[15px] md:text-lg text-blue-600 w-14 md:w-16 bg-blue-50 px-1 md:px-2 py-1 rounded-md md:rounded-lg text-center border border-blue-100 flex-shrink-0">0-25</span>
              <p className="text-slate-700 font-medium leading-relaxed pt-0.5 md:pt-1 text-[14px] md:text-[16px]"><strong className="text-slate-900 font-bold">Reasoning:</strong> Attack first. Target: 30 Qs in 25 mins.</p>
            </li>
            <li className="flex gap-3 md:gap-5 items-start">
              <span className="font-mono font-bold text-[15px] md:text-lg text-blue-600 w-14 md:w-16 bg-blue-50 px-1 md:px-2 py-1 rounded-md md:rounded-lg text-center border border-blue-100 flex-shrink-0">25-55</span>
              <p className="text-slate-700 font-medium leading-relaxed pt-0.5 md:pt-1 text-[14px] md:text-[16px]"><strong className="text-slate-900 font-bold">Maths:</strong> First sweep. Skip ANY question taking &gt; 1.5 mins instantly.</p>
            </li>
            <li className="flex gap-3 md:gap-5 items-start">
              <span className="font-mono font-bold text-[15px] md:text-lg text-blue-600 w-14 md:w-16 bg-blue-50 px-1 md:px-2 py-1 rounded-md md:rounded-lg text-center border border-blue-100 flex-shrink-0">55-60</span>
              <p className="text-slate-700 font-medium leading-relaxed pt-0.5 md:pt-1 text-[14px] md:text-[16px]"><strong className="text-slate-900 font-bold">Buffer:</strong> Revisit tricky skipped questions.</p>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-40 md:h-40 bg-emerald-50/50 rounded-bl-full -z-10"></div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-800 border-b border-slate-100 pb-3 md:pb-4 mb-5 md:mb-6">Sec II <span className="text-slate-400 font-medium text-[15px] md:text-lg ml-1 md:ml-2">(English & GK)</span></h3>
          <ul className="space-y-5 md:space-y-6">
            <li className="flex gap-3 md:gap-5 items-start">
              <span className="font-mono font-bold text-[15px] md:text-lg text-emerald-600 w-14 md:w-16 bg-emerald-50 px-1 md:px-2 py-1 rounded-md md:rounded-lg text-center border border-emerald-100 flex-shrink-0">0-10</span>
              <p className="text-slate-700 font-medium leading-relaxed pt-0.5 md:pt-1 text-[14px] md:text-[16px]"><strong className="text-slate-900 font-bold">GK:</strong> Binary subject (know or don't know). Mark and move.</p>
            </li>
            <li className="flex gap-3 md:gap-5 items-start">
              <span className="font-mono font-bold text-[15px] md:text-lg text-emerald-600 w-14 md:w-16 bg-emerald-50 px-1 md:px-2 py-1 rounded-md md:rounded-lg text-center border border-emerald-100 flex-shrink-0">10-45</span>
              <p className="text-slate-700 font-medium leading-relaxed pt-0.5 md:pt-1 text-[14px] md:text-[16px]"><strong className="text-slate-900 font-bold">English:</strong> Vocab/Grammar first. Leave RCs for the end.</p>
            </li>
            <li className="flex gap-3 md:gap-5 items-start">
              <span className="font-mono font-bold text-[15px] md:text-lg text-emerald-600 w-14 md:w-16 bg-emerald-50 px-1 md:px-2 py-1 rounded-md md:rounded-lg text-center border border-emerald-100 flex-shrink-0">45-60</span>
              <p className="text-slate-700 font-medium leading-relaxed pt-0.5 md:pt-1 text-[14px] md:text-[16px]"><strong className="text-slate-900 font-bold">Review:</strong> RCs and ensure no silly mistakes in Grammar options.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm">
        <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-800 mb-4 md:mb-5 flex items-center gap-2">
          <Zap className="w-5 h-5 md:w-6 md:h-6 text-purple-500" /> Weekend Strategy (Sundays)
        </h3>
        <div className="bg-purple-50 p-5 md:p-6 rounded-xl md:rounded-2xl border border-purple-100 text-purple-900 font-medium leading-relaxed text-[14px] md:text-[16px]">
          <strong className="font-extrabold tracking-wide text-purple-950 uppercase text-[12px] md:text-sm block mb-1.5 md:mb-2">No New Studies!</strong> 
          Dedicate Sunday purely to consolidation. Attempt 1 Full Live Mock (Oliveboard/Testbook) and spend 2 hours deep-analyzing it. Update your formula book, AI vocab, and revision based on mistakes.
        </div>
      </div>
    </div>
  );
}
