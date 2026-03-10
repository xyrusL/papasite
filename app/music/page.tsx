"use client";

import { useEffect, useRef, useState } from "react";
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
    "bg-[var(--accent-copper-strong)]",
    "bg-[var(--accent-cyan-soft)]",
    "bg-[rgb(199_100_67_/_0.75)]",
    "bg-[rgb(87_191_210_/_0.75)]"
];

function AudioVisualizer({ isPlaying }: { isPlaying: boolean }) {
    return (
        <div className="absolute bottom-1.5 left-1/2 z-0 mx-auto flex h-8 w-full max-w-[160px] -translate-x-1/2 items-end justify-center gap-1 opacity-55 pointer-events-none min-[390px]:bottom-2 min-[390px]:h-10 min-[390px]:max-w-[200px] sm:bottom-4 sm:h-16">
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className={`w-1.5 rounded-t-sm transition-all duration-75 ${visualizerColors[i % visualizerColors.length]}`}
                    style={{
                        height: isPlaying ? `${Math.max(20, ((i * 33) % 100))}%` : "10%",
                        animationName: isPlaying ? "bounce" : "none",
                        animationDuration: `${0.6 + ((i * 0.1) % 0.4)}s`,
                        animationTimingFunction: "ease-in-out",
                        animationIterationCount: "infinite",
                        animationDirection: "alternate",
                        animationDelay: isPlaying ? `-${(i * 0.2) % 1}s` : "0s",
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
                <FontAwesomeIcon icon={faMusic} className={`absolute text-[rgb(199_100_67_/_0.34)] text-4xl float-animation ${isPlaying ? "duration-[2s]" : "duration-[6s]"}`} style={{ top: "10%", left: "5%", animationDelay: "0s" }} />
                <FontAwesomeIcon icon={faMusic} className={`absolute text-[rgb(87_191_210_/_0.34)] text-3xl float-animation ${isPlaying ? "duration-[3s]" : "duration-[7s]"}`} style={{ top: "20%", right: "10%", animationDelay: "1s" }} />
                <FontAwesomeIcon icon={faMusic} className={`absolute text-[rgb(224_125_87_/_0.26)] text-2xl float-animation ${isPlaying ? "duration-[2.5s]" : "duration-[5s]"}`} style={{ bottom: "15%", left: "15%", animationDelay: "2s" }} />
                <FontAwesomeIcon icon={faMusic} className={`absolute text-[rgb(87_191_210_/_0.22)] text-5xl float-animation ${isPlaying ? "duration-[4s]" : "duration-[8s]"}`} style={{ bottom: "25%", right: "20%", animationDelay: "0.5s" }} />
                <FontAwesomeIcon icon={faMusic} className={`absolute text-[rgb(199_100_67_/_0.18)] text-3xl float-animation ${isPlaying ? "duration-[3.5s]" : "duration-[6.5s]"}`} style={{ top: "40%", left: "40%", animationDelay: "3s" }} />
                <FontAwesomeIcon icon={faMusic} className={`absolute text-[rgb(87_191_210_/_0.18)] text-2xl float-animation ${isPlaying ? "duration-[2s]" : "duration-[5.5s]"}`} style={{ top: "60%", right: "35%", animationDelay: "1.5s" }} />
            </div>

            {isPlaying && (
                <>
                    <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-[var(--accent-copper-strong)] animate-ping opacity-80"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-60 animation-delay-700"></div>
                    <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-[var(--accent-cyan-soft)] animate-ping opacity-50 animation-delay-1200"></div>
                    <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-[rgb(199_100_67_/_0.85)] animate-ping opacity-70 animation-delay-2000"></div>
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

    return (
        <main className="music-shell min-h-screen relative overflow-hidden p-3 font-sans text-[var(--foreground)] min-[390px]:p-4 sm:p-6 lg:p-8 lg:pt-16">
            {/* Background Effects */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(199_100_67_/_0.1)] blur-[44px] min-[390px]:h-[300px] min-[390px]:w-[300px] min-[390px]:blur-[60px] sm:h-[600px] sm:w-[600px] sm:blur-[100px]"></div>
            <div className="pointer-events-none absolute right-0 top-0 h-[140px] w-[140px] rounded-full bg-[rgb(87_191_210_/_0.09)] blur-[28px] min-[390px]:h-[200px] min-[390px]:w-[200px] min-[390px]:blur-[40px] sm:h-[400px] sm:w-[400px] sm:blur-[80px]"></div>
            <Sparkles isPlaying={isPlaying} />

            <div className="relative z-10 max-w-6xl mx-auto w-full">
                {/* Top Header Row */}
                <div className="mb-5 grid grid-cols-1 gap-3 sm:mb-6 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-4 lg:mb-8">
                    <Link href="/" className="glass-focus button-secondary inline-flex self-start px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base">
                        <FontAwesomeIcon icon={faArrowLeft} /> <span className="hidden sm:inline">Back to Home</span>
                        <span className="sm:hidden">Back</span>
                    </Link>

                    <h1 className="music-header-title text-center font-display text-[1.65rem] font-bold leading-tight text-[var(--foreground)] select-none min-[390px]:text-3xl sm:text-4xl">
                        Papa&apos;s Theme Songs
                    </h1>

                    <div className="hidden sm:block w-[140px]"></div>
                </div>

                <div className="grid grid-cols-1 items-start gap-4 min-[390px]:gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(320px,410px)] lg:gap-8 xl:grid-cols-[minmax(0,1fr)_430px]">
                    {/* Left Column: Player */}
                    <motion.div
                        className="relative mx-auto flex w-full max-w-md flex-col lg:max-w-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="music-player-card music-glass-card glass-surface glass-surface-strong relative w-full overflow-hidden rounded-[1.5rem] p-4 pb-6 min-[390px]:p-5 min-[390px]:pb-7 sm:rounded-[2rem] sm:p-10 sm:pb-8">
                    {/* Visualizer Background */}
                    <div className="absolute inset-x-0 bottom-0 z-0 h-32 pointer-events-none bg-gradient-to-t from-black/50 to-transparent"></div>
                    <AudioVisualizer isPlaying={isPlaying} />

                    {/* Album Art - Smaller on Mobile */}
                    <div className="group relative z-10 mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-white/5 bg-black/50 shadow-2xl min-[390px]:mb-7 min-[390px]:h-40 min-[390px]:w-40 sm:mb-8 sm:h-64 sm:w-64">
                        <div className="absolute inset-0 z-0 animate-pulse bg-[rgb(199_100_67_/_0.06)]"></div>
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
                            <div className="absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/80 sm:h-6 sm:w-6"></div>
                        </div>
                    </div>

                    <div className="relative z-10 mb-5 text-center min-[390px]:mb-6">
                        <h2 className="mb-1 truncate text-lg font-bold text-[var(--foreground)] select-text min-[390px]:text-xl sm:text-2xl">{currentSong.title}</h2>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--foreground-muted)] select-none sm:text-sm">{currentSong.artist}</p>
                    </div>

                    {/* Progress Bar */}
                    <div className="group relative z-10 mb-6 h-1.5 w-full cursor-pointer overflow-hidden rounded-full bg-[rgb(255_255_255_/_0.08)] min-[390px]:mb-8" onClick={(e) => {
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
                        <div className="relative h-full rounded-full bg-gradient-to-r from-[var(--accent-copper)] to-[var(--accent-cyan)] transition-all duration-100" style={{ width: `${progress}%` }}>
                            <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white shadow-md opacity-0 transition-opacity group-hover:opacity-100"></div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="music-controls relative z-10 flex items-center justify-between gap-2 min-[390px]:gap-4">
                        <button
                            onClick={() => setIsShuffle(!isShuffle)}
                            className={`glass-focus cursor-pointer rounded-full p-2 transition-colors ${isShuffle ? 'bg-[rgb(199_100_67_/_0.12)] text-[var(--accent-copper-strong)]' : 'text-[var(--foreground-muted)] hover:bg-white/5 hover:text-[var(--foreground)]'}`}
                            title="Shuffle"
                        >
                            <FontAwesomeIcon icon={faShuffle} className="text-sm min-[390px]:text-base sm:text-lg" />
                        </button>

                        <div className="music-center-controls flex items-center gap-2.5 min-[390px]:gap-4 sm:gap-6">
                            <button onClick={prevSong} className="glass-focus cursor-pointer p-1.5 text-lg text-[var(--foreground-soft)] transition hover:-translate-x-1 hover:text-[var(--foreground)] min-[390px]:p-2 min-[390px]:text-xl sm:text-2xl">
                                <FontAwesomeIcon icon={faBackward} />
                            </button>

                            <button
                                onClick={togglePlay}
                                className="glass-focus flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-copper)] to-[var(--accent-copper-strong)] text-lg text-[#fff7f2] shadow-lg transition-transform hover:scale-105 min-[390px]:h-14 min-[390px]:w-14 min-[390px]:text-xl sm:h-16 sm:w-16 sm:text-2xl"
                            >
                                <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} className="ml-1" />
                            </button>

                            <button onClick={nextSong} className="glass-focus cursor-pointer p-1.5 text-lg text-[var(--foreground-soft)] transition hover:translate-x-1 hover:text-[var(--foreground)] min-[390px]:p-2 min-[390px]:text-xl sm:text-2xl">
                                <FontAwesomeIcon icon={faForward} />
                            </button>
                        </div>

                        <button
                            onClick={(e) => handleDownloadClick(e, currentSong)}
                            className="glass-focus cursor-pointer rounded-full p-2 text-[var(--foreground-muted)] transition-colors hover:bg-white/5 hover:text-[var(--foreground)]"
                            title="Download Song"
                        >
                            <FontAwesomeIcon icon={faDownload} className="text-sm min-[390px]:text-base sm:text-lg" />
                        </button>
                    </div>
                </div>
                    </motion.div>

                    {/* Right Column: Playlist */}
                    <motion.div
                        className="mx-auto flex h-auto w-full max-w-md flex-col lg:max-w-none"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="mb-3 flex flex-col items-start gap-3 px-1 min-[390px]:mb-4 min-[390px]:flex-row min-[390px]:items-center min-[390px]:justify-between min-[390px]:px-2">
                    <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[var(--foreground-muted)] select-none">
                        <span className="h-4 w-1 rounded-full bg-[var(--accent-copper-strong)]"></span>
                        Queue
                    </h3>

                    {/* Autoplay Toggle */}
                    <button
                        onClick={() => setAutoPlay(!autoPlay)}
                        className={`glass-focus flex min-h-10 items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold transition-all ${autoPlay ? 'border-[rgb(199_100_67_/_0.45)] bg-[rgb(199_100_67_/_0.16)] text-[var(--accent-copper-strong)]' : 'border-white/10 bg-white/5 text-[var(--foreground-muted)] hover:bg-white/10'}`}
                    >
                        <div className={`h-2 w-2 rounded-full ${autoPlay ? 'animate-pulse bg-[var(--accent-copper-strong)]' : 'bg-white/25'}`}></div>
                        Autoplay: {autoPlay ? 'ON' : 'OFF'}
                    </button>
                </div>

                <div className="music-queue-card music-glass-card glass-surface glass-surface-soft custom-scrollbar flex-1 overflow-y-auto rounded-[1.35rem] p-1.5 min-[390px]:rounded-2xl min-[390px]:p-2 max-h-[280px] min-[390px]:max-h-[300px] lg:max-h-[500px]">
                    <div className="space-y-1">
                        {songs.map((song, index) => (
                            <div
                                key={index}
                                onClick={() => handleSongSelect(index)}
                                className={`glass-focus group flex cursor-pointer items-center gap-2.5 rounded-lg border p-2.5 min-[390px]:gap-3 min-[390px]:p-3 transition-all duration-300 ${currentSongIndex === index ? 'border-[rgb(199_100_67_/_0.28)] bg-[rgb(255_255_255_/_0.08)] shadow-md' : 'border-transparent hover:bg-white/5'}`}
                            >
                                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors min-[390px]:h-10 min-[390px]:w-10 ${currentSongIndex === index ? 'bg-[var(--accent-copper-strong)] text-[#fff7f2]' : 'bg-[rgb(255_255_255_/_0.06)] text-white/35 group-hover:text-[var(--foreground-soft)]'}`}>
                                    {currentSongIndex === index && isPlaying ? (
                                        <div className="flex gap-0.5 h-3 items-end">
                                            <div className="h-full w-0.5 animate-[bounce_0.8s_infinite] rounded-full bg-[#fff7f2]"></div>
                                            <div className="h-2/3 w-0.5 animate-[bounce_1.2s_infinite] rounded-full bg-[#fff7f2]"></div>
                                            <div className="h-1/2 w-0.5 animate-[bounce_0.6s_infinite] rounded-full bg-[#fff7f2]"></div>
                                        </div>
                                    ) : (
                                        <FontAwesomeIcon icon={faMusic} className="text-sm" />
                                    )}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h4 className={`mb-0.5 truncate text-[13px] font-bold min-[390px]:text-sm ${currentSongIndex === index ? 'text-[var(--accent-copper-strong)]' : 'text-[var(--foreground-soft)] group-hover:text-[var(--foreground)]'}`}>{song.title}</h4>
                                    <p className="truncate text-[10px] font-bold uppercase text-white/30 group-hover:text-[var(--foreground-muted)]">{song.artist}</p>
                                </div>

                                {currentSongIndex === index && (
                                    <div className="hidden rounded bg-[rgb(199_100_67_/_0.14)] px-1.5 py-0.5 text-[10px] font-bold text-[var(--accent-copper-strong)] min-[390px]:block">
                                        PLAYING
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                    </motion.div>
                </div>
            </div>

            {/* Download Modal */}
            {downloadModal.isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        className="glass-surface glass-surface-strong relative w-full max-w-sm overflow-hidden rounded-3xl p-6 text-center min-[390px]:p-8"
                    >
                        {/* Decorative Sparkles/Notes */}
                        <div className="absolute inset-0 pointer-events-none">
                            <FontAwesomeIcon icon={faMusic} className="absolute text-[rgb(199_100_67_/_0.32)] text-xl float-animation" style={{ top: '20%', left: '15%', animationDelay: '0s' }} />
                            <FontAwesomeIcon icon={faMusic} className="absolute text-[rgb(87_191_210_/_0.28)] text-lg float-animation" style={{ top: '40%', right: '15%', animationDelay: '1s' }} />
                            <FontAwesomeIcon icon={faMusic} className="absolute text-[rgb(199_100_67_/_0.18)] text-sm float-animation" style={{ top: '70%', left: '25%', animationDelay: '0.5s' }} />
                            <div className="absolute top-1/4 right-1/4 h-1 w-1 rounded-full bg-[var(--accent-copper-strong)] animate-ping opacity-75"></div>
                            <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-50 animation-delay-500"></div>
                        </div>

                        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[var(--accent-copper)] to-[var(--accent-cyan)]"></div>

                        <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(199_100_67_/_0.12)]">
                            <FontAwesomeIcon icon={faDownload} className="text-2xl text-[var(--accent-copper-strong)]" />
                        </div>

                        <h3 className="relative z-10 mb-2 font-display text-2xl font-bold text-[var(--foreground)]">Downloading...</h3>
                        <p className="relative z-10 mb-6 italic text-[var(--foreground-muted)]">&quot;Let&apos;s jam in good vibes sa Papa&apos;s!&quot;</p>

                        <div className="relative z-10 flex flex-col gap-3 min-[390px]:flex-row">
                            <button
                                onClick={() => setDownloadModal({ isOpen: false, song: null })}
                                className="glass-focus flex-1 cursor-pointer rounded-xl bg-white/5 py-3 font-bold text-[var(--foreground-soft)] transition hover:bg-white/10 hover:text-[var(--foreground)]"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDownload}
                                className="glass-focus flex-1 cursor-pointer rounded-xl bg-gradient-to-r from-[var(--accent-copper)] to-[var(--accent-copper-strong)] py-3 font-bold text-[#fff7f2] transition-transform hover:scale-105"
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
