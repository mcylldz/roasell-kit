import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

interface VideoLiteProps {
    videoId: string;
    platform: 'youtube' | 'vimeo';
    title?: string;
    className?: string;
    autoPlay?: boolean;
    isLocked?: boolean;
}

const VideoLite: React.FC<VideoLiteProps> = ({
    videoId,
    platform,
    title = 'Video',
    className = '',
    autoPlay = false,
    isLocked = false
}) => {
    const [isLoaded, setIsLoaded] = useState(autoPlay);

    useEffect(() => {
        if (autoPlay) setIsLoaded(true);
    }, [autoPlay]);

    const thumbnailUrl = platform === 'youtube'
        ? `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
        : `https://vumbnail.com/${videoId}.jpg`;

    const embedUrl = platform === 'youtube'
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
        : `https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=0`;

    if (isLoaded) {
        return (
            <div className={`relative w-full aspect-video ${className}`}>
                <iframe
                    src={embedUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    allowFullScreen
                    title={title}
                    className="w-full h-full"
                />
            </div>
        );
    }

    return (
        <div
            className={`relative w-full aspect-video cursor-pointer group ${className}`}
            onClick={() => setIsLoaded(true)}
        >
            {/* Thumbnail */}
            <img
                src={thumbnailUrl}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 md:w-8 md:h-8 text-white fill-white ml-1" />
                </div>
            </div>
        </div>
    );
};

export default VideoLite;
