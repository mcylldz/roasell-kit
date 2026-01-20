import React from 'react';
import Button from '../ui/Button';
import { Lock, Clock, CheckCircle } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-8 md:py-16 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-roasell-black" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold font-display text-white mb-2 md:mb-4">
            E-Ticaret Yolculuğuna <br />
            <span className="text-roasell-gold">Hazır mısın?</span>
          </h2>

          <p className="text-gray-300 text-sm md:text-lg mb-6 md:mb-8 px-4">
            RoaSell ekosistemi internet üzerinden kendi markasını oluşturmak isteyenler içindir.
          </p>

          <Button variant="primary" size="lg" withArrow onClick={scrollToBooking} className="text-sm md:text-base px-8 py-3.5 mb-4 md:mb-6 w-full md:w-auto font-bold">
            1-1 Randevu Al
          </Button>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-[10px] md:text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Lock className="w-2.5 h-2.5 md:w-3 md:h-3" />
              Bilgileriniz gizli tutulur
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-2.5 h-2.5 md:w-3 md:h-3" />
              1 saat
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-2.5 h-2.5 md:w-3 md:h-3" />
              Ücretsiz
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;