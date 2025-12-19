import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import VideoLite from '../components/ui/VideoLite';
import Header from '../components/Sections/Header';

const TebriklerPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

        // --- TRACKING CODE (Meeting Event + Webhook) ---
        (function () {
            // === AYARLAR ===
            const WEBHOOK = 'https://dtt1z7t3.rcsrv.com/webhook/meeting';
            const EVENT = 'Meeting'; // bu flow için event adı
            const GUARD_KEY = '__MT_SENT_SubmitApplication'; // event'e özel guard

            // === YARDIMCILAR ===
            function getCookie(name: string) {
                const m = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.*+?^${}()|[\]\\])/g, '\\$1') + '=([^;]*)'));
                return m ? decodeURIComponent(m[1]) : null;
            }
            function getParam(k: string) { return new URLSearchParams(location.search).get(k); }
            function uuidv4() {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                    return v.toString(16);
                });
            }
            function computeFBC() {
                const c = getCookie('_fbc'); if (c) return c;
                const fbclid = getParam('fbclid'); if (!fbclid) return null;
                return `fb.1.${Math.floor(Date.now() / 1000)}.${fbclid}`;
            }
            function computeFBP() { return getCookie('_fbp') || null; }

            // === TEK SEFER GUARD ===
            // @ts-ignore
            if (window[GUARD_KEY]) return;
            // @ts-ignore
            window[GUARD_KEY] = true;

            const event_id = uuidv4();
            const event_time = Math.floor(Date.now() / 1000);
            const user_agent = navigator.userAgent || '';

            const data = {
                event_name: EVENT,
                event_id,
                event_time,
                fbp: computeFBP() || '',
                fbc: computeFBC() || '',
                ua: user_agent,
                url: location.href.split('?')[0],
                ref: document.referrer || ''
            };

            // 1) PIXEL
            // @ts-ignore
            if (typeof fbq === 'function') {
                try {
                    fbq('trackCustom', EVENT, {}, { eventID: event_id });
                    fbq('track', 'PageView');
                } catch (e) { }
            }

            // 2) IMAGE (GET) - n8n Webhook dostu
            const img = new Image();
            img.src = WEBHOOK + '?' + new URLSearchParams(data as any).toString();

            // 3) BEACON (POST)
            if (navigator.sendBeacon) {
                navigator.sendBeacon(WEBHOOK, new Blob([JSON.stringify(data)], { type: 'text/plain' }));
            }

            console.log('Meeting tracking sent:', event_id);
        })();
    }, []);

    return (
        <div className="min-h-screen bg-roasell-black text-white">
            {/* Header */}
            <Header />

            {/* Background Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-roasell-gold/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">

                {/* Success Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="inline-flex items-center justify-center mb-6"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl" />
                            <CheckCircle className="w-16 h-16 md:w-20 md:h-20 text-green-500 relative" strokeWidth={1.5} />
                        </div>
                    </motion.div>

                    <h1 className="text-3xl md:text-5xl font-bold mb-4 font-display">
                        Randevunuz Onaylandı! 🎉
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Randevunuzun doğrulanması için lütfen videoyu izleyin ve adımları takip edin
                    </p>
                </motion.div>

                {/* Main Confirmation Video */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="max-w-5xl mx-auto mb-16"
                >
                    <div className="bg-roasell-card border border-roasell-gold/20 rounded-xl overflow-hidden p-2">
                        <VideoLite
                            videoId="1126774109"
                            platform="vimeo"
                            title="Randevunuz Onaylandı"
                            className="rounded-lg"
                        />
                    </div>
                </motion.div>

                {/* Resources Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold font-display mb-3">
                            Randevu Öncesinde Yardımcı Olacak Kaynaklar
                        </h2>
                        <p className="text-gray-400">
                            Hem bizim kaynaklarımıza, hem de RoaSell bünyesinde beraber yürüdüğümüz insanlarla aldığımız sonuçlara erişebilirsiniz
                        </p>
                    </div>

                    {/* Video Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

                        {/* Video 1 */}
                        <div className="bg-roasell-card border border-white/5 rounded-lg overflow-hidden">
                            <VideoLite
                                videoId="SDpxgRxCudI"
                                platform="youtube"
                                title="Türkiye'de sıfırdan marka kurmak"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-sm md:text-base">Türkiye'de Sıfırdan Marka Kurmak</h3>
                            </div>
                        </div>

                        {/* Video 2 */}
                        <div className="bg-roasell-card border border-white/5 rounded-lg overflow-hidden">
                            <VideoLite
                                videoId="fjh5llEMFMc"
                                platform="youtube"
                                title="2025'te E-Ticaret Dünyası"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-sm md:text-base">2025'te E-Ticaret Dünyası</h3>
                            </div>
                        </div>

                        {/* Video 3 */}
                        <div className="bg-roasell-card border border-white/5 rounded-lg overflow-hidden">
                            <VideoLite
                                videoId="dmQH7MRjGPQ"
                                platform="youtube"
                                title="E-Ticaret İçin Ne Kadar Sermaye Gerekiyor"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-sm md:text-base">E-Ticaret İçin Ne Kadar Sermaye Gerekiyor</h3>
                            </div>
                        </div>

                        {/* Video 4 */}
                        <div className="bg-roasell-card border border-white/5 rounded-lg overflow-hidden">
                            <VideoLite
                                videoId="T4n_KuX1PwA"
                                platform="youtube"
                                title="Oğuzhan Bey'le 82 Günde Markasını Kurduk"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-sm md:text-base">Oğuzhan Bey'le 82 Günde Markasını Kurduk</h3>
                                <span className="inline-block mt-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">₺703.919,78</span>
                            </div>
                        </div>

                        {/* Video 5 */}
                        <div className="bg-roasell-card border border-white/5 rounded-lg overflow-hidden">
                            <VideoLite
                                videoId="M27TTMQRhC4"
                                platform="youtube"
                                title="Kerem ve Emir ile 12 Ayda 0'dan 3 Milyon Dolar Satışa Ulaştık"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-sm md:text-base">Kerem ve Emir ile 12 Ayda 0'dan 3 Milyon Dolar Satışa Ulaştık</h3>
                                <span className="inline-block mt-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">$3M</span>
                            </div>
                        </div>

                        {/* Video 6 */}
                        <div className="bg-roasell-card border border-white/5 rounded-lg overflow-hidden">
                            <VideoLite
                                videoId="EB_mM56p8MM"
                                platform="youtube"
                                title="Trendyol'da Zarar Ettikten Sonra Markalama İle Tanışan Efe"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-sm md:text-base">Trendyol'da Zarar Ettikten Sonra Markalama İle Tanışan Efe</h3>
                            </div>
                        </div>

                        {/* Video 7 */}
                        <div className="bg-roasell-card border border-white/5 rounded-lg overflow-hidden md:col-span-2 md:max-w-md md:mx-auto">
                            <VideoLite
                                videoId="AlEdI1E0MtU"
                                platform="youtube"
                                title="6 Ayda 4 Milyon TL'ye Ulaşan Hüseyin ve Sattığı Ürün"
                            />
                            <div className="p-4">
                                <h3 className="font-semibold text-sm md:text-base">6 Ayda 4 Milyon TL'ye Ulaşan Hüseyin ve Sattığı Ürün</h3>
                                <span className="inline-block mt-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">₺4.000.000+</span>
                            </div>
                        </div>

                    </div>

                    {/* Warning Notice */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-red-500/10 border-2 border-red-500/30 rounded-lg p-6 mb-12"
                    >
                        <div className="flex items-start gap-4">
                            <div className="text-3xl">⚠️</div>
                            <div>
                                <h3 className="text-lg font-bold text-red-400 mb-2">DİKKAT</h3>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                    Roasell sadece <span className="font-semibold text-white">internet üzerinden kendi e-ticaret markasını oluşturmak ve ölçeklemek</span> ile ilgilenen,
                                    bu alana <span className="font-semibold text-white">yatırım yapabilecek</span> kişiler içindir.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Footer Message */}
                    <div className="text-center border-t border-white/10 pt-8">
                        <p className="text-xl font-semibold text-roasell-gold mb-2">Randevularda görüşmek üzere!</p>
                        <p className="text-gray-400">Roasell ekibindeki dostlarınız</p>
                    </div>

                </motion.div>

            </div>
        </div>
    );
};

export default TebriklerPage;
