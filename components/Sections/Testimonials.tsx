import React, { useState } from 'react';
import { TESTIMONIALS } from '../../constants';
import { motion } from 'framer-motion';

const VERTICAL_PADDING_TOP = '179.26%';

const getVimeoId = (src: string): string => {
  const match = src.match(/video\/(\d+)/);
  return match?.[1] || '';
};

const VideoThumbCard = ({ item }: { item: any }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = getVimeoId(item.videoSrc);
  const thumbUrl = `https://vumbnail.com/${videoId}.jpg`;
  const label = item.title || item.name || 'Tecrübe';

  return (
    <div
      className="relative rounded-xl overflow-hidden bg-black border border-white/10 shadow-xl w-full"
      style={{ position: 'relative', paddingTop: VERTICAL_PADDING_TOP }}
    >
      {isPlaying ? (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1`}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
          title={label}
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          aria-label={`${label} videosunu oynat`}
          className="group absolute inset-0 cursor-pointer block w-full h-full p-0 border-0 bg-transparent"
        >
          <img
            src={thumbUrl}
            alt={label}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
            </div>
          </div>
          {(item.title || item.name || item.resultValue) && (
            <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black to-transparent text-left">
              <div className="flex flex-col gap-1">
                {item.resultValue && (
                  <span className="text-[8px] md:text-[9px] font-bold text-green-400 bg-green-500/20 px-1.5 py-0.5 rounded border border-green-500/30 self-start italic">
                    {item.resultValue}
                  </span>
                )}
                {(item.title || item.name) && (
                  <h4 className="text-white text-[10px] md:text-xs font-bold truncate leading-tight">
                    {item.title || item.name}
                  </h4>
                )}
              </div>
            </div>
          )}
        </button>
      )}
    </div>
  );
};

const Testimonials: React.FC = () => {
  const videos = TESTIMONIALS.filter(t => t.type === 'video');

  return (
    <section className="py-12 md:py-20 bg-roasell-black relative overflow-x-hidden">
      <div className="absolute right-0 top-1/4 w-48 h-48 md:w-96 md:h-96 bg-roasell-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-4xl font-bold font-display mb-2">
            RoaSell Kullanıcılarının <span className="text-roasell-gold">Tecrübeleri</span>
          </h2>
          <p className="text-gray-400 text-[10px] md:text-sm">
            Gerçek kullanıcılar, gerçek sonuçlar ve kanıtlanmış başarı.
          </p>
        </div>

        {videos.length > 0 && (
          <div className="relative -mx-4 md:mx-0">
            <div className="overflow-x-auto scrollbar-hide px-4 md:px-0 pb-2">
              <div className="flex gap-3 md:gap-5 snap-x snap-mandatory">
                {videos.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(index * 0.04, 0.4) }}
                    className="snap-start shrink-0 w-[55%] sm:w-[38%] md:w-[28%] lg:w-[20%]"
                  >
                    <VideoThumbCard item={item} />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute right-0 top-0 bottom-2 w-8 md:w-12 bg-gradient-to-l from-roasell-black to-transparent hidden md:block" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
