"use client";

import React, { useState, useRef, useEffect } from "react";
import * as motion from "framer-motion/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faForward, faBackward, faShuffle, faDownload, faMusic, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

const songs = [
    {
        title: "Buhay Ang Sira",
        artist: "Papa's Theme",
        src: "/songs/Buhay Ang Sira.mp3",
        cover: "/logo.png" // Using logo as fallback cover
    },
    {
        title: "Sirang Gadget",
        artist: "Papa's Theme",
        src: "/songs/Sirang Gadget.mp3",
        cover: "/logo.png"
    },
    {
        title: "Hinayang",
        artist: "Papa's Theme",
        src: "/songs/Hinayang.mp3",
        cover: "/logo.png"
    },
    {
        title: "Zap Boy",
        artist: "Papa's Theme",
        src: "/songs/Zap Boy.mp3",
        cover: "/logo.png"
    },
    {
        title: "Hot Damm",
        artist: "Papa's Theme",
        src: "/songs/Hot Damm.mp3",
        cover: "/logo.png"
    },
    {
        title: "Bitin (Short Version)",
        artist: "Papa's Theme",
        src: "/songs/Bitin (Short Version).mp3",
        cover: "/logo.png"
    }
];

const visualizerColors = [
    "bg-yellow-500", "bg-blue-500", "bg-red-500", "bg-green-500", "bg-purple-500",
    "bg-pink-500", "bg-orange-500", "bg-cyan-500"
];

function AudioVisualizer({ isPlaying }: { isPlaying: boolean }) {
    return (
        <div className="flex justify-center items-end h-10 sm:h-16 gap-1 w-full max-w-[200px] mx-auto absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 opacity-60 pointer-events-none z-0">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className={`w-1.5 rounded-t-sm transition-all duration-75 ${visualizerColors[i % visualizerColors.length]}`}
                    style={{
                        height: isPlaying ? `${Math.max(20, ((i * 33) % 100))}%` : "10%",
                        animation: isPlaying ? `bounce ${0.6 + ((i * 0.1) % 0.4)}s infinite alternate` : "none",
                        animationDelay: `-${(i * 0.2) % 1}s`,
                        opacity: 0.8
                    }}
                ></div>
            ))}
        </div>
    );
}

function Sparkles({ isPlaying }: { isPlaying: boolean }) {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className={isPlaying ? "animate-pulse" : ""}>
                <FontAwesomeIcon icon={faMusic} className={`absolute text-yellow-500/40 text-4xl float-animation ${isPlaying ? "duration-[2s]" : "duration-[6s]"}`} style={{ top: "10%", left: "5%", animationDelay: "0s" }} />
                <FontAwesomeIcon icon={faMusic} className={`absolute text-blue-500/40 text-3xl float-animation ${isPlaying ? "duration-[3s]" : "duration-[7s]"}`} style={{ top: "20%", right: "10%", animationDelay: "1s" }} />
                <FontAwesomeIcon icon={faMusic} className={`absolute text-red-500/40 text-2xl float-animation ${isPlaying ? "duration-[2.5s]" : "duration-[5s]"}`} style={{ bottom: "15%", left: "15%", animationDelay: "2s" }} />
                <FontAwesomeIcon icon={faMusic} className={`absolute text-green-500/40 text-5xl float-animation ${isPlaying ? "duration-[4s]" : "duration-[8s]"}`} style={{ bottom: "25%", right: "20%", animationDelay: "0.5s" }} />
                <FontAwesomeIcon icon={faMusic} className={`absolute text-purple-500/40 text-3xl float-animation ${isPlaying ? "duration-[3.5s]" : "duration-[6.5s]"}`} style={{ top: "40%", left: "40%", animationDelay: "3s" }} />
                <FontAwesomeIcon icon={faMusic} className={`absolute text-pink-500/40 text-2xl float-animation ${isPlaying ? "duration-[2s]" : "duration-[5.5s]"}`} style={{ top: "60%", right: "35%", animationDelay: "1.5s" }} />
            </div>

            {isPlaying && (
                <>
                    <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-80"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-60 animation-delay-700"></div>
                    <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-50 animation-delay-1200"></div>
                    <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-70 animation-delay-2000"></div>
                </>
            )}
        </div>
    );
}

export default function MusicPlayer() {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);
    const [autoPlay, setAutoPlay] = useState(false); // Default to false as requested
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    const currentSong = songs[currentSongIndex];

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(e => console.log("Playback failed", e));
            } else {
                audioRef.current.pause();
            }
        }
    }, [currentSongIndex, isPlaying]);

    // Handle song selection from playlist
    const handleSongSelect = (index: number) => {
        setCurrentSongIndex(index);
        if (autoPlay) {
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    };

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };

    const nextSong = () => {
        if (isShuffle) {
            const randomIndex = Math.floor(Math.random() * songs.length);
            setCurrentSongIndex(randomIndex);
        } else {
            setCurrentSongIndex((prev) => (prev + 1) % songs.length);
        }
    };

    const prevSong = () => {
        setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    };
    const [downloadModal, setDownloadModal] = useState<{ isOpen: boolean, song: typeof songs[0] | null }>({ isOpen: false, song: null });

    // ... (previous effects)

    const handleDownloadClick = (e: React.MouseEvent, song: typeof songs[0]) => {
        e.preventDefault();
        setDownloadModal({ isOpen: true, song });
    };

    const confirmDownload = async () => {
        if (downloadModal.song) {
            try {
                // Fetch the file as a blob to force the filename
                const response = await fetch(downloadModal.song.src);
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);

                const link = document.createElement("a");
                link.href = url;
                link.download = `${downloadModal.song.title} - [Papa's Theme Song].mp3`;
                document.body.appendChild(link);
                link.click();

                // Cleanup
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            } catch (error) {
                console.error("Download failed:", error);
                // Fallback to simple link method if fetch fails
                const link = document.createElement("a");
                link.href = downloadModal.song.src;
                link.download = `${downloadModal.song.title} - [Papa's Theme Song].mp3`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
        setDownloadModal({ isOpen: false, song: null });
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const current = audioRef.current.currentTime;
            const duration = audioRef.current.duration;
            if (!Number.isFinite(duration) || duration <= 0) {
                setProgress(0);
                return;
            }
            const safeProgress = Math.max(0, Math.min(100, (current / duration) * 100));
            setProgress(safeProgress);
        }
    };

    const handleEnded = () => {
        nextSong();
    };

    // CSS for the spinning animation and custom scrollbar
    const customStyles = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0; }
      50% { transform: translateY(-20px) rotate(10deg); opacity: 1; }
    }
    .spin-animation {
      animation: spin 4s linear infinite;
    }
    .float-animation {
       animation: float 3s ease-in-out infinite;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(234, 179, 8, 0.5);
    }
  `;

    return (
        <main className="min-h-screen text-white font-sans relative overflow-hidden flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8 gap-8 selection:bg-yellow-500/30">
            <style>{customStyles}</style>
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-yellow-500/10 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-blue-600/10 rounded-full blur-[40px] sm:blur-[80px] pointer-events-none"></div>
            <Sparkles isPlaying={isPlaying} />

            {/* Back Button - Compact on Mobile */}
            <Link href="/" className="glass-focus glass-surface glass-surface-soft glass-pill absolute top-4 left-4 lg:top-8 lg:left-8 text-gray-300 hover:text-white transition flex items-center gap-2 z-20 font-bold px-3 py-1.5 sm:px-4 sm:py-2 cursor-pointer text-sm sm:text-base">
                <FontAwesomeIcon icon={faArrowLeft} /> <span className="hidden sm:inline">Back to Home</span>
            </Link>

            {/* Left Column: Player (Centered on Mobile) */}
            <motion.div
                className="w-full max-w-md relative z-10 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 lg:mb-10 font-display text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 drop-shadow-sm select-none">
                    Papa&apos;s Theme Songs
                </h1>
                <div className="glass-surface glass-surface-mid rounded-[2rem] p-6 pb-8 sm:p-10 w-full relative overflow-hidden">
                    {/* Visualizer Background */}
                    <div className="absolute inset-x-0 bottom-0 pointer-events-none h-32 bg-gradient-to-t from-black/50 to-transparent z-0"></div>
                    <AudioVisualizer isPlaying={isPlaying} />

                    {/* Album Art - Smaller on Mobile */}
                    <div className="relative w-44 h-44 sm:w-64 sm:h-64 mx-auto rounded-full overflow-hidden mb-8 shadow-2xl border-4 border-white/5 group bg-black/50 z-10">
                        <div className="absolute inset-0 bg-yellow-500/5 animate-pulse z-0"></div>
                        {/* Spinning Album Art */}
                        <div
                            className="relative w-full h-full spin-animation"
                            style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
                        >
                            <Image
                                src={currentSong.cover}
                                alt="Album Art"
                                fill
                                className="object-cover p-1 pointer-events-none"
                            />
                            {/* Central Donut Hole */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 sm:w-6 h-4 sm:h-6 bg-black/80 rounded-full border border-white/10 z-10"></div>
                        </div>
                    </div>

                    <div className="text-center mb-6 z-10 relative">
                        <h2 className="text-xl sm:text-2xl font-bold mb-1 truncate text-white select-text">{currentSong.title}</h2>
                        <p className="text-gray-400 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium select-none">{currentSong.artist}</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="group w-full h-1.5 bg-gray-800/80 rounded-full mb-8 overflow-hidden cursor-pointer relative z-10" onClick={(e) => {
                        const bounds = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - bounds.left;
                        const width = bounds.width;
                        const percent = Math.max(0, Math.min(1, x / width));
                        if (audioRef.current) {
                            const duration = audioRef.current.duration;
                            if (!Number.isFinite(duration) || duration <= 0) {
                                return;
                            }
                            audioRef.current.currentTime = percent * duration;
                            setProgress(percent * 100);
                        }
                    }}>
                        <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full transition-all duration-100 relative" style={{ width: `${progress}%` }}>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-between gap-4 z-10 relative">
                        <button
                            onClick={() => setIsShuffle(!isShuffle)}
                            className={`glass-focus p-2 rounded-full transition-colors cursor-pointer ${isShuffle ? 'text-yellow-500 bg-yellow-500/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                            title="Shuffle"
                        >
                            <FontAwesomeIcon icon={faShuffle} className="text-base sm:text-lg" />
                        </button>

                        <div className="flex items-center gap-4 sm:gap-6">
                            <button onClick={prevSong} className="glass-focus p-2 text-xl sm:text-2xl text-gray-300 hover:text-white transition transform hover:-translate-x-1 cursor-pointer">
                                <FontAwesomeIcon icon={faBackward} />
                            </button>

                            <button
                                onClick={togglePlay}
                                className="glass-focus w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-black text-xl sm:text-2xl shadow-lg hover:scale-105 transition-transform cursor-pointer"
                            >
                                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="ml-1" />
                            </button>

                            <button onClick={nextSong} className="glass-focus p-2 text-xl sm:text-2xl text-gray-300 hover:text-white transition transform hover:translate-x-1 cursor-pointer">
                                <FontAwesomeIcon icon={faForward} />
                            </button>
                        </div>

                        <button
                            onClick={(e) => handleDownloadClick(e, currentSong)}
                            className="glass-focus p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                            title="Download Song"
                        >
                            <FontAwesomeIcon icon={faDownload} className="text-base sm:text-lg" />
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Right Column: Playlist (Scrollable list below on mobile) */}
            <motion.div
                className="w-full max-w-md h-full flex flex-col"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="flex items-center justify-between mb-4 px-2">
                    <h3 className="text-sm font-bold text-gray-400 tracking-wide flex items-center gap-2 select-none uppercase">
                        <span className="w-1 h-4 bg-yellow-500 rounded-full"></span>
                        Queue
                    </h3>

                    {/* Autoplay Toggle */}
                    <button
                        onClick={() => setAutoPlay(!autoPlay)}
                        className={`glass-focus flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full transition-all border ${autoPlay ? 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50' : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10'}`}
                    >
                        <div className={`w-2 h-2 rounded-full ${autoPlay ? 'bg-yellow-500 animate-pulse' : 'bg-gray-500'}`}></div>
                        Autoplay: {autoPlay ? 'ON' : 'OFF'}
                    </button>
                </div>

                <div className="glass-surface glass-surface-soft rounded-2xl p-2 overflow-y-auto custom-scrollbar flex-1 max-h-[300px] lg:max-h-[500px]">
                    <div className="space-y-1">
                        {songs.map((song, index) => (
                            <div
                                key={index}
                                onClick={() => handleSongSelect(index)}
                                className={`glass-focus p-3 rounded-lg flex items-center gap-3 cursor-pointer transition-all duration-300 group ${currentSongIndex === index ? 'bg-white/10 border border-yellow-500/30 shadow-md' : 'hover:bg-white/5 border border-transparent'}`}
                            >
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${currentSongIndex === index ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-gray-500 group-hover:text-gray-300'}`}>
                                    {currentSongIndex === index && isPlaying ? (
                                        <div className="flex gap-0.5 h-3 items-end">
                                            <div className="w-0.5 bg-black animate-[bounce_0.8s_infinite] h-full rounded-full"></div>
                                            <div className="w-0.5 bg-black animate-[bounce_1.2s_infinite] h-2/3 rounded-full"></div>
                                            <div className="w-0.5 bg-black animate-[bounce_0.6s_infinite] h-1/2 rounded-full"></div>
                                        </div>
                                    ) : (
                                        <FontAwesomeIcon icon={faMusic} className="text-sm" />
                                    )}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h4 className={`font-bold truncate text-sm mb-0.5 ${currentSongIndex === index ? 'text-yellow-400' : 'text-gray-200 group-hover:text-white'}`}>{song.title}</h4>
                                    <p className="text-[10px] uppercase font-bold text-gray-600 truncate group-hover:text-gray-500">{song.artist}</p>
                                </div>

                                {currentSongIndex === index && (
                                    <div className="text-yellow-500 text-[10px] font-bold px-1.5 py-0.5 bg-yellow-500/10 rounded">
                                        PLAYING
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Download Modal */}
            {downloadModal.isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        className="glass-surface glass-surface-strong rounded-3xl p-8 max-w-sm w-full text-center relative overflow-hidden"
                    >
                        {/* Decorative Sparkles/Notes */}
                        <div className="absolute inset-0 pointer-events-none">
                            <FontAwesomeIcon icon={faMusic} className="absolute text-yellow-500/40 text-xl float-animation" style={{ top: '20%', left: '15%', animationDelay: '0s' }} />
                            <FontAwesomeIcon icon={faMusic} className="absolute text-yellow-500/30 text-lg float-animation" style={{ top: '40%', right: '15%', animationDelay: '1s' }} />
                            <FontAwesomeIcon icon={faMusic} className="absolute text-yellow-500/20 text-sm float-animation" style={{ top: '70%', left: '25%', animationDelay: '0.5s' }} />
                            <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-50 animation-delay-500"></div>
                        </div>

                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-yellow-300"></div>

                        <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                            <FontAwesomeIcon icon={faDownload} className="text-yellow-500 text-2xl" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 font-display relative z-10">Downloading...</h3>
                        <p className="text-gray-400 mb-6 italic relative z-10">&quot;Let&apos;s jam in good vibes sa Papa&apos;s!&quot;</p>

                        <div className="flex gap-3 relative z-10">
                            <button
                                onClick={() => setDownloadModal({ isOpen: false, song: null })}
                                className="glass-focus flex-1 py-3 rounded-xl font-bold bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDownload}
                                className="glass-focus flex-1 py-3 rounded-xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:scale-105 transition-transform cursor-pointer"
                            >
                                Continue
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}

            <audio
                ref={audioRef}
                src={currentSong.src}
                preload="metadata"
                onLoadedMetadata={handleTimeUpdate}
                onDurationChange={handleTimeUpdate}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
            />
        </main>
    );
}
