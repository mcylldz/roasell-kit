import React, { useState } from 'react';
import { TESTIMONIALS } from '../../constants';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const VERTICAL_PADDING_TOP = '179.26%';

const getVimeoId = (src: string): string => {
  const match = src.match(/video\/(\d+)/);
  return match?.[1] || '';
};

const VideoThumbCard = ({ item, onClick }: { item: any; onClick: () => void }) => {
  const videoId = getVimeoId(item.videoSrc);
  const thumbUrl = `https://vumbnail.com/${videoId}.jpg`;

  return (
    <div
      className="group relative rounded-xl overflow-hidden bg-black border border-white/10 shadow-xl aspect-[9/16] cursor-pointer w-full"
      onClick={onClick}
    >
      <img
        src={thumbUrl}
        alt={item.title || 'Tecrübe'}
        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
        loading="lazy"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
        </div>
      </div>
      {(item.title || item.name || item.resultValue) && (
        <div className="absolute bottom-0 left-0 right-0 p-2.5 bg-gradient-to-t from-black to-transparent">
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
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeMedia, setActiveMedia] = useState<any>(null);
  const videos = TESTIMONIALS.filter(t => t.type === 'video');

  return (
    <section className="py-12 md:py-20 bg-roasell-black relative">
      <div className="absolute right-0 top-1/4 w-48 h-48 md:w-96 md:h-96 bg-roasell-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl md:text-4xl font-bold font-display mb-2">
            RoaSell Kullanıcılarının <span className="text-roasell-gold">Tecrübeleri</span>
          </h2>
          <p className="text-gray-400 text-[10px] md:text-sm">Gerçek kullanıcılar, gerçek sonuçlar ve kanıtlanmış başarı.</p>
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
                    <VideoThumbCard item={item} onClick={() => setActiveMedia(item)} />
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute right-0 top-0 bottom-2 w-8 md:w-12 bg-gradient-to-l from-roasell-black to-transparent hidden md:block" />
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 backdrop-blur-xl bg-black/90"
            onClick={() => setActiveMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative flex flex-col items-center"
              style={{ width: 'min(420px, 90vw)' }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-white hover:text-roasell-gold transition-colors p-2 z-10"
                onClick={() => setActiveMedia(null)}
                aria-label="Kapat"
              >
                <X className="w-7 h-7" />
              </button>

              <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <div style={{ position: 'relative', paddingTop: VERTICAL_PADDING_TOP }}>
                  <iframe
                    src={`https://player.vimeo.com/video/${getVimeoId(activeMedia.videoSrc)}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1`}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    frameBorder={0}
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    allowFullScreen
                    title={activeMedia.title || activeMedia.name || 'Tecrübe'}
                  />
                </div>
              </div>

              {(activeMedia.title || activeMedia.name || activeMedia.resultValue) && (
                <div className="mt-4 text-center">
                  {(activeMedia.title || activeMedia.name) && (
                    <h3 className="text-white font-bold text-lg md:text-xl mb-1">
                      {activeMedia.title || activeMedia.name}
                    </h3>
                  )}
                  {activeMedia.resultValue && (
                    <p className="text-green-400 font-bold italic">{activeMedia.resultValue}</p>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;
