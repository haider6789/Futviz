"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PortfolioLogin() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!username || !password) {
            setErrorMessage("Please enter both username and password.");
            return;
        }

        setStatus('loading');
        setErrorMessage("");

        try {
            // Query Supabase for matching credentials
            const { data, error } = await supabase
                .from('coach_submissions')
                .select('username')
                .eq('username', username)
                .eq('password', password)
                .single();

            if (error || !data) {
                // If no row is returned, .single() throws an error (PGRST116)
                throw new Error("Invalid username or password.");
            }

            // Simple client-side auth for FYP
            localStorage.setItem('portfolio_user', data.username);
            
            // Redirect to their dashboard
            router.push(`/portfolio/${data.username}`);

        } catch (error: any) {
            console.error('Login error:', error);
            setStatus('error');
            setErrorMessage(error.message || "An error occurred during login.");
        }
    };

    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center justify-center p-6 pt-32">
            
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--primary)] opacity-10 blur-[120px] rounded-full"></div>
            </div>

            <div className="relative z-10 w-full max-w-md animate-fade-in">
                
                {/* Header */}
                <div className="text-center mb-10">

                    <h1 className="text-3xl md:text-4xl font-bold mb-2">
                        Coach <span className="neon-text-green">Login</span>
                    </h1>
                    <p className="text-gray-400 text-sm">
                        Access your personal analysis portfolio
                    </p>
                </div>

                {/* Login Form */}
                <div className="glass-card p-8 rounded-2xl border border-[var(--card-border)] shadow-2xl">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-2">Username</label>
                            <input
                                type="text"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your unique username"
                                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all placeholder-gray-600"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-bold text-gray-300 mb-2">Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all placeholder-gray-600"
                            />
                        </div>

                        {errorMessage && (
                            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
                        )}

                        <div className="pt-2">
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className={`w-full py-3.5 rounded-xl bg-[var(--primary)] text-black font-bold text-md transition-all transform hover:scale-[1.02] shadow-[0_0_15px_rgba(0,255,136,0.2)] ${
                                    status === 'loading' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#00e67a]'
                                }`}
                            >
                                {status === 'loading' ? 'Verifying...' : 'Access Portfolio'}
                            </button>
                        </div>
                    </form>
                </div>
                
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">
                        Don&apos;t have a portfolio?{' '}
                        <Link href="/demo" className="text-[var(--primary)] hover:underline">
                            Request a Demo
                        </Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
