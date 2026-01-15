"use client";

import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Link from "next/link";

// Initialize Supabase client
// Ensure these environment variables are set in your .env.local file

export default function DemoPage() {
    const [dragActive, setDragActive] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        coachName: '',
        clubName: '',
        email: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            validateAndSetFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            validateAndSetFile(e.target.files[0]);
        }
    };

    const validateAndSetFile = (file: File) => {
        const maxSize = 50 * 1024 * 1024; // 50MB
        if (file.size > maxSize) {
            setErrorMessage("File size exceeds 50MB limit.");
            setFile(null); // Clear any previously selected file
            return;
        }
        setErrorMessage(''); // Clear previous error if any
        setFile(file);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file || !formData.coachName || !formData.clubName || !formData.email) {
            setErrorMessage("Please fill in all fields and upload a video.");
            return;
        }

        setStatus('uploading');
        setErrorMessage('');

        try {
            // 1. Upload to Supabase Storage
            const fileExt = file.name.split('.').pop();
            const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`;
            const { error: uploadError } = await supabase.storage
                .from('videos')
                .upload(fileName, file);

            if (uploadError) throw uploadError;

            // 2. Get Public URL
            const { data: { publicUrl } } = supabase.storage
                .from('videos')
                .getPublicUrl(fileName);

            // 3. Insert into Database
            const { error: dbError } = await supabase
                .from('coach_submissions')
                .insert([
                    {
                        name: formData.coachName,
                        club_name: formData.clubName,
                        email: formData.email,
                        video_url: publicUrl
                    }
                ]);

            if (dbError) throw dbError;

            setStatus('success');
            setFile(null);
            setFormData({ coachName: '', clubName: '', email: '' });

        } catch (error: any) {
            console.error('Submission error:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    if (status === 'success') {
        return (
            <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 animate-fade-in">
                <div className="glass-card p-12 rounded-2xl border border-[var(--primary)] text-center max-w-lg">
                    <div className="text-6xl mb-6">✅</div>
                    <h1 className="text-3xl font-bold mb-4">Request Received!</h1>
                    <p className="text-gray-400 mb-8">
                        Thank you for your interest. We've received your details and footage.
                        Our team will process the demo and contact you at <span className="text-white">{formData.email}</span> shortly.
                    </p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="px-8 py-3 rounded-full bg-[var(--primary)] text-black font-bold hover:bg-[#00e67a] transition-colors"
                    >
                        Submit Another
                    </button>
                    <div className="mt-8">
                        <Link href="/" className="text-sm text-gray-500 hover:text-white transition-colors">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden flex flex-col items-center justify-center p-6">

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--primary)] opacity-10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--secondary)] opacity-10 blur-[120px] rounded-full"></div>
            </div>

            <div className="relative z-10 w-full max-w-4xl animate-fade-in">

                {/* Header */}
                <div className="text-center mb-12">
                    <Link href="/" className="inline-block mb-8 text-gray-500 hover:text-white transition-colors">
                        ← Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Request a <span className="neon-text-green">Demo</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Experience the power of FUTVIZ tailored to your club's footage.
                        Upload a sample and let our AI generate the insights.
                    </p>
                </div>

                {/* Form Container */}
                <div className="glass-card p-8 md:p-12 rounded-2xl border border-[var(--card-border)] shadow-2xl">
                    <form className="space-y-8" onSubmit={handleSubmit}>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Personal Details */}
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Coach Name</label>
                                    <input
                                        type="text"
                                        name="coachName"
                                        required
                                        value={formData.coachName}
                                        onChange={handleInputChange}
                                        placeholder="e.g. Pep Guardiola"
                                        className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all placeholder-gray-600"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Club Name</label>
                                    <input
                                        type="text"
                                        name="clubName"
                                        required
                                        value={formData.clubName}
                                        onChange={handleInputChange}
                                        placeholder="e.g. Manchester City"
                                        className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all placeholder-gray-600"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-300 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="coach@club.com"
                                        className="w-full bg-black/30 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all placeholder-gray-600"
                                    />
                                </div>
                            </div>

                            {/* File Upload Section */}
                            <div className="flex flex-col">
                                <label className="block text-sm font-bold text-gray-300 mb-2">Upload Match Footage (Max 50MB)</label>
                                <div
                                    className={`flex-1 border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-6 text-center transition-all cursor-pointer ${dragActive
                                        ? "border-[var(--primary)] bg-[var(--primary)]/10"
                                        : "border-gray-700 hover:border-gray-500 bg-black/20"
                                        }`}
                                    onDragEnter={handleDrag}
                                    onDragLeave={handleDrag}
                                    onDragOver={handleDrag}
                                    onDrop={handleDrop}
                                    onClick={() => document.getElementById('file-upload')?.click()}
                                >
                                    <input
                                        id="file-upload"
                                        type="file"
                                        className="hidden"
                                        onChange={handleChange}
                                        accept="video/*"
                                    />

                                    {file ? (
                                        <div className="animate-fade-in">
                                            <div className="text-4xl mb-3">🎬</div>
                                            <p className="text-white font-semibold break-all">{file.name}</p>
                                            <p className="text-sm text-gray-400 mt-1">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="w-12 h-12 mb-4 rounded-full bg-[var(--accent-gray)] flex items-center justify-center">
                                                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                                </svg>
                                            </div>
                                            <p className="text-gray-300 font-medium mb-1">Click to upload or drag & drop</p>
                                            <p className="text-xs text-gray-500">MP4, AVI, or MOV</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4 border-t border-gray-800">
                            {errorMessage && (
                                <p className="text-red-500 text-center mb-4">{errorMessage}</p>
                            )}
                            <button
                                type="submit"
                                disabled={status === 'uploading'}
                                className={`w-full py-4 rounded-xl bg-[var(--primary)] text-black font-bold text-lg transition-all transform hover:scale-[1.01] shadow-[0_0_20px_rgba(0,255,136,0.3)] ${status === 'uploading' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#00e67a]'
                                    }`}
                            >
                                {status === 'uploading' ? 'Uploading & Submitting...' : 'Request Demo Access'}
                            </button>
                        </div>

                        <p className="text-center text-xs text-gray-500 mt-4">
                            By submitting, you agree to allow FUTVIZ to process the uploaded video for demonstration purposes.
                        </p>
                    </form>
                </div>
            </div>
        </main>
    );
}
