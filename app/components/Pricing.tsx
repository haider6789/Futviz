import Link from 'next/link';

export default function Pricing() {
    return (
        <section id="pricing" className="section-padding bg-black">
            <div className="container mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Pricing Plans</h2>
                    <p className="text-gray-400">Scalable solutions for teams of all sizes.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">

                    {/* Tier 1: Academic / Demo */}
                    <div className="glass-card p-8 rounded-xl border-t-4 border-gray-600 flex flex-col">
                        <div className="mb-4">
                            <span className="bg-gray-800 text-xs font-bold px-2 py-1 rounded text-gray-300">ACADEMIC / DEMO</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Basic</h3>
                        <div className="text-4xl font-bold mb-6">Free<span className="text-sm font-normal text-gray-500">/ forever</span></div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-center text-gray-300"><span className="text-[var(--primary)] mr-2">✓</span> Single Match Analysis</li>
                            <li className="flex items-center text-gray-300"><span className="text-[var(--primary)] mr-2">✓</span> Basic Heatmaps</li>
                            <li className="flex items-center text-gray-300"><span className="text-[var(--primary)] mr-2">✓</span> Standard Definition Support</li>
                        </ul>
                        <Link href="/demo" className="w-full py-3 rounded border border-white/20 hover:bg-white hover:text-black transition-colors font-semibold block text-center">
                            View Demo
                        </Link>
                    </div>

                    {/* Tier 2: Professional / Team (Most Popular) */}
                    <div className="glass-card p-8 rounded-xl border-t-4 border-[var(--primary)] relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(0,255,136,0.1)] flex flex-col">
                        <div className="absolute top-0 right-0 bg-[var(--primary)] text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                            POPULAR
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Pro Team</h3>
                        <div className="text-4xl font-bold mb-6">$45<span className="text-sm font-normal text-gray-500">/ month</span></div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-center text-white"><span className="text-[var(--primary)] mr-2">✓</span> Unlimited Matches</li>
                            <li className="flex items-center text-white"><span className="text-[var(--primary)] mr-2">✓</span> Player Trajectories</li>
                            <li className="flex items-center text-white"><span className="text-[var(--primary)] mr-2">✓</span> 1080p Video Support</li>
                            <li className="flex items-center text-white"><span className="text-[var(--primary)] mr-2">✓</span> Export to CSV/JSON</li>
                        </ul>
                        <Link href="/demo" className="w-full py-3 rounded bg-[var(--primary)] text-black font-bold hover:bg-[#00e67a] transition-colors shadow-lg shadow-[var(--primary-glow)] block text-center">
                            Get Started
                        </Link>
                    </div>

                    {/* Tier 3: Enterprise / Custom */}
                    <div className="glass-card p-8 rounded-xl border-t-4 border-[var(--secondary)] flex flex-col">
                        <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                        <div className="text-4xl font-bold mb-6">Custom</div>
                        <ul className="space-y-3 mb-8 flex-1">
                            <li className="flex items-center text-gray-300"><span className="text-[var(--secondary)] mr-2">✓</span> Custom API Access</li>
                            <li className="flex items-center text-gray-300"><span className="text-[var(--secondary)] mr-2">✓</span> Scout Reports</li>
                            <li className="flex items-center text-gray-300"><span className="text-[var(--secondary)] mr-2">✓</span> Multi-Team Management</li>
                            <li className="flex items-center text-gray-300"><span className="text-[var(--secondary)] mr-2">✓</span> Dedicated Support</li>
                        </ul>
                        <button className="w-full py-3 rounded border border-white/20 hover:bg-[var(--secondary)] hover:text-black hover:border-transparent transition-colors font-semibold">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
