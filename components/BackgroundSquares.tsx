import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

// const BackgroundCircles = (props: Props) => {
//     return (
//       <motion.div 
//         className='relative flex justify-center items-center'
//         initial={{opacity: 0, scale: 4}}
//         animate={{scale:[4,1], opacity:1}}
//         transition={{duration: 1.5, delay: 1}}
//       >
//           <div
//               className='absolute mt-52 border rounded-full border-white h-[560px] w-[560px] animate-pulse'
//             >        
//           </div>
//           <div
//               className='absolute mt-52 border rounded-full border-white h-[600px] w-[600px] animate-pulse'
//               >        
//           </div>
//       </motion.div>
//     )
//   }

const BackgroundSquares = (props: Props) => {
  return (
    <motion.div 
        className='relative flex justify-center items-center pt-20 z-0'
        initial={{opacity: 0, scale: 4}}
        animate={{scale:[4,1], opacity:1}}
        transition={{duration: 1.5, delay: 0.5}}
    >
        <motion.div
            className='absolute mt-52 border border-white h-[560px] w-[560px] animate-pulse'
            animate={{
                rotate: [0, 360], // 157.5, 135,112.5, 90,67.5, 45
            }}
            transition={{
                delay: 2, 
                duration: 30,
                ease: "easeIn",
                times: [], //0, 0.75, 1.5, 2.75, 3.5, 4.25, 5, 5.75, 6.5, 7.25, 8, 8.75, 9.5
                repeat: Infinity,
                repeatDelay: 0
            }}
            >        
        </motion.div>
        
        <motion.div
            className='absolute mt-52 border border-white h-[560px] w-[560px] animate-pulse'
            animate={{
                rotate: [360, 0], // 157.5, 135,112.5, 90,67.5, 45
            }}
            transition={{
                delay: 2,
                duration: 30,
                ease: "easeIn",
                times: [], //0, 0.75, 1.5, 2.75, 3.5, 4.25, 5, 5.75, 6.5, 7.25, 8, 8.75, 9.5
                repeat: Infinity,
                repeatDelay: 0
            }}
            >        
        </motion.div>
    </motion.div>
  )
}

export default BackgroundSquares

