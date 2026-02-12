
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Portfolio", href: "#work" },
        { name: "Pricing", href: "#pricing" },
        { name: "Benefits", href: "#benefits" },
    ];

    return (
        <>
            <nav className="fixed top-6 left-0 right-0 z-50 mx-4">
                <div className="max-w-5xl mx-auto bg-[#1C1C1C]/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-black/20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-black font-bold text-sm">P</span>
                        </div>
                        <span className="font-bold text-white tracking-tight">Portfolio</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            className="flex items-center gap-2 px-5 py-2 bg-[#fb5d00] text-black rounded-full text-sm font-semibold hover:bg-[#ff7c2f] transition-colors"
                        >
                            Book a Call
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-1"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed top-24 left-4 right-4 z-40 bg-[#1C1C1C] border border-white/10 rounded-2xl p-6 md:hidden flex flex-col gap-4 shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-gray-300 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className="flex items-center justify-center gap-2 px-5 py-3 bg-primary text-black rounded-full text-base font-semibold"
                            onClick={() => setIsOpen(false)}
                        >
                            Let's book a 1:1 Call
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

