"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        quote: "The design elevates my brand instantly. It feels premium, just like the service I offer.",
        author: "David Ross",
        role: "International Coach",
        stars: 5,
        tag: "10x higher conversion",
        image: "https://i.pravatar.cc/100?img=22",
    },
    {
        quote: "Finally, a website that captures the essence of my method and actually gets people to commit.",
        author: "Elena Rodriguez",
        role: "Wellness Expert",
        stars: 5,
        tag: "Fully booked Q3/Q4",
        image: "https://i.pravatar.cc/100?img=22",
    },
    {
        quote: "My old site was a brochure. The new one is a sales machine. I booked 15 calls in the first week.",
        author: "Sarah Jenkins",
        role: "Career Strategist",
        stars: 5,
        tag: "15 Calls in first week",
        image: "https://i.pravatar.cc/100?img=22",
    },
    {
        quote: "My old site was a brochure. The new one is a sales machine. I booked 15 calls in the first week.",
        author: "Sarah Jenkins",
        role: "Career Strategist",
        stars: 5,
        tag: "15 Calls in first week",
        image: "https://i.pravatar.cc/100?img=22",
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Number of cards to show based on screen size (handled via CSS, but logic needs to know)
    // On desktop we show 3, so max index should be length - 3
    const maxIndex = testimonials.length - 3;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    return (
        <section className="py-24 px-6 bg-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Real results for <span className="text-[#fb5d00]">real coaches</span>
                    </h2>
                </div>

                <div className="relative z-10 overflow-hidden px-4">
                    <motion.div
                        className="flex gap-8"
                        animate={{ x: `calc(-${currentIndex * (100 / 3)}% - ${currentIndex * (32 / 3)}px)` }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="w-full md:w-[calc(33.333%-21.33px)] p-8 rounded-3xl bg-black/40 border border-white/10 relative flex-shrink-0"
                            >
                                <div className="flex gap-1 mb-4 text-[#fb5d00]">
                                    {[...Array(testimonial.stars)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-lg mb-8 leading-relaxed">&quot;{testimonial.quote}&quot;</p>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden relative">
                                        <img
                                            src={index === 1 ? "/images/avatars/avatar_1.png" : `https://i.pravatar.cc/100?img=${index + 20}`}
                                            alt={testimonial.author}
                                            className="w-full h-full object-cover relative z-10"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-br from-gray-500 to-gray-800" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{testimonial.author}</h4>
                                        <p className="text-xs text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>

                                <div className="mt-6 inline-block px-3 py-1 rounded bg-[#fb5d00]/10 text-[#fb5d00] text-[12px] font-normal border border-[#fb5d00]/20">
                                    {testimonial.tag}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Navigation buttons */}
                    <div className="flex justify-center gap-4 mt-12">
                        <button
                            onClick={prevSlide}
                            className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
