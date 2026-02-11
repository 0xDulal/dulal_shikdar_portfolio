"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Finra",
        category: "Fintech",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600", // Placeholder
        color: "bg-emerald-500",
    },
    {
        title: "Reimagine",
        category: "Crypto",
        image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=1600", // Placeholder
        color: "bg-orange-500",
    },
    {
        title: "Smart AI",
        category: "SaaS",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600", // Placeholder
        color: "bg-blue-500",
    },
];

export default function SelectedWork() {
    return (
        <section id="work" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
                        <p className="text-gray-400 max-w-md">
                            We specialize in premium aesthetics for high-ticket coaches. Here is a glimpse of what is possible.
                        </p>
                    </div>
                    <button className="flex items-center gap-2 text-primary hover:text-white transition-colors">
                        View Full Portfolio <ArrowUpRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 ${project.color}`}>
                                {/* In a real scenario we'd use local images or reliable external ones. Using gradients/placeholders for now to ensure visual if image fails */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/10 backdrop-blur-md rounded-2xl translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex justify-between items-center">
                                        <span className="font-bold text-white">{project.title}</span>
                                        <ArrowUpRight className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
