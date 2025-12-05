import React from 'react';
import { TESTIMONIALS } from '../../constants';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import VideoLite from '../ui/VideoLite';

const WhatsAppCard = ({ item }: { item: any }) => (
  <div className="bg-[#0b141a] rounded-lg p-2.5 md:p-3 shadow-lg border border-[#ffffff10] max-w-sm mx-auto transform rotate-1 hover:rotate-0 transition-transform">
    <div className="flex items-center gap-2 md:gap-3 mb-2 border-b border-white/5 pb-2">
      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 flex items-center justify-center text-white font-bold text-[10px] md:text-xs">
        {item.name[0]}
      </div>
      <div>
        <div className="text-white font-medium text-[10px] md:text-xs flex items-center gap-1">
          {item.name} {item.verified && <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-400" />}
        </div>
        <div className="text-[8px] md:text-[10px] text-gray-500">Online</div>
      </div>
    </div>
    <div className="bg-[#202c33] p-2 rounded-lg rounded-tl-none text-[10px] md:text-xs text-gray-200 relative mb-1">
      {item.content}
      <span className="text-[8px] md:text-[9px] text-gray-400 absolute bottom-1 right-2">14:32</span>
    </div>
  </div>
);

const VideoEmbedCard = ({ item }: { item: any }) => {
  // Extract video ID and platform from videoSrc
  const getVideoData = (src: string) => {
    if (src.includes('youtube.com') || src.includes('youtu.be')) {
      const match = src.match(/(?:embed\/|v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      return { platform: 'youtube' as const, videoId: match?.[1] || '' };
    } else if (src.includes('vimeo.com')) {
      const match = src.match(/video\/(\d+)/);
      return { platform: 'vimeo' as const, videoId: match?.[1] || '' };
    }
    return { platform: 'youtube' as const, videoId: '' };
  };

  const { platform, videoId } = getVideoData(item.videoSrc);

  return (
    <div className="group relative rounded-lg md:rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl">
      <div className="aspect-video w-full">
        <VideoLite
          videoId={videoId}
          platform={platform}
          title={item.title}
        />
      </div>
      <div className="p-3 bg-roasell-card border-t border-white/5">
        {item.resultValue && (
          <div className="inline-block px-1.5 py-0.5 bg-green-500/20 text-green-400 text-[9px] md:text-[10px] font-bold rounded mb-1 border border-green-500/30">
            {item.resultValue}
          </div>
        )}
        <h4 className="text-white text-xs md:text-sm font-bold leading-tight flex items-center justify-between">
          {item.title || item.name}
          <span className="text-[9px] font-normal text-gray-500 uppercase tracking-widest border border-white/10 px-1 rounded">
            {item.platform}
          </span>
        </h4>
      </div>
    </div>
  );
};

const ImageCard = ({ item }: { item: any }) => (
  <div className="group relative rounded-lg md:rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl h-full">
    <div className="w-full h-full min-h-[250px]">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent border-t border-white/5">
      <h4 className="text-white text-xs md:text-sm font-bold leading-tight flex items-center justify-between">
        {item.title || item.name}
      </h4>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-8 md:py-20 bg-roasell-black relative">
      {/* Background accent */}
      <div className="absolute right-0 top-1/4 w-48 h-48 md:w-96 md:h-96 bg-roasell-gold/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-xl md:text-4xl font-bold font-display mb-1 md:mb-2">
            RoaSell Kullanıcılarının <span className="text-gradient-gold">Tecrübeleri</span>
          </h2>
          <p className="text-gray-400 text-xs md:text-base">Gerçek kullanıcılar, gerçek sonuçlar ve kanıtlanmış başarı.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {item.type === 'video' ? (
                <VideoEmbedCard item={item} />
              ) : item.type === 'image' ? (
                <ImageCard item={item} />
              ) : (
                <WhatsAppCard item={item} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;