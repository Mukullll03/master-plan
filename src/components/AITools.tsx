import React, { useState, useRef } from 'react';
import { Sparkles, Camera, Image as ImageIcon, Calculator, CheckSquare, Brain, Briefcase, LineChart, BookOpenText, Loader2, Wand2, Volume2, Square, X } from 'lucide-react';
import { motion } from 'motion/react';
import { QUICK_PROMPTS } from '../constants';
import { generateText, generateImage, generateSpeech } from '../lib/gemini';

const ICON_MAP: Record<string, React.ReactNode> = {
  camera: <Camera className="w-4 h-4 text-indigo-500" />,
  image: <ImageIcon className="w-4 h-4 text-fuchsia-600" />,
  'book-a': <BookOpenText className="w-4 h-4 text-indigo-600" />,
  calculator: <Calculator className="w-4 h-4 text-red-600" />,
  'check-square': <CheckSquare className="w-4 h-4 text-teal-600" />,
  brain: <Brain className="w-4 h-4 text-emerald-600" />,
  briefcase: <Briefcase className="w-4 h-4 text-slate-600" />,
  'line-chart': <LineChart className="w-4 h-4 text-amber-600" />,
  'book-open-text': <BookOpenText className="w-4 h-4 text-blue-600" />,
};

export default function AITools() {
  const [input, setInput] = useState('');
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [imageMimeType, setImageMimeType] = useState<string | null>(null);
  const [response, setResponse] = useState<{ type: 'text' | 'image'; content: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isTTSLoading, setIsTTSLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageMimeType(file.type);
    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setImageBase64(result.split(',')[1]);
    };
    reader.readAsDataURL(file);
  };

  const handleGenerate = async () => {
    if (!input.trim() && !imageBase64) return;
    setIsLoading(true);
    setError(null);
    setResponse(null);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }

    try {
      if (input.trim().startsWith("[IMAGE]")) {
        const actualPrompt = input.replace("[IMAGE]", "").trim();
        const imageUrl = await generateImage(actualPrompt);
        setResponse({ type: 'image', content: imageUrl });
      } else {
        const systemPrompt = "You are the Ultimate SSC CGL Mentor. You are an expert in creating unforgettable memory tricks, solving difficult maths/reasoning questions from images step-by-step with short tricks, comparing SSC CGL posts, analyzing mock scores, and generating RCs. Format your responses beautifully using Markdown, emojis, and clear bullet points.";
        const promptText = input.trim() !== '' ? input : "Please solve the tricky question in this image step-by-step and provide the final answer clearly.";
        const text = await generateText(promptText, systemPrompt, imageBase64 || undefined, imageMimeType || undefined);
        setResponse({ type: 'text', content: text });
      }
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleTTS = async () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
      return;
    }
    if (!response || response.type !== 'text') return;

    setIsTTSLoading(true);
    try {
      const textToSpeak = response.content.replace(/[*#_]/g, '').slice(0, 1500);
      const pcmBase64 = await generateSpeech(textToSpeak);
      if (pcmBase64) {
        const wavBlob = pcmToWav(pcmBase64);
        const wavUrl = URL.createObjectURL(wavBlob);
        const audio = new Audio(wavUrl);
        audioRef.current = audio;
        audio.onended = () => setIsPlaying(false);
        audio.play();
        setIsPlaying(true);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsTTSLoading(false);
    }
  };

  // PCM to WAV helper
  const pcmToWav = (pcmBase64: string, sampleRate = 24000) => {
    const binaryString = window.atob(pcmBase64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const pcmData = new Int16Array(bytes.buffer);
    const numChannels = 1;
    const byteRate = sampleRate * numChannels * 2;
    const blockAlign = numChannels * 2;
    const buffer = new ArrayBuffer(44 + pcmData.byteLength);
    const view = new DataView(buffer);

    const writeString = (view: DataView, offset: number, string: string) => {
      for (let i = 0; i < string.length; i++) {
        view.setUint8(offset + i, string.charCodeAt(i));
      }
    };

    writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + pcmData.byteLength, true);
    writeString(view, 8, 'WAVE');
    writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, byteRate, true);
    view.setUint16(32, blockAlign, true);
    view.setUint16(34, 2, true);
    writeString(view, 36, 'data');
    view.setUint32(40, pcmData.byteLength, true);

    let offset = 44;
    for (let i = 0; i < pcmData.length; i++, offset += 2) {
      view.setInt16(offset, pcmData[i], true);
    }

    return new Blob([view], { type: 'audio/wav' });
  };

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="bg-gradient-to-r from-purple-700 to-indigo-800 rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 hidden sm:block"></div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2 md:mb-3 flex items-center gap-2 md:gap-3 relative z-10">
          <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-300" /> Omni-Prompt Assistant
        </h2>
        <p className="text-purple-100 font-medium text-[15px] md:text-lg max-w-2xl relative z-10">
          Your all-in-one SSC mentor. Use a quick template below, type any CGL-related request, or <strong>upload an image</strong> of a tricky question.
        </p>
      </div>

      <div>
        <h3 className="text-[13px] md:text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 px-1">Quick Actions</h3>
        <div className="flex overflow-x-auto hide-scrollbar gap-2 md:gap-3 pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {QUICK_PROMPTS.map((action, i) => (
            <button 
              key={i}
              onClick={() => {
                setInput(action.template);
                setResponse(null);
              }}
              className="flex items-center gap-2 bg-white border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 text-slate-700 font-semibold px-4 py-2 rounded-full transition-all text-[13px] md:text-sm shadow-sm flex-shrink-0"
            >
              {ICON_MAP[action.iconName]}
              {action.label}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200">
        <h3 className="text-lg md:text-xl font-bold tracking-tight text-slate-800 mb-3">
          What do you need help with?
        </h3>
        
        <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your request here, select a quick action above, or upload an image below..."
          className="w-full bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl p-4 md:p-5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none min-h-[140px] text-[15px] md:text-[16px] text-slate-800 font-medium leading-relaxed"
        />

        {imageBase64 ? (
          <div className="mt-3 relative w-20 h-20 md:w-24 md:h-24">
            <img src={`data:${imageMimeType};base64,${imageBase64}`} className="w-full h-full object-cover rounded-xl border border-slate-200 shadow-sm" alt="Upload preview" />
            <button onClick={() => setImageBase64(null)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md hover:bg-red-600 transition-colors">
              <X className="w-3 h-3" />
            </button>
          </div>
        ) : (
          <div className="mt-3">
             <label className="flex items-center gap-2 cursor-pointer text-[13px] md:text-sm font-bold text-indigo-600 bg-indigo-50 px-4 py-2.5 rounded-xl hover:bg-indigo-100 transition-colors w-max shadow-sm border border-indigo-100">
               <ImageIcon className="w-4 h-4" /> Upload Tricky Question (Image) ✨
               <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
             </label>
          </div>
        )}

        <button 
          onClick={handleGenerate}
          disabled={isLoading || (!input.trim() && !imageBase64)}
          className="w-full mt-5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white font-bold py-3 md:py-4 rounded-xl md:rounded-2xl transition-all flex items-center justify-center gap-2 text-[15px] md:text-[16px] shadow-md shadow-indigo-600/20"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating AI Insights...
            </>
          ) : (
            <>
              <Wand2 className="w-5 h-5" />
              Generate AI Magic ✨
            </>
          )}
        </button>

        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-semibold border border-red-100">
            {error}
          </div>
        )}
      </div>

      {response && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-50 rounded-2xl md:rounded-3xl p-6 md:p-8 border border-emerald-100 shadow-sm mt-6 md:mt-8"
        >
          {response.type === 'text' ? (
            <>
              <div className="flex justify-between items-center border-b border-emerald-200/60 pb-4 mb-5">
                <div className="flex items-center gap-2 md:gap-3">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                  <h3 className="text-xl md:text-2xl font-extrabold text-emerald-900 tracking-tight">AI Response</h3>
                </div>
                <button 
                  onClick={handleTTS}
                  className="flex items-center gap-1.5 md:gap-2 bg-emerald-200/60 hover:bg-emerald-200 text-emerald-800 px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl text-[13px] md:text-sm font-bold transition-colors shadow-sm"
                >
                  {isTTSLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : (isPlaying ? <Square className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />)}
                  {isTTSLoading ? 'Loading' : (isPlaying ? 'Stop' : 'Listen')}
                </button>
              </div>
              <div className="prose prose-slate max-w-none text-[15px] md:text-[16px] text-slate-700 leading-relaxed">
                {response.content.split('\n').map((line, i) => (
                  <p key={i} className="mb-2">
                    {line.split(/(\*\*.*?\*\*)/).map((part, j) => 
                      part.startsWith('**') && part.endsWith('**') 
                        ? <strong key={j} className="text-slate-900 font-extrabold">{part.slice(2, -2)}</strong>
                        : part
                    )}
                  </p>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 md:gap-3 border-b border-emerald-200/60 pb-4 mb-5">
                <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-emerald-600" />
                <h3 className="text-xl md:text-2xl font-extrabold text-emerald-900 tracking-tight">Your Visual Memory Mnemonic</h3>
              </div>
              <img src={response.content} alt="AI Generated Memory Trick" className="w-full max-w-lg rounded-2xl shadow-md border border-emerald-200 mx-auto" />
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
