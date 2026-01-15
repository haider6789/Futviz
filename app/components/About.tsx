export default function About() {
    return (
        <section id="about" className="section-padding bg-[var(--accent-dark)]">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div className="order-2 md:order-1 relative">
                        {/* Placeholder for About Image/Visual */}
                        <div className="aspect-video rounded-xl overflow-hidden glass-card relative flex items-center justify-center p-8 bg-gradient-to-br from-gray-900 to-black">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--secondary-glow),_transparent_70%)] opacity-30"></div>

                            {/* Visual Representation of Analysis */}
                            <div className="relative z-10 w-full h-full border border-[var(--card-border)] rounded-lg flex items-center justify-center">
                                <p className="text-gray-500 font-mono text-sm">[ ML Model Processing Visualization ]</p>
                                {/* Animated Lines could go here */}
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 border-l-2 border-b-2 border-[var(--primary)] opacity-50"></div>
                    </div>

                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            More Than Just <span className="text-[var(--secondary)]">Data</span>.
                        </h2>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                            FUTVIZ is a Final Year Project born from the intersection of Computer Vision and Sports Science.
                            Traditional analysis relies on manual tagging, which is slow and prone to error.
                        </p>
                        <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            Our system leverages state-of-the-art <strong>Machine Learning</strong> models to autonomously track players, detect events, and generate heatmaps from standard match footage—democratizing elite-level analytics.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-[var(--primary)] font-bold text-2xl mb-1">95%</h4>
                                <p className="text-sm text-gray-400">Tracking Accuracy</p>
                            </div>
                            <div>
                                <h4 className="text-[var(--secondary)] font-bold text-2xl mb-1">Real-time</h4>
                                <p className="text-sm text-gray-400">Processing Capability</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
