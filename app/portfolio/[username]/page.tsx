"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import Link from "next/link";

interface PortfolioData {
    name: string;
    club_name: string;
    email: string;
    video_url: string;
    created_at: string;
}

export default function PortfolioDashboard() {
    const params = useParams();
    const router = useRouter();
    const [data, setData] = useState<PortfolioData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const username = params.username as string;

    useEffect(() => {
        const checkAuthAndFetch = async () => {
            try {
                // Client-side auth check
                const loggedInUser = localStorage.getItem('portfolio_user');
                if (!loggedInUser || loggedInUser !== username) {
                    router.push('/portfolio/login');
                    return;
                }

                // Fetch portfolio data
                const { data: portfolioData, error: fetchError } = await supabase
                    .from('coach_submissions')
                    .select('*')
                    .eq('username', username)
                    .single();

                if (fetchError || !portfolioData) {
                    throw new Error("Could not load portfolio data.");
                }

                setData(portfolioData);
            } catch (err: any) {
                console.error(err);
                setError(err.message || "An error occurred.");
            } finally {
                setLoading(false);
            }
        };

        checkAuthAndFetch();
    }, [username, router]);

    const handleLogout = () => {
        localStorage.removeItem('portfolio_user');
        router.push('/portfolio/login');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[var(--primary)]"></div>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white text-center">
                <h1 className="text-3xl font-bold mb-4 text-red-500">Error</h1>
                <p className="text-gray-400 mb-8">{error}</p>
                <button onClick={handleLogout} className="text-[var(--primary)] hover:underline">
                    Return to Login
                </button>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-black text-white p-6 md:p-12">
            <div className="max-w-6xl mx-auto animate-fade-in">
                
                {/* Dashboard Header */}
                <header className="flex flex-col md:flex-row justify-between items-center mb-12 pb-6 border-b border-gray-800 gap-6">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-2">
                            {data.name}&apos;s <span className="neon-text-green">Portfolio</span>
                        </h1>
                        <p className="text-gray-400 text-lg">
                            {data.club_name} • Analysis Dashboard
                        </p>
                    </div>
                    <button 
                        onClick={handleLogout}
                        className="px-6 py-2 rounded-lg border border-gray-700 hover:bg-white/5 transition-colors text-sm font-medium"
                    >
                        Sign Out
                    </button>
                </header>

                {/* Dashboard Content Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    
                    {/* Left Column: Details */}
                    <div className="space-y-8 lg:col-span-1">
                        
                        {/* Profile Card */}
                        <div className="glass-card p-6 rounded-2xl border border-[var(--card-border)] bg-gradient-to-br from-black/60 to-[#1a1a1a]/40">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                                Coach Profile
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Full Name</p>
                                    <p className="font-semibold text-lg">{data.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Club Affiliation</p>
                                    <p className="font-semibold text-lg">{data.club_name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Contact Email</p>
                                    <p className="font-semibold">{data.email}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 mb-1">Submission Date</p>
                                    <p className="font-semibold">
                                        {new Date(data.created_at).toLocaleDateString(undefined, { 
                                            year: 'numeric', month: 'long', day: 'numeric' 
                                        })}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="glass-card p-6 rounded-2xl border border-[var(--card-border)]">
                            <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
                            <div className="space-y-3">
                                <a href={data.video_url} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium border border-gray-800 hover:border-gray-600">
                                    Download Raw Footage
                                </a>
                                <Link href="/" className="block w-full text-center py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium border border-gray-800 hover:border-gray-600">
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Video & Analysis placeholder */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Video Player */}
                        <div className="glass-card rounded-2xl border border-[var(--card-border)] overflow-hidden shadow-2xl">
                            <div className="p-4 border-b border-gray-800 bg-black/50 flex justify-between items-center">
                                <h2 className="font-bold flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    Uploaded Match Footage
                                </h2>
                                <span className="text-xs px-2 py-1 rounded bg-[var(--primary)]/20 text-[var(--primary)] font-mono border border-[var(--primary)]/30">
                                    PROCESSING AI
                                </span>
                            </div>
                            <div className="aspect-video bg-black relative group">
                                <video 
                                    src={data.video_url} 
                                    controls 
                                    className="w-full h-full object-contain"
                                    controlsList="nodownload"
                                />
                            </div>
                        </div>

                        {/* AI Insights Placeholder */}
                        <div className="glass-card p-8 rounded-2xl border border-[var(--primary)]/30 relative overflow-hidden bg-gradient-to-r from-[var(--primary)]/5 to-transparent">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold mb-4 text-[var(--primary)]">FUTVIZ AI Analysis is Generating...</h2>
                                <p className="text-gray-400 mb-6 max-w-xl">
                                    Our YOLO-powered models are currently processing your footage to extract tactical insights, player tracking metrics, and heatmaps. This typically takes a few hours depending on the video length.
                                </p>
                                <div className="flex gap-4">
                                    <div className="h-2 flex-1 bg-gray-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-[var(--primary)] w-1/3 animate-pulse rounded-full shadow-[0_0_10px_rgba(0,255,136,0.5)]"></div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-3">Estimated completion: 35%</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
