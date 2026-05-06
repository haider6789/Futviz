"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-black tracking-tighter hover:text-[var(--primary)] transition-colors">
                    FUT<span className="text-[var(--primary)]">VIZ</span>
                </Link>
                <div className="flex items-center gap-6">
                    {pathname !== '/' && (
                        <Link href="/" className="text-gray-300 hover:text-white transition-colors font-medium text-sm flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            Back to Home
                        </Link>
                    )}
                    <Link href="/demo" className="px-6 py-2 rounded-full border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-black transition-all font-semibold text-sm shadow-[0_0_10px_rgba(0,255,136,0.2)] hover:shadow-[0_0_15px_rgba(0,255,136,0.5)]">
                        Get Demo
                    </Link>
                </div>
            </div>
        </div>
    );
}
