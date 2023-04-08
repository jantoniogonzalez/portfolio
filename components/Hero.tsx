import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

const Hero = (props: Props) => {
  return (
    <main className='mx-auto max-w-7xl flex flex-col items-center text-center p-20'>
        <BackgroundCircles/>
        <div className=''>Image</div>
            <Typewriter 
                words={["<>Hi, I'm Juan</>", "<>Welcome to my portfolio</>", "<>I love this animation</>", "<>lol</>"]}
                loop={false}
                cursor
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}    
            />
            <div>Cool Animation</div>
            <div>Links</div>
    </main>
  )
}

export default Hero