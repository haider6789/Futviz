export default function HowItWorks() {
    const steps = [
        { num: "01", title: "Input Footage", desc: "Upload raw match video or connect a live stream." },
        { num: "02", title: "CV Processing", desc: "YOLO & OpenCV models detect players and ball." },
        { num: "03", title: "Data Extraction", desc: "Coordinates are mapped to a 2D pitch model." },
        { num: "04", title: "Insight Gen", desc: "Metrics and visualizations are rendered." }
    ];

    return (
        <section className="section-padding bg-[var(--accent-dark)]">
            <div className="container mx-auto">
                <div className="mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">How It Works</h2>
                    <p className="text-gray-400">From pixel to performance metric in four steps.</p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] opacity-20 -z-1"></div>

                    {steps.map((step, i) => (
                        <div key={i} className="relative pt-8">
                            <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-black border-2 border-[var(--primary)] z-10 flex items-center justify-center shadow-[0_0_10px_var(--primary-glow)]">
                                <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
                            </div>

                            <div className="mt-6 md:text-center pr-4">
                                <span className="text-5xl font-bold text-[rgba(255,255,255,0.05)] absolute top-4 left-4 -z-1 select-none">
                                    {step.num}
                                </span>
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-sm text-gray-400">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
