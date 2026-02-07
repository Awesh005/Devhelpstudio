
import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send an email or store in a DB
  };

  return (
    <section id="contact" className="py-24 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 bg-gray-50">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Ready to Ace Your Project?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Don't wait until the last week! Our slots fill up fast. Email us directly or fill the form for a quick callback and consultation.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email us</h4>
                  <a href="mailto:devhelpstudio.team@gmail.com" className="text-blue-600 hover:underline">
                    devhelpstudio.team@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                <p className="text-blue-700 font-semibold mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Limited Slots Available
                </p>
                <p className="text-blue-600 text-sm">
                  We are currently accepting students for the Summer/Final Semester projects. First come, first serve!
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all" placeholder="Your contact number" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Target Domain</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all">
                    <option>Website Development</option>
                    <option>AI / Machine Learning</option>
                    <option>Automation / Chatbots</option>
                    <option>Management Systems</option>
                    <option>Detection / Security</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all" placeholder="Any specific requirements?"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 shadow-xl transition-all flex items-center justify-center gap-2">
                  Send Inquiry
                  <Send className="w-5 h-5" />
                </button>
              </form>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Inquiry Received!</h3>
                <p className="text-gray-600 text-lg mb-8">
                  Our team will contact you within 24 hours to discuss your project. Check your email/phone soon!
                </p>
                <button onClick={() => setSubmitted(false)} className="text-blue-600 font-bold hover:underline">
                  Send another inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
