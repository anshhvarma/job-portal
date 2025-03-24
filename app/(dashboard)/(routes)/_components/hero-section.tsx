'use client'

import cursorYou from '@/assets/cursor-you.svg'
import { Button } from "@/components/ui/button"

export default function HeroSection() {
    return (
        <section className="py-24 overflow-x-clip" style={{
            cursor: `url(${cursorYou.src}), auto`
        }}>
            <div className="container pt-24 relative">
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ $7.5 Annual Income
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful Jobs, created efforlessly
                </h1>
                <div className="flex justify-center mt-10">
                    <Button className="bg-black text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg transform transition-transform hover:scale-105">
                        <a href="/search" className="flex items-center gap-2">
                            Explore Jobs
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}