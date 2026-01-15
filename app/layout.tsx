import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import LightRays from '@/components/LightRays';
import { CSPostHogProvider } from "./providers"; // Import the provider here

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevEvent",
  description: "The Hub for Developer Events",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CSPostHogProvider>
        <body
          className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen font-sans antialiased relative`}
        >
          {/* Background Layer: Fixed so it doesn't scroll away */}
          <div className="fixed inset-0 -z-10 h-full w-full bg-black/5">
            <LightRays
              raysColor="#5dfeca"
              raysSpeed={0.5}
              lightSpread={0.9}
              rayLength={1.4}
              followMouse={true}
              mouseInfluence={0.02}
              noiseAmount={0.0}
              distortion={0.01}
            />
          </div>

          {/* Content Layer */}
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
          </div>
        </body>
      </CSPostHogProvider>
    </html>
  );
}