"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";

const features = [
    "Custom High-Converting Design",
    "Mobile + SEO Response",
    "Booking System Integration",
    "Payment Gateway Setup",
    "Lead Magnet Funnel Setup",
    "We Write Copywriting Assets",
    "SEO Best Practices",
    "2 Weeks Post-Launch Support",
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
                <p className="text-gray-400">One comprehensive package. No hidden fees. Everything you need to scale.</p>
            </div>

            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 flex flex-col md:flex-row gap-12"
                >
                    <div className="flex-1 space-y-6">
                        <div className="inline-block px-3 py-1 bg-[#fb5d00] text-white text-[12px] font-normal rounded mb-2">MOST POPULAR</div>
                        <h3 className="text-3xl font-bold">The Authority Package</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Everything you need to launch, look professional, and start booking clients immediately. We handle the tech, you handle the business.
                        </p>

                        <div className="pt-4">
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold">$2,997</span>
                                <span className="text-gray-400">one-time</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Payment plans available upon request.</p>
                        </div>

                        <Link
                            href={useAppSelector((state) => state.ui.bookingUrl)}
                            target="_blank"
                            className="w-full py-4 bg-[#fb5d00] text-white font-bold rounded-xl mt-4 hover:bg-[#ff7c2f] transition-all hover:scale-[1.02] active:scale-[0.98] flex justify-center items-center gap-2 shadow-lg shadow-primary/20"
                        >
                            Let&apos;s book a 1:1 Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <p className="text-[10px] text-center text-gray-500">100% Satisfaction Guarantee</p>
                    </div>

                    <div className="flex-1 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
                        <h4 className="text-sm font-bold text-gray-300 mb-6">• What's Included</h4>
                        <ul className="space-y-4">
                            {features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-[#fb5d00]" />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
