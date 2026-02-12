"use client";

import { ArrowRight, Instagram, Linkedin, Twitter, X } from "lucide-react";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";

export default function Footer() {
    return (
        <footer className="pt-24 pb-8 px-6 border-t border-white/5 bg-black/40 backdrop-blur-md text-center relative overflow-hidden">

            <div className="max-w-4xl mx-auto mb-20 relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-none">
                    Ready to turn visitors <br />
                    into <span className="text-[#fb5d00]">paying clients?</span>
                </h2>
                <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                    Stop leaving money on the table with a website that doesn't convert. Let's build your empire.
                </p>
                <Link href={useAppSelector((state) => state.ui.bookingUrl)} target="_blank" className="inline-flex items-center gap-2 px-8 py-4 bg-[#fb5d00] text-white rounded-full font-bold hover:bg-[#ff7c2f] transition-transform hover:scale-105">
                    Let's book a 1:1 Call
                    <ArrowRight className="w-5 h-5" />
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
