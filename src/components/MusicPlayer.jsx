import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Music } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const audioRef = useRef(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    // Autoplay policy: Browser memblokir audio otomatis tanpa interaksi.
    // Kita aktifkan otomatis saat pengunjung pertama kali mengklik layar.
    const startAudioOnFirstClick = () => {
      if (!hasStartedRef.current && audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            hasStartedRef.current = true;
          })
          .catch((err) => {
            console.log("Autoplay waiting for direct user action:", err);
          });
      }
    };

    window.addEventListener("click", startAudioOnFirstClick, { once: true });
    window.addEventListener("touchstart", startAudioOnFirstClick, { once: true });

    return () => {
      window.removeEventListener("click", startAudioOnFirstClick);
      window.removeEventListener("touchstart", startAudioOnFirstClick);
    };
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          hasStartedRef.current = true;
        })
        .catch((err) => {
          console.error("Audio playback error:", err);
        });
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <aside aria-label="Music Player" className="fixed bottom-5 left-5 z-50">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src="/AboutYou.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => {
          console.log("Menunggu file AboutYou.mp3 diletakkan di folder public.");
        }}
      />

      <div
        className="group relative flex items-center gap-3 p-2.5 rounded-2xl bg-[#030014]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-purple-500/30 transition-all duration-300"
      >
        {/* Glow ambient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl blur-sm -z-10" />

        {/* Vinyl / Album Art */}
        <div
          onClick={togglePlay}
          className="relative w-11 h-11 rounded-full cursor-pointer overflow-hidden border-2 border-white/20 shadow-md flex-shrink-0 group-hover:scale-105 transition-transform"
        >
          <img
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=150&q=80"
            alt="The 1975 - About You"
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              isPlaying ? "animate-[spin_4s_linear_infinite]" : ""
            }`}
          />
          {/* Vinyl Center Hole */}
          <div className="absolute inset-0 m-auto w-3 h-3 rounded-full bg-[#030014] border border-white/40" />

          {/* Hover Play/Pause Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            {isPlaying ? (
              <Pause className="w-4 h-4 text-white" />
            ) : (
              <Play className="w-4 h-4 text-white ml-0.5" />
            )}
          </div>
        </div>

        {/* Track Details */}
        <div className="flex flex-col min-w-0 pr-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-white tracking-wide truncate max-w-[120px] sm:max-w-[150px]">
              About You
            </span>
            {/* Animated Equalizer Bars */}
            <div className="flex items-end gap-0.5 h-3">
              <span
                className={`w-0.5 bg-purple-400 rounded-full transition-all duration-300 ${
                  isPlaying ? "animate-[bounce_0.6s_infinite_0.1s] h-3" : "h-1"
                }`}
              />
              <span
                className={`w-0.5 bg-indigo-400 rounded-full transition-all duration-300 ${
                  isPlaying ? "animate-[bounce_0.6s_infinite_0.3s] h-3.5" : "h-1.5"
                }`}
              />
              <span
                className={`w-0.5 bg-pink-400 rounded-full transition-all duration-300 ${
                  isPlaying ? "animate-[bounce_0.6s_infinite_0.2s] h-2.5" : "h-1"
                }`}
              />
            </div>
          </div>
          <span className="text-[10px] text-gray-400 font-medium truncate max-w-[120px] sm:max-w-[150px]">
            The 1975
          </span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 pl-1 border-l border-white/10">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause music" : "Play music"}
            className="p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-purple-400" />
            ) : (
              <Play className="w-4 h-4 text-white" />
            )}
          </button>

          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute music" : "Mute music"}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors hidden sm:block"
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-red-400" />
            ) : (
              <Volume2 className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>
    </aside>
  );
}
