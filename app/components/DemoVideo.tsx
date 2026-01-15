export default function DemoVideo() {
    return (
        <section className="section-padding bg-black relative">
            <div className="container mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">See It In Action</h2>
                    <p className="text-gray-400">Watch how FUTVIZ analyzes match footage in real-time.</p>
                </div>

                <div className="max-w-5xl mx-auto relative group">
                    {/* Glowing effect behind the video */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

                    {/* Video Container */}
                    <div className="relative rounded-2xl overflow-hidden bg-[var(--accent-dark)] aspect-video border border-[var(--card-border)] shadow-2xl">

                        <video
                            className="w-full h-full object-cover"
                            controls
                            muted
                            autoPlay
                            loop
                            poster="/hero-bg.jpg"
                        >
                            <source src="/website-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>



                    </div>

                    {/* Decorative Corner Accents */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[var(--primary)] rounded-tl-lg pointer-events-none"></div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[var(--secondary)] rounded-br-lg pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
}
