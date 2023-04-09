//tsrafce to automatically create typescript component

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 p-5 mx-auto max-w-7xl flex flex-row justify-between'>
        <motion.div
        initial={{x:-500, opacity : 0, scale: 0.5}} 
        animate={{x:0, opacity: 1, scale: 1}} 
        transition={{type: "tween", delay: 0.5, duration: 1.5}} 
        className='flex space-x-4 items-center'>
            <SocialIcon className='ease-in-out rounded-full hover:bg-sky-600' url="https://github.com/jantoniogonzalez" fgColor='white' bgColor='transparent'/> 
            <SocialIcon className='ease-in-out rounded-full hover:bg-sky-600'url="https://www.linkedin.com/in/juan-antonio-gonzalez-gomez-12b310221/" fgColor='white' bgColor='transparent'/>
        </motion.div>
        <motion.div 
        initial={{x:500, opacity : 0, scale: 0.5}} 
        animate={{x:0, opacity: 1, scale: 1}}
        transition={{type: "tween", delay: 1, duration: 1.5}} 
        className='flex flex-row items-center'>
            <SocialIcon className='ease-in-out rounded-full cursor-pointer hover:bg-sky-600' label='Get in touch' network='email' fgColor='white' bgColor='transparent'/>
            <p className='uppercase hidden md:inline-flex font-bold font-sans tracking-widest'>Get in touch</p>
        </motion.div>
    </header>
  )
}

export default Header