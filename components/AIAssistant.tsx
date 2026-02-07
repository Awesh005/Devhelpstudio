
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import { Brain, Send, Loader2, Sparkles, AlertCircle } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [interest, setInterest] = useState('');
  const [loading, setLoading] = useState(false);
  const [ideas, setIdeas] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const generateIdeas = async () => {
    if (!interest.trim()) return;
    
    setLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `I am interested in ${interest}. Give me 3 unique and trending Final Year Project ideas for computer science/IT students. Include title, domain, difficulty (Easy/Medium/Hard), and a short description. Format the output as a JSON array of objects.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                domain: { type: Type.STRING },
                difficulty: { type: Type.STRING },
                description: { type: Type.STRING }
              },
              required: ["title", "domain", "difficulty", "description"]
            }
          }
        }
      });

      const data = JSON.parse(response.text);
      setIdeas(data);
    } catch (err) {
      console.error(err);
      setError("Unable to connect to AI consultant. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-consultant" className="py-24 bg-gray-900 text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>AI Project Consultant</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Get Project Ideas in Seconds</h2>
          <p className="text-gray-400 text-lg">
            Tell our AI what you're interested in, and we'll suggest custom final year project topics tailored for you.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 p-2 rounded-2xl flex flex-col md:flex-row gap-2 mb-12 backdrop-blur-sm">
          <input 
            type="text" 
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            placeholder="e.g., Python, Healthcare, Blockchain, Cyber Security..."
            className="flex-grow bg-transparent px-6 py-4 outline-none text-lg text-white placeholder:text-gray-500"
            onKeyPress={(e) => e.key === 'Enter' && generateIdeas()}
          />
          <button 
            onClick={generateIdeas}
            disabled={loading || !interest.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Brain className="w-5 h-5" />}
            Consult AI
          </button>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400">
            <AlertCircle className="w-5 h-5" />
            <p>{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">{idea.domain}</span>
                <span className={`text-[10px] px-2 py-1 rounded font-bold uppercase ${
                  idea.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                  idea.difficulty === 'Medium' ? 'bg-amber-500/20 text-amber-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {idea.difficulty}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{idea.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">{idea.description}</p>
              <a href="#contact" className="text-blue-400 font-bold text-sm hover:underline">Discuss this project →</a>
            </div>
          ))}
        </div>

        {!ideas.length && !loading && !error && (
          <div className="text-center py-12 text-gray-500 border-2 border-dashed border-white/5 rounded-3xl">
             Your custom project ideas will appear here
          </div>
        )}
      </div>
    </section>
  );
};

export default AIAssistant;
