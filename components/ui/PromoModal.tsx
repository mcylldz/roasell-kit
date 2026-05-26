import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift } from 'lucide-react';
import Button from './Button';
import EducationModules from './EducationModules';

const STORAGE_KEY = 'operator_promo_seen';

const PromoModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setIsOpen(true), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = prev; };
    }
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, '1');
  };

  const handleCTA = () => {
    close();
    setTimeout(() => {
      document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="promo-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-roasell-black border-2 border-roasell-gold rounded-2xl p-6 md:p-8 text-center shadow-2xl shadow-roasell-gold/30 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={close}
              aria-label="Kapat"
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors p-1 rounded-md hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 bg-roasell-gold/15 text-roasell-gold text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5 border border-roasell-gold/40">
              <Gift className="w-3.5 h-3.5" />
              Sınırlı Süre
            </div>

            <h2
              id="promo-modal-title"
              className="text-lg md:text-2xl font-bold font-display text-white leading-snug mb-3"
            >
              Kısa bir süreliğine{' '}
              <span className="text-roasell-gold">Roasell Kit</span>'i satın alanlara{' '}
              <span className="text-white">47$ değerindeki</span>{' '}
              <span className="text-roasell-goldLight">Operatör Eğitimi</span>{' '}
              <span className="text-roasell-goldLight underline decoration-roasell-gold/60 underline-offset-4">
                ÜCRETSİZ
              </span>
            </h2>

            <p className="text-gray-400 text-xs md:text-sm mb-6">
              Bu fırsatı kaçırma — şimdi katıl ve bonus eğitime de erişim sağla.
            </p>

            <Button
              variant="primary"
              size="lg"
              onClick={handleCTA}
              withArrow
              className="w-full font-bold uppercase shadow-roasell-gold/30"
            >
              FIRSATTAN FAYDALAN
            </Button>

            <div className="mt-6">
              <EducationModules />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PromoModal;
