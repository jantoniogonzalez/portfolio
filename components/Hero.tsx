import React from 'react'
import BackgroundCircles from './BackgroundCircles'
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: ["Hi, I'm Juan", "Welcome to my portfolio!", "It's all blue daba dee daba da"],
    loop: 0
  })

  return (
    <main className='mx-auto max-w-7xl h-screen flex flex-col flex-wrap items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
          <Image className='rounded-full' src='/profpic2.jpg' alt='Pic of Juan' height={200} width={200}/>
          <h3 className='font-thin font-sans uppercase tracking-[8px] pt-3 pb-1 text-sm'>software engineer</h3>
          <h1 className='font-extrabold font-serif text-3xl capitalize break-words'>
            <span>{text}</span>
            <Cursor cursorColor='white'/>
          </h1>
          <div className='flex justify-evenly z-10'>
            <Link href='#about'>
              <button className='heroButton'>About</button>
            </Link>
            <Link href='#skills'>
              <button className='heroButton'>Skills</button>
            </Link>
            <Link href='#projects'>
              <button className='heroButton'>Projects</button>
            </Link>
          </div>
    </main>
  )
}

export default Hero
