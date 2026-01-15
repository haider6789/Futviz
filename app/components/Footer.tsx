export default function Footer() {
    return (
        <footer className="bg-[var(--accent-dark)] border-t border-[var(--card-border)] pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16">
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-2">FUTVIZ</h2>
                        <p className="text-gray-400 text-sm">AI-Based Football Performance &<br />Tactical Analysis System</p>
                    </div>

                    <div className="flex gap-8 text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">Documentation</a>
                        <div className="relative group">
                            <span className="cursor-pointer hover:text-white transition-colors">Research Papers</span>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 bg-[#1a1a1a] border border-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50">
                                <div className="flex flex-col gap-1">
                                    <a href="/research/paper1.pdf" target="_blank" className="block px-3 py-2 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded text-left">
                                        1. Research Paper (General)
                                    </a>
                                    <a href="/research/intelligent-athletic-monitoring.pdf" target="_blank" className="block px-3 py-2 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded text-left">
                                        2. Intelligent Athletic Monitoring
                                    </a>
                                    <a href="/research/real-time-football-analysis.pdf" target="_blank" className="block px-3 py-2 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded text-left">
                                        3. Real-Time Football Analysis
                                    </a>
                                    <a href="/research/paper4.pdf" target="_blank" className="block px-3 py-2 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded text-left">
                                        4. Scientific Reports Analysis
                                    </a>
                                    <a href="/research/yolo-comparison.pdf" target="_blank" className="block px-3 py-2 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded text-left">
                                        5. YOLO Comparison
                                    </a>
                                </div>
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1a1a1a] border-b border-r border-gray-800 transform rotate-45"></div>
                            </div>
                        </div>
                        <a href="https://github.com/haider6789/Futviz.git" target="_blank" className="hover:text-white transition-colors">GitHub</a>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-16 opacity-70">
                    <span className="px-3 py-1 rounded bg-[#333] text-xs font-mono text-gray-300 border border-gray-700">Python</span>
                    <span className="px-3 py-1 rounded bg-[#333] text-xs font-mono text-gray-300 border border-gray-700">OpenCV</span>
                    <span className="px-3 py-1 rounded bg-[#333] text-xs font-mono text-gray-300 border border-gray-700">YOLO</span>
                    <span className="px-3 py-1 rounded bg-[#333] text-xs font-mono text-gray-300 border border-gray-700">React</span>
                    <span className="px-3 py-1 rounded bg-[#333] text-xs font-mono text-gray-300 border border-gray-700">TensorFlow</span>
                </div>

                <div className="text-center text-gray-600 text-sm border-t border-gray-800 pt-8">
                    <p>© 2026 FUTVIZ FYP Team. All rights reserved.</p>
                    <p className="mt-2 text-xs">Designed for University Final Year Project Demonstration.</p>
                </div>
            </div>
        </footer>
    );
}
