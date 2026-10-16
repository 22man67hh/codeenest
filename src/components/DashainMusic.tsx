import React, { useState, useRef, useEffect, useCallback } from 'react';
import { VolumeX, Volume2, Music } from 'lucide-react';

interface DashainMusicProps {
  /** Path to your real Sarangi recording in /public */
  src?: string;
  defaultVolume?: number;
}

export const DashainMusic: React.FC<DashainMusicProps> = ({
  src = '/audio/malashree.mp3',
  defaultVolume = 0.65,
}) => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(defaultVolume);
  const [showPlayer, setShowPlayer] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio element once
  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = true;
    audio.preload = 'metadata';
    audio.volume = volume;

    const handleCanPlay = () => setIsLoaded(true);
    const handleEnded = () => setPlaying(false);

    audio.addEventListener('canplaythrough', handleCanPlay);
    audio.addEventListener('ended', handleEnded);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener('canplaythrough', handleCanPlay);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, [src]);

  // Sync volume slider
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Toggle playback safely handling modern browser async play() promises
  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        console.warn('Playback blocked by browser policy:', err);
      }
    }
  }, [playing]);

  return (
    <div className="fixed bottom-24 left-4 sm:left-6 z-40 flex flex-col items-start gap-2">
      {/* Volume & control popover */}
      {showPlayer && (
        <div className="bg-[#0b132b]/95 backdrop-blur-xl border border-[#c4900a]/50 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.6),0_0_20px_rgba(196,144,10,0.3)] w-60 animate-in slide-in-from-bottom duration-200">
          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#c4900a]/30">
            <span className="text-xl">🪕</span>
            <div>
              <div className="text-xs font-bold text-[#f5c542] leading-tight">Malashree Dhun</div>
              <div className="text-[10px] text-[#c4900a]">Dashain 2083 — शुभ दशैं!</div>
            </div>
          </div>

          {/* Status readout */}
          <div className="flex items-center gap-2 mb-3">
            <div
              className={`w-2 h-2 rounded-full ${
                playing ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'
              }`}
            />
            <span className="text-[11px] text-slate-300 font-medium">
              {playing ? 'Playing Sarangi Dhun...' : 'Press play to listen'}
            </span>
          </div>

          {/* Volume control */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px] text-slate-400">
              <span>Master Volume</span>
              <span className="text-[#f5c542] font-semibold">{Math.round(volume * 100)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full h-1.5 rounded-lg appearance-none cursor-pointer bg-slate-700"
              style={{ accentColor: '#f5c542' }}
            />
          </div>

          <div className="mt-3 text-[10px] text-slate-400 italic text-center">
            Authentic Sarangi & Madal Dhun
          </div>
        </div>
      )}

      {/* Main floating action button */}
      <button
        onClick={() => {
          if (!showPlayer) {
            setShowPlayer(true);
            togglePlay();
          } else {
            togglePlay();
          }
        }}
        onMouseEnter={() => setShowPlayer(true)}
        className="relative group w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(0,0,0,0.5),0_0_20px_rgba(196,144,10,0.4)] transition-all duration-300 hover:scale-110 cursor-pointer overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #8b1a1a 0%, #c4900a 50%, #f5c542 100%)',
        }}
        title="Toggle Malashree Music"
      >
        {playing && (
          <span
            className="absolute -inset-1 rounded-full opacity-40 animate-ping"
            style={{ background: 'radial-gradient(circle, #f5c542 0%, transparent 70%)' }}
          />
        )}

        {/* Dashain Tika accent */}
        <span className="absolute top-1.5 left-1/2 -translate-x-1/2 text-[10px]">🔴</span>

        {playing ? (
          <VolumeX className="w-5 h-5 text-white relative z-10 mt-1" />
        ) : (
          <Volume2 className="w-5 h-5 text-white relative z-10 mt-1" />
        )}
      </button>
    </div>
  );
};