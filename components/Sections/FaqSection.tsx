import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS: { q: string; a: string }[] = [
  {
    q: 'Hiç bilgim yok, bu kit bana uygun mu?',
    a: 'RoaSell Kit tam olarak senin için tasarlandı. Sıfır bilgiyle başladığını varsayarak her adım en temelden anlatılıyor. Teknik bilgiye, deneyime ya da önceden bir altyapıya ihtiyacın yok. Kit sana ne yapacağını, nasıl yapacağını ve hangi sırayla yapacağını tek tek söylüyor.',
  },
  {
    q: '28 günde gerçekten satış yapabilir miyim?',
    a: '28 günlük plan, olumsuz senaryolar düşünülerek 3 farklı ürün testi yapabileceğin şekilde tasarlandı. Sisteme sadık kalıp günlük görevleri aksatmadan uygulayan kullanıcıların büyük çoğunluğu bu süre içinde ilk satışlarını görüyor.',
  },
  {
    q: 'YouTube\'dan ücretsiz öğrenemez miyim?',
    a: 'Öğrenebilirsin. Ama şunu düşün: bir video "önce ürün bul" diyor, diğeri "önce pazar seç" diyor. Hangisini dinleyeceksin? Hepsini izlemeye çalışırken haftalar geçiyor ve ortada hâlâ bir mağaza yok. RoaSell Kit sana "1. gün bunu yap, 2. gün bunu yap" diyor. Bilgi kirliliğiyle uğraşmak yerine direkt uyguluyorsun. Burada sunduğumuz şey sadece bilgi değil; bilgiyi doğru şekilde önceliklendirmek ve doğru bir sistemle ilerlemek.',
  },
  {
    q: 'Ne kadar zaman ayırmam gerekiyor?',
    a: 'Kit, günlük ortalama 1-2 saatlik çalışma düzenine göre tasarlandı. Fakat daha fazla vakit ayrılırsa tabii ki daha hızlı ilerlenebilir.',
  },
  {
    q: 'Sadece Türkiye pazarı için mi geçerli?',
    a: 'Hayır. RoaSell Kit global dropshipping modeli üzerine kurulu. Türkiye, Avrupa, Amerika ya da herhangi bir pazarda uygulayabilirsin. Kit içindeki stratejiler lokasyondan bağımsız çalışacak şekilde hazırlandı.',
  },
  {
    q: 'İçerikler güncel mi?',
    a: 'Kit düzenli olarak güncelleniyor. Platform değişiklikleri, algoritma güncellemeleri ve yeni trendler doğrultusunda içerikler revize ediliyor.',
  },
  {
    q: 'Satın aldıktan sonra ne kadar süre erişimim var?',
    a: 'Satın alma işlemi tamamlandığında içeriğe sınırsız süre boyunca erişim kazanıyorsun. Gelecekteki güncellemeler de dahil olmak üzere RoaSell Kit\'e istediğin zaman dönüp tekrar bakabilirsin.',
  },
];

const FaqItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-roasell-border rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-white text-sm md:text-base leading-snug pr-2">
          {q}
        </span>
        <ChevronDown
          className={`shrink-0 w-5 h-5 text-roasell-gold transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 md:px-6 md:pb-6 text-gray-300 leading-relaxed text-sm md:text-base border-t border-white/5 pt-4">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="bg-roasell-black py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[400px] bg-roasell-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-roasell-gold/10 text-roasell-gold text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border border-roasell-gold/30">
            <HelpCircle className="w-3.5 h-3.5" />
            SSS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white leading-tight mb-3">
            Herkesin Aklına Gelen <span className="text-roasell-gold">Sorular</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Aklındaki soruların büyük çoğunluğunun cevabını burada bulacaksın.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FaqItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
