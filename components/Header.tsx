//tsrafce to automatically create typescript component

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='sticky top-0 p-5 mx-auto max-w-7xl flex flex-row justify-between z-30'>
        <motion.div
        initial={{x:-500, opacity : 0, scale: 0.5}} 
        animate={{x:0, opacity: 1, scale: 1}} 
        transition={{type: "tween", delay: 0.5, duration: 1.5}} 
        className='flex flex-col items-center text-center'>
          <Link href="#hero">
            <Image src='/logo.svg' alt='logo' width={40} height={40}/>
            <p>juan.</p>
          </Link>
        </motion.div>
        <motion.div 
        initial={{x:500, opacity : 0, scale: 0.5}} 
        animate={{x:0, opacity: 1, scale: 1}}
        transition={{type: "tween", delay: 1, duration: 1.5}} 
        className='flex flex-row items-center'>
          <SocialIcon className='ease-in-out rounded-full hover:bg-sky-600' url="https://github.com/jantoniogonzalez" fgColor='white' bgColor='transparent'/> 
          <SocialIcon className='ease-in-out rounded-full hover:bg-sky-600'url="https://www.linkedin.com/in/juan-antonio-gonzalez-gomez-12b310221/" fgColor='white' bgColor='transparent'/>
          <SocialIcon className='ease-in-out rounded-full cursor-pointer hover:bg-sky-600' label='Get in touch' network='email' fgColor='white' bgColor='transparent'/>
          <p className='uppercase hidden md:inline-flex font-bold font-sans tracking-widest'>Get in touch</p>
        </motion.div>
    </header>
  )
}

export default Header