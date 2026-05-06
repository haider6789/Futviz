"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FeaturesPage() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const features = [
        {
            title: "Fully Automated Pipeline",
            description: "Say goodbye to manual event coding. FUTVIZ automatically processes footage, extracting tactical data without human intervention.",
            icon: (
                <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            title: "Advanced Object Tracking",
            description: "Utilizing ByteTrack and Optical Flow algorithms to seamlessly track player movements and ball trajectory across the entire pitch.",
            icon: (
                <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
            )
        },
        {
            title: "Auto-Team Labeling",
            description: "Advanced K-Means clustering and SigLip models instantly distinguish teams and referees based on visual patterns.",
            icon: (
                <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        },
        {
            title: "Camera Jitter Compensation",
            description: "Our AI stabilizes shaky match footage in real-time to ensure absolute accuracy in spatial coordinate mapping.",
            icon: (
                <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Cost-Effective Scalability",
            description: "Designed to run on standard commercial hardware. Achieve professional-grade analytics with zero monthly subscription fees.",
            icon: (
                <svg className="w-8 h-8 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    return (
        <main className="min-h-screen bg-black text-white selection:bg-[var(--primary)] selection:text-black">

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--primary)]/10 blur-[120px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 text-sm font-medium text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                        Next-Gen Sports Analytics
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        The Engine Behind <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-blue-500">
                            Game Intelligence
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
                        FUTVIZ bridges the gap between grassroots football and elite analytics. Discover how our AI-powered features deliver broadcast-quality insights without the premium price tag.
                    </p>
                </div>
            </section>

            {/* Features Grid Section */}
            <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Powerful Features. <span className="text-[var(--primary)]">Zero Compromises.</span></h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Built from the ground up for absolute precision on the pitch.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="group relative glass-card p-8 rounded-3xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,255,136,0.1)] overflow-hidden"
                            >
                                {/* Abstract hover glow */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/0 group-hover:bg-[var(--primary)]/10 blur-3xl rounded-full transition-all duration-500 transform translate-x-1/2 -translate-y-1/2"></div>

                                <div className="w-16 h-16 rounded-2xl bg-black/50 flex items-center justify-center border border-white/10 mb-6 group-hover:border-[var(--primary)]/50 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[var(--primary)] transition-colors">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Competitor Comparison Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">How We Compare</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">See why FUTVIZ is the superior choice for clubs seeking affordable excellence.</p>
                    </div>

                    <div className="max-w-5xl mx-auto glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 bg-white/5">
                                        <th className="p-6 text-lg font-semibold text-gray-300 w-1/4">Feature</th>
                                        <th className="p-6 text-xl font-bold text-[var(--primary)] border-x border-white/10 bg-[var(--primary)]/5 w-1/4">FUTVIZ</th>
                                        <th className="p-6 text-lg font-semibold text-gray-300 w-1/4">InStat (Hudl)</th>
                                        <th className="p-6 text-lg font-semibold text-gray-300 w-1/4">SkillCorner</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/10">
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-medium text-gray-300">Analysis Approach</td>
                                        <td className="p-6 font-bold text-white border-x border-white/10 bg-[var(--primary)]/5">Fully Automated AI</td>
                                        <td className="p-6 text-gray-400">Manual Event Coding</td>
                                        <td className="p-6 text-gray-400">Automated Tracking</td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-medium text-gray-300">Target Audience</td>
                                        <td className="p-6 font-bold text-white border-x border-white/10 bg-[var(--primary)]/5">Grassroots & Pro</td>
                                        <td className="p-6 text-gray-400">Large-Budget Institutions</td>
                                        <td className="p-6 text-gray-400">Professional Broadcasters</td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-medium text-gray-300">Team Labeling</td>
                                        <td className="p-6 font-bold text-white border-x border-white/10 bg-[var(--primary)]/5">K-Means & SigLip AI</td>
                                        <td className="p-6 text-gray-400">Data-on-Demand (Manual)</td>
                                        <td className="p-6 text-gray-400">Proprietary Model</td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-medium text-gray-300">Jitter Compensation</td>
                                        <td className="p-6 font-bold text-[var(--primary)] border-x border-white/10 bg-[var(--primary)]/5 flex items-center gap-2">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Included
                                        </td>
                                        <td className="p-6 text-gray-400">Varies / External</td>
                                        <td className="p-6 text-gray-400">Included</td>
                                    </tr>
                                    <tr className="hover:bg-white/5 transition-colors">
                                        <td className="p-6 font-medium text-gray-300">Monthly Pricing</td>
                                        <td className="p-6 font-bold text-[var(--primary)] border-x border-white/10 bg-[var(--primary)]/5 text-2xl">
                                            Starting from $0 <span className="text-sm text-gray-400 font-normal">/ month</span>
                                        </td>
                                        <td className="p-6 text-red-400 font-medium">Enterprise Only</td>
                                        <td className="p-6 text-red-400 font-medium">Starts at $499/mo</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--primary)]/10"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to elevate your game?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Join the revolution in AI football analytics and get broadcast-quality insights for your team today.</p>
                    <Link href="/demo" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[var(--primary)] text-black font-bold text-lg hover:bg-[#00e67a] transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(0,255,136,0.4)]">
                        Get Your Demo Now
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </section>

        </main>
    );
}
