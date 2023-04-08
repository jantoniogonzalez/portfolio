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
        transition={{type: "tween", delay: 1, duration: 1.5}} 
        className='flex space-x-4 items-center'>
            <SocialIcon className='rounded-full hover:bg-slate-100' url="https://github.com/jantoniogonzalez" fgColor='gray' bgColor='transparent'/> 
            <SocialIcon className='rounded-full hover:bg-slate-100'url="https://www.linkedin.com/in/juan-antonio-gonzalez-gomez-12b310221/" fgColor='gray' bgColor='transparent'/>
        </motion.div>
        <motion.div 
        initial={{x:500, opacity : 0, scale: 0.5}} 
        animate={{x:0, opacity: 1, scale: 1}}
        transition={{type: "tween", delay: 1, duration: 1.5}} 
        className='flex flex-row items-center'>
            <SocialIcon className='rounded-full cursor-pointer hover:bg-slate-100' label='Get in touch' network='email' fgColor='gray' bgColor='transparent'/>
            <p className='uppercase hidden md:inline-flex'>Get in touch</p>
        </motion.div>
    </header>
  )
}

export default Header