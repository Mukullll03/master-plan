import React, { useState } from 'react';
import { Target, CheckCircle, Flame, Sparkles, Skull, Zap, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { TARGET_SCORES, INITIAL_TASKS } from '../constants';
import { generateText } from '../lib/gemini';

export default function Dashboard() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [coachMessage, setCoachMessage] = useState('');
  const [isCoachLoading, setIsCoachLoading] = useState(false);
  const [coachStyle, setCoachStyle] = useState<'motivate' | 'roast'>('motivate');

  const progress = Math.round((tasks.filter(t => t.done).length / tasks.length) * 100);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const getCoachFeedback = async () => {
    setIsCoachLoading(true);
    setCoachMessage('');

    let systemPrompt = "";
    let userPrompt = "";

    if (coachStyle === 'motivate') {
      systemPrompt = "You are a highly encouraging, high-energy mentor for SSC CGL aspirants.";
      userPrompt = `I have completed ${progress}% of my daily study tasks today. Give me a 2-sentence punchy, motivational message (use emojis). If progress is low (< 50%), push me to start grinding. If it's high, praise me and tell me to finish strong.`;
    } else {
      systemPrompt = "You are a very strict, sarcastic, 'no-nonsense' Indian offline coaching teacher for SSC CGL (like Aditya Ranjan or Gagan Pratap). You do not tolerate laziness.";
      userPrompt = `I have only completed ${progress}% of my daily study tasks today. Roast me brutally in 2-3 sentences using sarcastic Hinglish. Make me feel guilty for wasting time if the score is low. If the score is 100%, give me a very brief, gruff nod of approval but tell me tomorrow will be harder. Use emojis.`;
    }

    try {
      const text = await generateText(userPrompt, systemPrompt);
      setCoachMessage(text);
    } catch (e) {
      setCoachMessage(coachStyle === 'motivate' ? "Stay disciplined. Consistency beats brilliance every time! Keep grinding. 🔥" : "Bhai aise padhai karke 4600 grade pay milega? Inspector banna hai ya sapne dekhne hain? Padhai pe dhyan de! 😡");
    } finally {
      setIsCoachLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 hidden sm:block"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400 opacity-20 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2 hidden sm:block"></div>

        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2 flex items-center gap-2 md:gap-3 relative z-10">
          <Target className="w-6 h-6 md:w-8 md:h-8" /> Mission 4600 Grade Pay
        </h2>
        <p className="text-blue-100 mb-6 md:mb-8 text-base md:text-lg font-medium tracking-wide relative z-10">
          Target Safe Score: <span className="font-extrabold text-white text-xl md:text-2xl ml-1">345+ / 390</span>
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 relative z-10">
          {Object.entries(TARGET_SCORES).map(([key, data]) => (
            <div key={key} className="bg-white/10 rounded-xl md:rounded-2xl p-4 md:p-5 backdrop-blur-md border border-white/20 transition-all hover:bg-white/20">
              <div className="text-[10px] md:text-xs font-bold text-blue-100 mb-1 tracking-wider uppercase leading-tight">{data.label}</div>
              <div className="text-xl md:text-3xl font-extrabold tracking-tight">{data.target}</div>
              <div className="text-[10px] md:text-sm text-blue-200 mt-1 font-medium">out of {data.total}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-7 lg:col-span-8 space-y-6">
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-5 md:mb-6">
              <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-800 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" /> Daily Priorities
              </h3>
              <span className="text-[12px] md:text-sm font-bold tracking-wide text-blue-600 bg-blue-50 px-3 md:px-4 py-1 md:py-1.5 rounded-full whitespace-nowrap">
                {progress}% Done
              </span>
            </div>
            
            <div className="w-full bg-slate-100 rounded-full h-2 md:h-2.5 mb-6 md:mb-8">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="bg-green-500 h-2 md:h-2.5 rounded-full transition-all duration-500 ease-out"
              />
            </div>

            <div className="space-y-2.5 md:space-y-3">
              {tasks.map(task => (
                <div 
                  key={task.id}
                  onClick={() => toggleTask(task.id)}
                  className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl cursor-pointer transition-all border ${task.done ? 'bg-green-50 border-green-200' : 'bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300'}`}
                >
                  <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${task.done ? 'border-green-500 bg-green-500' : 'border-slate-300'}`}>
                    {task.done && <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />}
                  </div>
                  <span className={`text-[14px] md:text-[16px] leading-snug ${task.done ? 'text-green-800 line-through opacity-60 font-medium' : 'text-slate-700 font-semibold'}`}>
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-5 lg:col-span-4 space-y-6">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl md:rounded-3xl p-6 shadow-sm relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <h3 className="font-extrabold text-indigo-900 flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500" /> AI Mentor
              </h3>
              <div className="flex bg-white/60 p-1 rounded-lg border border-indigo-100 self-start">
                <button 
                  onClick={() => setCoachStyle('motivate')}
                  className={`px-2 py-1 text-xs font-bold rounded-md transition-colors ${coachStyle === 'motivate' ? 'bg-indigo-500 text-white shadow-sm' : 'text-indigo-700 hover:bg-indigo-100'}`}
                >
                  Motivate
                </button>
                <button 
                  onClick={() => setCoachStyle('roast')}
                  className={`px-2 py-1 text-xs font-bold rounded-md transition-colors flex items-center gap-1 ${coachStyle === 'roast' ? 'bg-red-500 text-white shadow-sm' : 'text-indigo-700 hover:bg-red-50 hover:text-red-600'}`}
                >
                  <Skull className="w-3 h-3" /> Roast
                </button>
              </div>
            </div>
            
            {coachMessage ? (
              <div className="text-indigo-900 font-medium leading-relaxed text-[15px] mb-4 bg-white/40 p-4 rounded-xl border border-indigo-100">
                {coachMessage}
              </div>
            ) : (
              <p className="text-indigo-700/70 text-sm mb-4">Click below to get AI feedback based on your {progress}% checklist progress.</p>
            )}

            <button 
              onClick={getCoachFeedback}
              disabled={isCoachLoading}
              className={`w-full border font-bold py-2.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 disabled:opacity-70 ${coachStyle === 'motivate' ? 'bg-white border-indigo-200 hover:border-indigo-400 text-indigo-700' : 'bg-red-50 border-red-200 hover:border-red-400 text-red-700'}`}
            >
              {isCoachLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Mentor is typing...
                </>
              ) : (
                coachStyle === 'motivate' ? (
                  <>
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                    Inspire Me ✨
                  </>
                ) : (
                  <>
                    <Flame className="w-4 h-4 text-red-500" />
                    Reality Check 🔥
                  </>
                )
              )}
            </button>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl md:rounded-3xl p-6">
            <h3 className="font-bold tracking-tight text-amber-900 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" /> Golden Rules
            </h3>
            <ul className="space-y-3 text-amber-800 text-[14px] font-medium leading-relaxed">
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div> Consistency Beats Brilliance: 6 hours daily &gt; 12 hours breaking every week.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div> 1 Book 10 times &gt; 10 Books 1 time.</li>
              <li className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0"></div> Mocks are for LEARNING, not testing.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
