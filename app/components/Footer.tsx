"use client";

import { ArrowRight, Instagram, Linkedin, Twitter, X } from "lucide-react";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";

export default function Footer() {
    return (
        <footer className="pt-24 pb-8 px-6 border-t border-white/5 bg-black/40 backdrop-blur-md text-center relative overflow-hidden">

            <div className="max-w-4xl mx-auto mb-20 relative z-10 px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-[1.2] md:leading-none">
                    Ready to turn visitors <br />
                    into <span className="text-[#fb5d00]">paying clients?</span>
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                    Stop leaving money on the table with a website that doesn&apos;t convert. Let&apos;s build your empire.
                </p>
                <Link href={useAppSelector((state) => state.ui.bookingUrl)} target="_blank" className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-[#fb5d00] text-white rounded-full text-sm md:text-base font-bold hover:bg-[#ff7c2f] transition-transform hover:scale-105">
                    Let&apos;s book a 1:1 Call
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </Link>
            </div>

            <div className="flex justify-center gap-6 mb-16 text-gray-500">
                <Link href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></Link>
                <Link href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></Link>
                <Link href="#" className="hover:text-white transition-colors"><X className="w-5 h-5" /></Link>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 border-t border-white/5 pt-8">
                <p>shikdardulal@gmail.com</p>
                <p>© 2024 Dulal Shikdar. All rights reserved.</p>
            </div>
        </footer>
    );
}
