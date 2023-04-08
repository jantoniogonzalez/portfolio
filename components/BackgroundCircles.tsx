import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const rotateInterval1 = [45];
let value = 45;
for(let i = 0; i< 16; i++){
    value = value + 11.25;
    rotateInterval1.push(value);
}

const rotateInterval2 = [180];
let value2 = 180;
for(let i = 0; i< 16; i++){
    value2 = value2 - 11.25;
    rotateInterval2.push(value2);
}


const BackgroundCircles = (props: Props) => {
  return (
    <div className='relative flex justify-center items-center'>
        <motion.div
            className='absolute mt-52 border rounded-lg border-yellow-200 h-[200px] w-[200px] animate-pulse'
            animate={{
                rotate: rotateInterval1, // 157.5, 135,112.5, 90,67.5, 45
            }}
            transition={{
                duration: 30,
                ease: "easeIn",
                times: [], //0, 0.75, 1.5, 2.75, 3.5, 4.25, 5, 5.75, 6.5, 7.25, 8, 8.75, 9.5
                repeat: Infinity,
                repeatDelay: 0
            }}
            >        
        </motion.div>
        <motion.div
            className='absolute mt-52 border rounded-lg border-red-200 h-[200px] w-[200px] animate-pulse'
            animate={{
                rotate: rotateInterval2, // 157.5, 135,112.5, 90,67.5, 45
            }}
            transition={{
                duration: 30,
                ease: "easeIn",
                times: [], //0, 0.75, 1.5, 2.75, 3.5, 4.25, 5, 5.75, 6.5, 7.25, 8, 8.75, 9.5
                repeat: Infinity,
                repeatDelay: 0
            }}
            >        
        </motion.div>
    </div>
  )
}

export default BackgroundCircles