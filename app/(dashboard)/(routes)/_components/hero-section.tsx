'use client'
import demoImg1 from "@/assets/design-example-1.png"
import demoImg2 from "@/assets/design-example-2.png"
import Image from "next/image"
import Pointer from "@/components/Pointer"
import { motion, useAnimate } from "framer-motion"
import { useEffect } from "react"
import cursorYou from '@/assets/cursor-you.svg'


export default function HeroSection() {

    const [ leftDesignScope, leftDesignanimate ] =useAnimate();
    const [ leftPointerScope, leftPointeranimate ] =useAnimate();
    const [ rightDesignScope, rightDesignanimate ] =useAnimate();
    const [ rightPointerScope, rightPointeranimate ] =useAnimate();

    // useEffect(()=>{
    //     leftDesignanimate([
    //         [leftDesignScope.current, {opacity:[1]}, {duration: 0.5}],
    //         [leftDesignScope.current, {y:0, x:0},{duration : 0.5}]
    //     ]);
    //     leftPointeranimate([
    //         [leftPointerScope.current, {opacity: 1}, {duration: 0.5}],
    //         [leftPointerScope.current, {y: 0, x:-100}, {duration: 0.5}],
    //         [leftPointerScope.current, {x:0, y:[0,16,0]}, {duration: 0.5, ease: 'easeInOut'}],
    //     ]);
    //     rightDesignanimate([
    //         [rightDesignScope.current, {opacity:[1]}, {duration: 0.5, delay:1.5}],
    //         [rightDesignScope.current, {y:0, x:0},{duration : 0.5}]
    //     ]);
    //     rightPointeranimate([
    //         [rightPointerScope.current, {opacity: 1}, {duration: 0.5, delay: 1.5}],
    //         [rightPointerScope.current, {y: 0, x:175}, {duration: 0.5}],
    //         [rightPointerScope.current, {x:0, y:[0,20,0]}, {duration: 0.5, ease: 'easeInOut'}],
    //     ]);
    // })

    return (
        <section className="py-24 overflow-x-clip  " style={{
            cursor:`url(${cursorYou.src}), auto`
        }}>
            <div className="container pt-24 relative">
                {/* <motion.div ref={leftDesignScope}
                initial={{opacity: 0 , y: 100, x: -100}}
                className="absolute -left-32 top-16 hidden lg:block"
                drag
                >
                    <Image
                        src={demoImg1}
                        alt="Design example 1"
                        draggable='false'
                    />
                </motion.div>
                <motion.div ref={leftPointerScope} initial={{opacity: 0, y: 100, x: -200}} className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Ansh" />
                </motion.div>
                <motion.div ref={rightDesignScope}  initial={{opacity: 0, x:100, y:100}}  className="absolute -right-64 -top-16 hidden lg:block" drag>
                    <Image
                        src={demoImg2}
                        alt="Design example 2"
                        draggable='false'
                    />
                </motion.div>

                <motion.div ref={rightPointerScope} initial={{opacity:0, x: 275 ,y: 100}} className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="admin" />
                </motion.div> */}

                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ $7.5 Annual Income
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful Jobs, created efforlessly
                </h1>
                <p className="text-center text-xl text-black mt-8 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptates perferendis tenetur eum nihil inventore distinctio adipisci nobis. Cupiditate reiciendis ut harum doloribus aspernatur dolorem exercitationem in, quis nulla commodi.
                </p>
            </div>
        </section>
    )

}
