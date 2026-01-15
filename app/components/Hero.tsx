import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black/80"></div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[var(--primary)] to-transparent opacity-20 blur-[2px]"></div>
                <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-[var(--secondary)] to-transparent opacity-20 blur-[2px]"></div>
            </div>

            <div className="relative z-10 container mx-auto px-6 text-center">
                <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
                    <span className="inline-block px-4 py-2 rounded-full border border-[var(--primary)] text-[var(--primary)] text-sm font-semibold tracking-wider mb-6 bg-[var(--primary)]/10">
                        AI-POWERED ANALYTICS
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
                    Unlocking Football <br />
                    <span className="neon-text-green">Performance</span> & <span className="neon-text-blue">Intelligence</span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
                    FUTVIZ transforms raw match footage into actionable tactical insights using advanced Machine Learning.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.7s' }}>
                    <a
                        href="/demo"
                        className="px-8 py-4 rounded-full bg-[var(--primary)] text-black font-bold text-lg hover:bg-[#00e67a] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(0,255,136,0.5)]"
                    >
                        Explore Features
                    </a>
                    <a
                        href="/demo"
                        className="px-8 py-4 rounded-full border border-white text-white font-bold text-lg hover:bg-white hover:text-black transition-all transform hover:scale-105"
                    >
                        Get Demo
                    </a>
                </div>
            </div>
        </section>
    );
}
