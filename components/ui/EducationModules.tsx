import React from 'react';
import { Clock, Play } from 'lucide-react';

const MODULES: { title: string; duration: string }[] = [
  { title: 'Temeller', duration: '1 Saat 5 Dakika' },
  { title: 'Satışın Anatomisi', duration: '1 Saat 25 Dakika' },
  { title: 'Ürün Sayfası Mastermind', duration: '24 Dakika' },
  { title: 'Reklam Metodolojisi ve Meta', duration: '2 Saat 4 Dakika' },
  { title: 'Meta Andromeda Güncellemesi ve Zekice Kreatif Üretmenin Yolu', duration: '32 Dakika' },
  { title: 'AMERİKA PAZARI — Hayat Kurtarıcı Ürün: Baştan Sona Marka Mutfağı', duration: '1 Saat' },
];

const TOTAL = '6 Saat 30 Dakika';

const EducationModules: React.FC = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-3 md:p-4 text-left">
      <div className="flex items-center gap-2 text-roasell-gold font-bold text-xs md:text-sm uppercase tracking-wide mb-3 px-1">
        <Clock className="w-4 h-4" />
        <span>Operatör Eğitimi Modülleri</span>
      </div>
      <ul className="space-y-1.5">
        {MODULES.map((m, i) => (
          <li
            key={i}
            className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2.5"
          >
            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-roasell-gold flex items-center justify-center shrink-0">
              <Play className="w-3 h-3 md:w-3.5 md:h-3.5 text-white fill-white" />
            </div>
            <span className="flex-1 text-gray-800 text-xs md:text-sm font-medium leading-snug">
              {m.title}
            </span>
            <span className="bg-white text-gray-500 text-[10px] md:text-xs font-medium px-2.5 py-1 rounded-md border border-gray-200 shrink-0 whitespace-nowrap">
              {m.duration}
            </span>
          </li>
        ))}
      </ul>
      <div className="text-right text-roasell-gold font-bold text-xs md:text-sm mt-3 px-1">
        Toplam: {TOTAL}
      </div>
    </div>
  );
};

export default EducationModules;
