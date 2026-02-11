"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />

            <div className="max-w-4xl mx-auto text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-primary mb-4"
                >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    ACCEPTING NEW CLIENTS FOR Q3
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
                >
                    Turn Your Coaching Website <br />
                    Into a <span className="text-secondary-foreground text-[#fb5d00]">Client-Booking Machine</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
                >
                    We build high-converting websites for coaches & trainers — so you can focus on transforming lives while your website does the selling.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button className="flex items-center gap-2 px-8 py-4 bg-[#fb5d00] text-black rounded-full font-bold hover:bg-[#ff7c2f] transition-transform hover:scale-105">
                        Let's book a 1:1 Call
                        <ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-colors">
                        <Play className="w-4 h-4 fill-current" />
                        View Portfolio
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="pt-12 flex flex-col items-center gap-4"
                >
                    <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-gray-500 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600" />
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500">Trusted by 100+ Coaches</p>
                </motion.div>

                {/* Logos */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="pt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale"
                >
                    {['IPCLM', 'LOHO', 'ZENN', 'IFM', 'THEN'].map((logo) => (
                        <span key={logo} className="text-xl font-bold font-serif">{logo}</span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
