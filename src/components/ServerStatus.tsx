import React, { useEffect, useState } from 'react';
import { Server, Users, Activity, ArrowLeft, RefreshCw, Signal, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface ServerStatusData {
  online: boolean;
  players: {
    online: number;
    max: number;
  } | null;
}

export default function ServerStatus() {
  const [serverStatus, setServerStatus] = useState<ServerStatusData>({
    online: false,
    players: null
  });
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const fetchServerStatus = async () => {
    try {
      setIsRefreshing(true);
      const response = await axios.get('https://api.mcstatus.io/v2/status/java/saw-cet.gl.joinmc.link:25565');
      setServerStatus({
        online: response.data.online,
        players: response.data.players ? {
          online: response.data.players.online,
          max: response.data.players.max
        } : null
      });
      setLastUpdated(new Date());
    } catch (error) {
      setServerStatus({
        online: false,
        players: null
      });
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const formatLastUpdated = (date: Date) => {
    return date.toLocaleTimeString('ar-SA', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
      <div className="container mx-auto px-4 py-8 relative">
        <Link 
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-5 h-5 ml-2" />
          <span>العودة للرئيسية</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              حالة السيرفر
              <Server className="inline-block w-8 h-8 mr-3 text-[#fbbf24]" />
            </h1>
            <p className="text-gray-400">مراقبة حالة السيرفر في الوقت الفعلي</p>
          </div>

          <div className="bg-gradient-to-br from-[#6b21a8] to-[#4a148c] rounded-2xl shadow-2xl overflow-hidden mb-8">
            <div className="p-6 md:p-8">
              {loading ? (
                <div className="flex items-center justify-center h-48">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#fbbf24] border-t-transparent"></div>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-4">
                      <div className={`w-4 h-4 rounded-full ${serverStatus.online ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                      <span className="text-2xl font-bold text-white">
                        {serverStatus.online ? 'السيرفر يعمل' : 'السيرفر متوقف'}
                      </span>
                    </div>
                    <button
                      onClick={fetchServerStatus}
                      disabled={isRefreshing}
                      className="bg-[#fbbf24] hover:bg-[#f59e0b] text-black font-bold py-2 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 flex items-center"
                    >
                      <RefreshCw className={`w-5 h-5 ml-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                      تحديث
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-black/20 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <Users className="w-6 h-6 text-[#fbbf24] ml-3" />
                        <h3 className="text-white text-lg font-semibold">اللاعبين المتصلين</h3>
                      </div>
                      <p className="text-3xl font-bold text-[#fbbf24]">
                        {serverStatus.online && serverStatus.players
                          ? `${serverStatus.players.online}/${serverStatus.players.max}`
                          : '-'}
                      </p>
                    </div>

                    <div className="bg-black/20 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <Signal className="w-6 h-6 text-[#fbbf24] ml-3" />
                        <h3 className="text-white text-lg font-semibold">عنوان السيرفر</h3>
                      </div>
                      <p className="text-lg font-mono text-[#fbbf24] break-all">
                        saw-cet.gl.joinmc.link
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 text-center text-gray-400 text-sm flex items-center justify-center">
                    <Clock className="w-4 h-4 ml-2" />
                    آخر تحديث: {formatLastUpdated(lastUpdated)}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="bg-black/20 rounded-xl p-6 text-center">
            <Activity className="w-8 h-8 text-[#fbbf24] mx-auto mb-4" />
            <p className="text-gray-300">
              يتم تحديث حالة السيرفر تلقائياً كل 30 ثانية للحصول على أحدث المعلومات
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}