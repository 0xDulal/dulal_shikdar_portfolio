import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk, Poppins } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dulal Shikdar - Web Architect & Security Specialist",
  description: "Dulal Shikdar is a web architect and security specialist with over 8 years of experience in the industry.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${poppins.variable} font-sans antialiased min-h-screen relative bg-black text-foreground selection:bg-primary selection:text-white`}
      >
        {/* Modern Animated Background */}
        <div className="fixed inset-0 -z-30 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse"
            style={{ animationDuration: '8s' }}
          />
          <div
            className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[100px] animate-pulse"
            style={{ animationDuration: '12s', animationDelay: '2s' }}
          />
          <div
            className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[150px] animate-pulse"
            style={{ animationDuration: '10s', animationDelay: '1s' }}
          />
        </div>

        {/* Background Overlay for Glassmorphism */}
        <div className="fixed inset-0 -z-10 bg-black/40 backdrop-blur-[2px]" />

        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
