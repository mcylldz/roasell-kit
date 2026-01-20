import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../../constants';
import { ArrowUpRight } from 'lucide-react';

const LazyChart = lazy(() => import('./StatsChart'));

const StatsSection: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-roasell-black border-t border-white/5 relative">
      <div className="container mx-auto px-4">

        {/* Header - Compact */}
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl md:text-4xl font-bold font-display mb-1">
            RoaSell Report
          </h2>
          <p className="text-gray-400 text-xs md:text-base mb-6">
            Ekosistem satış istatistikleri
          </p>
        </div>

        {/* Stats Grid - Ultra Compact for Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mb-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-roasell-dark p-3 md:p-4 rounded-lg border-t-2 md:border-t-4 border-roasell-gold relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 p-1.5 opacity-10 group-hover:opacity-20 transition-opacity">
                <ArrowUpRight className="w-6 h-6 md:w-10 md:h-10 text-roasell-gold" />
              </div>
              <p className="text-gray-400 text-[10px] md:text-xs font-medium uppercase tracking-wider mb-0.5">{stat.label}</p>
              <div className="text-lg md:text-2xl font-bold text-white flex items-baseline gap-0.5 font-sans tracking-tight">
                {stat.prefix}
                <span>{stat.value}</span>
                {stat.suffix}
              </div>
              {stat.trend && (
                <div className={`text-[9px] md:text-xs mt-0.5 flex items-center gap-1 ${stat.trend > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {stat.trend > 0 ? '▲' : '▼'} {Math.abs(stat.trend)}%
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Chart Card - Lazy Loaded */}
        <div className="w-full">
          <Suspense fallback={
            <div className="bg-roasell-dark border border-white/5 rounded-lg p-3 md:p-6 h-[250px] md:h-[356px] flex items-center justify-center">
              <div className="text-gray-500 text-sm">Yükleniyor...</div>
            </div>
          }>
            <LazyChart />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;