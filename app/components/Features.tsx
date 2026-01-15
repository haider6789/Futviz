export default function Features() {
    const features = [
        {
            title: "Tactical Heatmaps",
            icon: "🔥",
            desc: "Visualize player positioning and density with high-precision heatmaps generated from match footage."
        },
        {
            title: "Movement Tracking",
            icon: "🏃",
            desc: "Real-time trajectory tracking for every player, calculating distance covered and sprint speeds."
        },
        {
            title: "Event Detection",
            icon: "⚡",
            desc: "Auto-detection of key events: passes, shots, fouls, and possession changes using Computer Vision."
        },
        {
            title: "Team Formations",
            icon: "🛡️",
            desc: "Automatic identification of defensive and offensive structures during different match phases."
        }
    ];

    return (
        <section id="features" className="section-padding bg-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Core Capabilities</h2>
                    <div className="w-24 h-1 bg-[var(--primary)] mx-auto"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {features.map((f, i) => (
                        <div key={i} className="glass-card p-8 rounded-xl transition-all duration-300 group hover:-translate-y-2">
                            <div className="text-4xl mb-6 bg-[var(--accent-gray)] w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[var(--primary)] transition-colors">
                                {f.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
