import React from 'react';
import Header from '../components/Sections/Header';
import Hero from '../components/Sections/Hero';
import BookingSection from '../components/Sections/BookingSection';
import Credibility from '../components/Sections/Credibility';
import StatsSection from '../components/Sections/StatsSection';
import SystemSection from '../components/Sections/SystemSection';
import Features from '../components/Sections/Features';
import Testimonials from '../components/Sections/Testimonials';
import FinalCTA from '../components/Sections/FinalCTA';
import Footer from '../components/Sections/Footer';

const HomePage: React.FC = () => {
    return (
        <div className="bg-roasell-black min-h-screen text-white selection:bg-roasell-gold selection:text-black">
            <Header />
            <main>
                <Hero />
                <BookingSection />
                <Credibility />
                <StatsSection />
                <SystemSection />
                <div className="relative">
                    {/* Visual separator between system/features */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-roasell-gold/30 to-transparent"></div>
                    <Features />
                </div>
                <Testimonials />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
