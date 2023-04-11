import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const BuildingBlocks = (props: Props) => {
  return (
    <motion.div className='relative flex flex-col-reverse justify-center items-left'>
        <div className='flex '>
            <motion.div 
                className='cubes'
                animate={{
                    x:[-100, 0, 0, 0],
                    y:[-260, 0, 0, 0],
                    opacity: [0.2,0.5, 0.7, 1, 1, 1, 1, 1],
                    rotate: [-90, 0, 0, 0]
                }}
                transition={{
                    delay: 0, 
                    duration: 2.5,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatDelay: 3.5
                }}
            >S</motion.div>
            <motion.div 
                className='cubes'
                animate={{
                    x:[-100, 0, 0, 0],
                    y:[-260, 0, 0, 0],
                    opacity: [0.2,0.5, 0.7, 1, 1, 1, 1, 1],
                    rotate: [-90, 0, 0, 0]
                }}
                transition={{
                    delay: 0, 
                    duration: 2.5,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatDelay: 3.5
                }}
            >P</motion.div>
            <motion.div 
                className='cubes'
                animate={{
                    x:[-100, 0, 0, 0],
                    y:[-260, 0, 0, 0],
                    opacity: [0.2,0.5, 0.7, 1, 1, 1, 1, 1],
                    rotate: [-90, 0, 0, 0]
                }}
                transition={{
                    delay: 0, 
                    duration: 2.5,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatDelay: 3.5
                }}
            >O</motion.div>
            <motion.div 
                className='cubes'
                animate={{
                    x:[-100, 0, 0, 0],
                    y:[-260, 0, 0, 0],
                    opacity: [0.2,0.5, 0.7, 1, 1, 1, 1, 1],
                    rotate: [-90, 0, 0, 0]
                }}
                transition={{
                    delay: 0, 
                    duration: 2.5,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatDelay: 3.5
                }}
            >R</motion.div>
            <motion.div 
                className='cubes'
                animate={{
                    x:[-100, 0, 0, 0],
                    y:[-260, 0, 0, 0],
                    opacity: [0.2,0.5, 0.7, 1, 1, 1, 1, 1],
                    rotate: [-90, 0, 0, 0]
                }}
                transition={{
                    delay: 0, 
                    duration: 2.5,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatDelay: 3.5
                }}
            >T</motion.div>
            <motion.div 
                className='cubes'
                animate={{
                    x:[-100, 0, 0, 0],
                    y:[-260, 0, 0, 0],
                    opacity: [0.2,0.5, 0.7, 1, 1, 1, 1, 1],
                    rotate: [-90, 0, 0, 0]
                }}
                transition={{
                    delay: 0, 
                    duration: 2.5,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatDelay: 3.5
                }}
            >S</motion.div>
        </div>
        <div className='flex'>
            <motion.div 
                className='cubes'
                animate={{
                    x: [-140, 0, 0, 0],
                    y:[-220, 0, 0, 0],
                    opacity: [0.2,0.5, 0.7, 1, 1, 1, 1, 1],
                    rotate: [-90, 0, 0, 0]
                }}
                transition={{
                    delay: 0, 
                    duration: 3.5,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatDelay: 2.5
                }}
            >G</motion.div>
            <motion.div 
                className='cubes'
                animate={{
                    x: [-100, 0, 0, 0],
                    y:[-260, 0, 0, 0],
                    opacity: [0.2,0.5, 0.7, 1, 1, 1, 1, 1],
                    rotate: [-135, 0, 0, 0]
                }}
                transition={{
                    delay: 0, 
                    duration: 3.5,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatDelay: 2.5
                }}
            >A</motion.div>
            <motion.div 
                className='cubes'
                animate={{
                    x: [-140, 0, 0, 0],
                    y:[-220, 0, 0, 0],
                    opacity: [0.2,0.5, 0.7, 1, 1, 1, 1, 1],
                    rotate: [-90, 0, 0, 0]
                }}
                transition={{
                    delay: 0, 
                    duration: 3.5,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatDelay: 2.5
                }}
            >M</motion.div>
            <motion.div 
                className='cubes'
                animate={{
                    x: [-100, 0, 0, 0],
                    y:[-260, 0, 0, 0],
                    opacity: [0.2,0.5, 0.7, 1, 1, 1, 1, 1],
                    rotate: [-135, 0, 0, 0]
                }}
                transition={{
                    delay: 0, 
                    duration: 3.5,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatDelay: 2.5
                }}
            >E</motion.div>
            <motion.div 
                className='cubes'
                animate={{
                    x: [-140, 0, 0, 0],
                    y:[-220, 0, 0, 0],
                    opacity: [0.2,0.5, 0.7, 1, 1, 1, 1, 1],
                    rotate: [-90, 0, 0, 0]
                }}
                transition={{
                    delay: 0, 
                    duration: 3.5,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatDelay: 2.5
                }}
            >S</motion.div>
        </div>
        <div className='flex'>
            <motion.div 
                className='cubes'
                animate={{
                    x: [-180, 0, 0, 0],
                    y:[-260, 0, 0, 0],
                    opacity: [0.2,0.5, 0.7, 1, 1, 1, 1, 1],
                    rotate:[-90, 0, 0, 0]
                }}
                transition={{
                    delay: 0, 
                    duration: 4,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatDelay: 2
                }}>D</motion.div>
            <motion.div 
                className='cubes'
                animate={{
                    x:[-100, 0, 0, 0],
                    y:[-260, 0, 0, 0],
                    opacity: [0.2,0.5, 0.7, 1, 1, 1, 1, 1],
                    rotate: [-50, 0, 0, 0]
                }}
                transition={{
                    delay: 0, 
                    duration: 4,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatDelay: 2
                }}>O</motion.div>
            <motion.div
                className='cubes'
                animate={{
                    y:[-220, 0, 0, 0],
                    opacity: [0.2,0.5, 0.7, 1, 1, 1, 1, 1],
                    rotate: [-120, 0, 0, 0]
                }}
                transition={{
                    delay: 0, 
                    duration: 4,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatDelay: 2
                }}>G</motion.div>
            <motion.div
                className='cubes'
                animate={{
                    y:[-220, 0, 0, 0],
                    opacity: [0.2,0.5, 0.7, 1, 1, 1, 1, 1],
                    rotate: [-150, 0, 0, 0]
                }}
                transition={{
                    delay: 0, 
                    duration: 4,
                    ease: "easeIn",
                    repeat: Infinity,
                    repeatDelay: 2
                }}>S</motion.div>
        </div>
        <div className='flex '>
            <motion.div
            className='cubes'
            animate={{
                y:[-220, 0, 0, 0],
                opacity: [0.2,0.5, 0.7, 1, 1, 1, 1, 1],
                rotate: [-150, 0, 0, 0]
            }}
            transition={{
                delay: 0, 
                duration: 5,
                ease: "easeIn",
                repeat: Infinity,
                repeatDelay: 1
            }}>A</motion.div>
            <motion.div
            className='cubes'
            animate={{
                y:[-220, 0, 0, 0],
                opacity: [0.2,0.5, 0.7, 1, 1, 1, 1, 1],
                rotate: [-150, 0, 0, 0]
            }}
            transition={{
                delay: 0, 
                duration: 5,
                ease: "easeIn",
                repeat: Infinity,
                repeatDelay: 1
            }}>R</motion.div>
            <motion.div
            className='cubes'
            animate={{
                y:[-220, 0, 0, 0],
                opacity: [0.2,0.5, 0.7, 1, 1, 1, 1, 1],
                rotate: [-150, 0, 0, 0]
            }}
            transition={{
                delay: 0, 
                duration: 5,
                ease: "easeIn",
                repeat: Infinity,
                repeatDelay: 1
            }}>T</motion.div>
        </div>
    </motion.div>
  )
}

export default BuildingBlocks