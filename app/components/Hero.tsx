"use client";

import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
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


                <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight leading-none">
                    <TextAnimate animation="blurIn" by="character" as="span" children="Turn Your Coaching Website" />
                    <br />
                    <TextAnimate animation="blurIn" by="character" as="span" delay={0.4} children="Into a " />
                    <TextAnimate animation="blurIn" by="character" as="span" className="text-primary" delay={0.6} children="Client-Booking Machine" />
                </h1>

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
                    <Link href={useAppSelector((state) => state.ui.bookingUrl)} target="_blank" className="flex items-center gap-2 px-8 py-4 bg-[#fb5d00] text-white rounded-full font-bold hover:bg-[#ff7c2f] transition-transform hover:scale-105">
                        Let's book a 1:1 Call
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link href={useAppSelector((state) => state.ui.portfolioUrl)} target="_blank" className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-colors">
                        <Play className="w-4 h-4 fill-current" />
                        View Portfolio
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="pt-12 flex justify-center items-center gap-4"
                >
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
                                <img
                                    src={`https://i.pravatar.cc/1080?img=${i + 10}`}
                                    alt="User"
                                    className="w-full h-full object-cover"
                                />
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
