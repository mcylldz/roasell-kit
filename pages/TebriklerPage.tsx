import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TebriklerPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-roasell-black flex items-center justify-center px-4 py-12">
            {/* Background Effects */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[400px] bg-roasell-gold/10 rounded-full blur-[120px] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 max-w-2xl w-full"
            >
                {/* Success Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="flex justify-center mb-8"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl" />
                        <CheckCircle className="w-24 h-24 text-green-500 relative" strokeWidth={1.5} />
                    </div>
                </motion.div>

                {/* Success Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-center mb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
                        Tebrikler! 🎉
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-6">
                        Ekibimiz sizinle kısa süre içerisinde iletişime geçecektir.
                    </p>
                    <div className="bg-roasell-card border border-green-500/20 rounded-lg p-6 mb-6">
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            Bilgileriniz başarıyla kaydedildi. RoaSell ekibi olarak, size en uygun çözümleri sunmak için heyecanlıyız.
                            <span className="block mt-3 text-green-400 font-medium">
                                📧 E-posta kutunuzu ve 📱 telefonunuzu kontrol etmeyi unutmayın!
                            </span>
                        </p>
                    </div>
                </motion.div>

                {/* Info Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
                >
                    <div className="bg-roasell-card border border-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">⏱️</div>
                        <div className="text-sm text-gray-400">Yanıt Süresi</div>
                        <div className="text-lg font-bold text-white">24 Saat İçinde</div>
                    </div>
                    <div className="bg-roasell-card border border-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">🔒</div>
                        <div className="text-sm text-gray-400">Güvenlik</div>
                        <div className="text-lg font-bold text-white">100% Gizli</div>
                    </div>
                    <div className="bg-roasell-card border border-white/5 rounded-lg p-4 text-center">
                        <div className="text-2xl mb-2">💼</div>
                        <div className="text-sm text-gray-400">Profesyonel</div>
                        <div className="text-lg font-bold text-white">Uzman Ekip</div>
                    </div>
                </motion.div>

                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-center"
                >
                    <button
                        onClick={() => navigate('/')}
                        className="inline-flex items-center gap-2 text-gray-400 hover:text-roasell-gold transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Ana Sayfaya Dön
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TebriklerPage;
