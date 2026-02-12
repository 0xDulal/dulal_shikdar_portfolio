"use client";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/lib/hooks";
import { TextAnimate } from "@/components/ui/text-animate";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />

            <div className="max-w-5xl mx-auto text-center space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-primary mb-4"
                >
                    <AnimatedShinyText className="inline-flex gap-2 items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-white">Accepting New Clients for Q3</span>
                    </AnimatedShinyText>
                </motion.div>


                <h1 className="text-4xl md:text-7xl font-display font-bold tracking-tight leading-[1.1] mb-4">
                    <TextAnimate animation="blurInUp" by="word" as="span">Turn Your Coaching Website</TextAnimate>
                    <br />
                    <TextAnimate animation="blurInUp" by="word" as="span" delay={0.3}>Into a </TextAnimate>
                    <TextAnimate animation="blurInUp" by="word" as="span" className="text-primary italic" delay={0.5}>Client-Booking Machine</TextAnimate>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                >
                    We design premium, high-converting platforms for world-class coaches.
                    <span className="block text-white font-medium mt-2">Stop settling for mediocre. Start scaling with authority.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
                >
                    <Link href={useAppSelector((state) => state.ui.bookingUrl)} target="_blank" className="relative group overflow-hidden px-10 py-5 bg-[#fb5d00] text-white rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20">
                        <span className="relative z-10 flex items-center gap-2">
                            Strategy Session <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    </Link>
                    <Link href={useAppSelector((state) => state.ui.portfolioUrl)} target="_blank" className="flex items-center gap-2 px-10 py-5 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 hover:border-white/20 transition-all">
                        <Play className="w-4 h-4 fill-current text-primary" />
                        Our Process
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="pt-16 flex flex-col items-center gap-4"
                >
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="relative w-12 h-12 rounded-full border-2 border-primary bg-black overflow-hidden ring-4 ring-black/50">
                                <Image
                                    src={i === 1 ? "/images/avatars/avatar_1.png" : `https://i.pravatar.cc/100?img=${i + 20}`}
                                    alt="Expert Coach"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <span key={s} className="text-primary text-lg">★</span>
                            ))}
                        </div>
                        <p className="text-sm font-medium text-gray-400">Trusted by <span className="text-white">100+ Seven-Figure Coaches</span></p>
                    </div>
                </motion.div>

                {/* Logos */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="pt-16 relative flex overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
                >
                    <motion.div
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            ease: "linear",
                            duration: 35,
                            repeat: Infinity,
                        }}
                        className="flex items-center min-w-max"
                    >
                        {/* Repeat the logos multiple times to ensure coverage and seamless loop */}
                        {[...Array(4)].map((_, groupIndex) => (
                            <div key={groupIndex} className="flex items-center gap-16 pr-16">
                                {['Zer0Byte', 'Idievo', 'PixiPair', 'TechForce', 'Codievo', 'Galazy'].map((logo, i) => (
                                    <span key={`${groupIndex}-${i}`} className="text-xl font-bold font-serif text-gray-400">{logo}</span>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
