
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import VideoLite from '../ui/VideoLite';

const Hero: React.FC = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative flex flex-col pt-20 md:pt-28 pb-4 overflow-hidden bg-roasell-black">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-roasell-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">

        {/* Eyebrow Text (Small Indicator) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-0.5 md:mb-1"
        >
          <span className="text-[10px] md:text-xs font-semibold text-gray-400 tracking-widest uppercase">
            Sıfırdan Marka Kurmak İsteyenler;
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 leading-tight tracking-tight font-display max-w-5xl"
        >
          <span className="text-gradient-gold block md:inline font-extrabold">+200.000.000₺</span>
          <span className="text-white relative z-10"> Hacime Ortak Ol</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-xl text-gray-400 mb-2 md:mb-6 max-w-xl mx-auto leading-normal px-2"
        >
          8 yıldır Türkiye, Avrupa ve Amerika'da markalar kuruyoruz. Şimdi bu deneyimi <span className="text-gray-200 font-medium">RoaSell Ekosistemi</span> ile seninle paylaşıyoruz.
        </motion.p>

        {/* Video Area - Specific Styling */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative w-full max-w-[95%] md:max-w-4xl mt-4 md:mt-8 mb-2 flex flex-col items-center"
        >
          {/* Red Border Container - Thickness increased by another 2px (p-6 mobile, p-7 desktop) */}
          <div className="relative p-[6px] md:p-[7px] bg-[#DC2626] rounded-sm w-full">
            {/* Top Red Badge - Compact Mobile Styling */}
            <div className="absolute top-[1px] -translate-y-full left-1/2 -translate-x-1/2 bg-[#DC2626] text-white text-[9px] md:text-xs font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-t-md md:rounded-t-lg uppercase tracking-wider z-20 whitespace-nowrap leading-none">
              Randevu almadan önce izle
            </div>

            {/* Video Iframe */}
            <div className="relative w-full aspect-video bg-black rounded-[1px] overflow-hidden z-10">
              <VideoLite
                videoId="1118068530"
                platform="vimeo"
                title="Kurucu Tanıtım Videosu"
              />
            </div>
          </div>

          {/* Disclaimer Note */}
          <div className="mt-2 text-[10px] md:text-xs text-gray-500 max-w-3xl text-center leading-relaxed px-2">
            <span className="font-bold text-red-500">Not:</span> RoaSell'de hızlı para kazanma ve sistem açıklarından bahsetmiyoruz. Sürdürülebilir, değer odaklı bir marka kurmanız için kendi markalarımızda ne yapıyorsak; aynısını size de uyarlatıyoruz.
          </div>
        </motion.div>

        {/* CTA Area */}
        <div className="flex flex-col items-center gap-3 w-full max-w-md mx-auto relative z-20 mt-2">
          <div className="group w-full px-4 md:px-0">
            <Button variant="primary" size="lg" withArrow onClick={scrollToBooking} className="w-full shadow-roasell-gold/20 py-3 font-bold uppercase">
              <div className="flex flex-col items-center leading-tight">
                <span className="text-sm md:text-base">ÜCRETSİZ ANALİZ</span>
                <span className="text-xs md:text-sm">RANDEVUSU AL</span>
              </div>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-600 hidden md:block"
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
