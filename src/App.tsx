import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Disc as Discord, Users, GamepadIcon, Trophy, MessageCircle, ArrowRight, Server, Download, Star, Clock, Gift } from 'lucide-react';
import ServerStatus from './components/ServerStatus';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Hero Section with Animated Background */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#6b21a8]/50 to-black/80">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmYmJmMjQiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItMiAyLTRzLTItMi0yLTQgMi0yIDItNCAyLTIgMi00LTItMi0yLTQgMi0yIDItNGgtMmMwIDItMiAyLTIgNHMyIDIgMiA0LTIgMi0yIDQtMiAyLTIgNCAyIDIgMiA0LTIgMi0yIDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] animate-pulse"></div>
          </div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <img 
              src="https://drive.google.com/uc?export=view&id=1QzQbhjMQQVuSfETiWQKemrm9tykjZvqU" 
              alt="1ST Season 2" 
              className="w-64 h-64 mx-auto drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]"
            />
          </div>
          <h1 className="text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="text-[#fbbf24] drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">1ST</span> Season 2
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            انضم إلى الموسم الثاني من مجتمعنا على Discord واستمتع بتجربة جيمنج فريدة مع لاعبين متحمسين
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://discord.gg/A2kJahPsbH" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg transform hover:scale-105 hover:shadow-[0_0_15px_rgba(88,101,242,0.5)]"
            >
              <Discord className="w-6 h-6 mr-2" />
              انضم إلينا على Discord
            </a>
            <a 
              href="/server-status" 
              className="inline-flex items-center bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg transform hover:scale-105 hover:shadow-[0_0_15px_rgba(251,191,36,0.5)]"
            >
              <Server className="w-6 h-6 mr-2" />
              حالة السيرفر
            </a>
          </div>
        </div>
      </div>

      {/* Server Info Section with Floating Elements */}
      <div className="py-16 bg-[#0f0f0f] relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM2YjIxYTgiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItMiAyLTRzLTItMi0yLTQgMi0yIDItNCAyLTIgMi00LTItMi0yLTQgMi0yIDItNGgtMmMwIDItMiAyLTIgNHMyIDIgMiA0LTIgMi0yIDQtMiAyLTIgNCAyIDIgMiA0LTIgMi0yIDR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="bg-gradient-to-br from-[#6b21a8] to-[#4a148c] p-8 rounded-xl text-center max-w-2xl mx-auto transform hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(107,33,168,0.3)]">
            <Server className="w-16 h-16 text-[#fbbf24] mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold text-white mb-4">معلومات السيرفر</h2>
            <div className="space-y-6">
              <div className="bg-black/20 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                <p className="text-gray-300 mb-2">إصدار ماينكرافت</p>
                <p className="text-[#fbbf24] font-bold text-xl">1.16.4</p>
              </div>
              <div className="bg-black/20 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300">
                <p className="text-gray-300 mb-2">عنوان السيرفر</p>
                <p className="text-[#fbbf24] font-bold text-xl font-mono">172.22.37.68</p>
              </div>
              <div className="pt-4">
                <a 
                  href="https://drive.google.com/file/d/1Bo5iQHMuPvRdwy60_EnWgmeFrekELj5O/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(251,191,36,0.5)]"
                >
                  <Download className="w-5 h-5 mr-2" />
                  تحميل المودات المطلوبة
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Season 2 Features with Hover Effects */}
      <div id="features" className="py-20 bg-[#1a1a1a] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6b21a8]/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            <span className="relative">
              مميزات الموسم الثاني
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#fbbf24]"></span>
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group bg-gradient-to-br from-[#6b21a8] to-[#4a148c] p-8 rounded-xl text-center hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(107,33,168,0.5)]">
              <Users className="w-16 h-16 text-[#fbbf24] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-4">مجتمع متطور</h3>
              <p className="text-gray-200">تجربة جديدة مع تحديثات وميزات حصرية للموسم الثاني</p>
            </div>
            <div className="group bg-gradient-to-br from-[#6b21a8] to-[#4a148c] p-8 rounded-xl text-center hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(107,33,168,0.5)]">
              <GamepadIcon className="w-16 h-16 text-[#fbbf24] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-4">بطولات جديدة</h3>
              <p className="text-gray-200">منافسات وتحديات أسبوعية مع جوائز أكبر</p>
            </div>
            <div className="group bg-gradient-to-br from-[#6b21a8] to-[#4a148c] p-8 rounded-xl text-center hover:transform hover:-translate-y-2 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(107,33,168,0.5)]">
              <Trophy className="w-16 h-16 text-[#fbbf24] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-white mb-4">مكافآت مميزة</h3>
              <p className="text-gray-200">نظام مكافآت جديد مع مزايا حصرية للموسم الثاني</p>
            </div>
          </div>
        </div>
      </div>

      {/* Season Stats with Animated Counters */}
      <div className="py-20 bg-[#0f0f0f] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#6b21a8]/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-black/20 rounded-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-[#fbbf24] mb-2 flex items-center justify-center">
                <Users className="w-8 h-8 mr-2" />
                10+
              </div>
              <div className="text-gray-300 text-lg">عضو في الموسم الثاني</div>
            </div>
            <div className="p-6 bg-black/20 rounded-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-[#fbbf24] mb-2 flex items-center justify-center">
                <Trophy className="w-8 h-8 mr-2" />
                10+
              </div>
              <div className="text-gray-300 text-lg">بطولة وفعالية</div>
            </div>
            <div className="p-6 bg-black/20 rounded-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-[#fbbf24] mb-2 flex items-center justify-center">
                <Clock className="w-8 h-8 mr-2" />
                12/7
              </div>
              <div className="text-gray-300 text-lg">دعم ونشاط مستمر</div>
            </div>
          </div>
        </div>
      </div>

      {/* Join Season 2 with Enhanced Call-to-Action */}
      <div className="py-20 bg-gradient-to-t from-[#6b21a8]/30 to-[#1a1a1a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            <span className="relative inline-block">
              انضم إلى الموسم الثاني الآن
              <Star className="absolute -top-6 -right-6 w-5 h-5 text-[#fbbf24] animate-pulse" />
            </span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://discord.gg/A2kJahPsbH"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(251,191,36,0.5)]"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              تواصل معنا
            </a>
            <a 
              href="#features" 
              className="inline-flex items-center bg-[#6b21a8] hover:bg-[#4a148c] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_rgba(107,33,168,0.5)]"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              المزيد عن الموسم الثاني
            </a>
          </div>
        </div>
      </div>

      {/* Footer with Enhanced Design and Credits */}
      <footer className="bg-[#0a0a0a] text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center space-y-2">
          <p className="flex items-center justify-center">
            <Gift className="w-4 h-4 mr-2 text-[#fbbf24]" />
            جميع الحقوق محفوظة © {new Date().getFullYear()} 1ST Season 2
          </p>
          <p className="text-sm">
            تم التطوير بواسطة{' '}
            <span className="text-[#fbbf24]">يوسف علي عبد السلام</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/server-status" element={<ServerStatus />} />
    </Routes>
  );
}

export default App;