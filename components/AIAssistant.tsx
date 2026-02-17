
import React, { useState } from 'react';
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { Brain, Send, Sparkles, AlertCircle, Zap } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { SUGGESTED_TOPICS } from '../constants';

const LOTTIE_LOADING_URL = 'https://lottie.host/4db68bbd-31f6-4cd8-84eb-189571e18dc2/H2YFpKmOEi.lottie';

const AIAssistant: React.FC = () => {
  const [interest, setInterest] = useState('');
  const [loading, setLoading] = useState(false);
  const [ideas, setIdeas] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const generateIdeas = async () => {
    if (!interest.trim()) return;
    
    setLoading(true);
    setError(null);

    // Check if API key is configured
    if (!process.env.API_KEY) {
      console.error("API Key check failed: process.env.API_KEY is undefined/empty");
      setError("API Key is missing. Please add GEMINI_API_KEY to your .env.local file.");
      setLoading(false);
      return;
    }

    // Debug log (masked)
    console.log("Using API Key:", process.env.API_KEY.substring(0, 4) + "..." + process.env.API_KEY.slice(-4));

    try {
      const genAI = new GoogleGenerativeAI(process.env.API_KEY);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: {
            type: SchemaType.ARRAY,
            items: {
              type: SchemaType.OBJECT,
              properties: {
                title: { type: SchemaType.STRING },
                domain: { type: SchemaType.STRING },
                difficulty: { type: SchemaType.STRING },
                description: { type: SchemaType.STRING }
              },
              required: ["title", "domain", "difficulty", "description"]
            }
          }
        }
      });

      const prompt = `I am interested in ${interest}. Give me 3 unique and trending Final Year Project ideas for computer science/IT students. Include title, domain, difficulty (Easy/Medium/Hard), and a short description. Format the output as a JSON array of objects.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      if (text) {
        const data = JSON.parse(text);
        setIdeas(data);
      } else {
        throw new Error("No response text from AI");
      }
    } catch (err: any) {
      console.error("Gemini API Error Full Details:", err);
      // Check for common errors
      if (err.toString().includes('400') || err.toString().includes('API key')) {
         setError("Invalid API Key or Bad Request. Please check console for details.");
      } else {
         setError("Unable to connect to AI consultant. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-consultant" className="py-24 bg-gray-900 text-white overflow-hidden relative">
      {/* Animated background patterns */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] animate-float delay-300" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-blue-500/20">
            <Sparkles className="w-4 h-4" />
            <span>Powered by Gemini AI</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get Project Ideas <span className="gradient-text">in Seconds</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Tell our AI what you're interested in, and we'll suggest custom final year project topics tailored for you.
          </p>
        </div>

        {/* Suggested Topics */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {SUGGESTED_TOPICS.map((topic, idx) => (
            <button
              key={idx}
              onClick={() => setInterest(topic)}
              className="px-3 py-1.5 text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-blue-500/20 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-200 cursor-pointer"
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="bg-white/5 border border-white/10 p-2 rounded-2xl flex flex-col md:flex-row gap-2 mb-4 backdrop-blur-sm">
          <input 
            type="text" 
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="e.g., Python, Healthcare, Blockchain, Cyber Security..."
            className="flex-grow bg-transparent px-6 py-4 outline-none text-lg text-white placeholder:text-gray-500"
            onKeyDown={(e) => e.key === 'Enter' && generateIdeas()}
            aria-label="Enter your area of interest"
          />
          <button 
            onClick={generateIdeas}
            disabled={loading || !interest.trim()}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-700 disabled:to-gray-700 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25"
            aria-label="Generate project ideas"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Brain className="w-5 h-5" />
            )}
            {loading ? 'Generating...' : 'Consult AI'}
          </button>
        </div>
        <p className="text-center text-gray-600 text-xs mb-8">Press Enter ↵ to search</p>

        {/* Lottie Loading Overlay */}
        {loading && (
          <div className="mb-8 flex flex-col items-center justify-center py-8">
            <div className="w-48 h-48">
              <DotLottieReact
                src={LOTTIE_LOADING_URL}
                loop
                autoplay
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <p className="text-blue-400 font-semibold text-lg mt-2 animate-pulse">Generating project ideas...</p>
            <p className="text-gray-500 text-sm mt-1">Our AI is researching the best topics for you</p>
          </div>
        )}

        {error && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:border-blue-500/30 group animate-scale-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">{idea.domain}</span>
                <span className={`text-[10px] px-2 py-1 rounded-full font-bold uppercase ${
                  idea.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                  idea.difficulty === 'Medium' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {idea.difficulty}
                </span>
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-blue-300 transition-colors">{idea.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">{idea.description}</p>
              <a href="#contact" className="inline-flex items-center gap-1 text-blue-400 font-bold text-sm hover:text-blue-300 transition-colors">
                Discuss this project 
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>

        {!ideas.length && !loading && !error && (
          <div className="text-center py-16 text-gray-500 border-2 border-dashed border-white/5 rounded-3xl">
            <Zap className="w-10 h-10 mx-auto mb-4 text-gray-600" />
            <p className="font-medium text-gray-400">Your custom project ideas will appear here</p>
            <p className="text-sm text-gray-600 mt-1">Try clicking a suggested topic above!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIAssistant;
