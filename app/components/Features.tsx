"use client";

import { motion } from "framer-motion";
import { Copy, Layers, Layout, MousePointer2, Smartphone, TrendingUp } from "lucide-react";

const features = [
    {
        title: "Strategic Funnels",
        description: "Psychologically guided layouts that turn cold traffic into booked appointments.",
        icon: Layers,
        tag: "Free Guide",
        colSpan: 1,
    },
    {
        title: "Smart Payments",
        description: "Seamless integration with Stripe & PayPal. Get paid while you sleep.",
        icon: Layout,
        tag: "100% Fast",
        colSpan: 1,
    },
    {
        title: "Persuasive Copy",
        description: "Words that resonate with your ideal client and drive them to action.",
        icon: Copy,
        tag: "Conversion",
        colSpan: 1,
    },
    {
        title: "Mobile First",
        description: "Flawless experience on every device. Your clients are on mobile, your site should be too.",
        icon: Smartphone,
        tag: "2x More Traffic",
        colSpan: 2,
    },
    {
        title: "SEO & Analytics",
        description: "Built-in SEO best practices and analytics setup to track growth and dominate search.",
        icon: TrendingUp,
        tag: "Ranking",
        colSpan: 1,
    },
];

export default function Features() {
    return (
        <section id="benefits" className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold tracking-widest text-[#fb5d00] uppercase mb-4 block">Why Work With Us</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-none">
                        The Ecosystem for <br />
                        <span className="text-[#fb5d00]">High-Ticket Growth</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We fuse psychology, design, and technology to build platforms that don&apos;t just exist; they sell.
                    </p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0 }
                            }}
                            className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-primary/10 ${feature.colSpan === 2 ? "md:col-span-2" : ""
                                }`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <feature.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                                </div>
                                {feature.tag && (
                                    <span className="text-[12px] font-semibold px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                                        {feature.tag}
                                    </span>
                                )}
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
