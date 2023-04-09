import React from 'react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <main className='mx-auto max-w-7xl h-screen flex flex-col flex-wrap items-center justify-center text-center overflow-hidden'>
        <h1 className='font-extrabold font-serif text-3xl capitalize break-words mb-20'>About</h1>
        <div className='flex flex-row'>
            <div>
                <Image className='mx-20 rounded-full' src='/aboutpic.jpg' alt='Sfu logo' width={200} height={200}/>
                <p className='flex items-center mx-20 text-left text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            <div>
                <Image className='mx-20' src='/aboutpic.jpg' alt='Handsome boi' width={200} height={200}/>
                <p className='flex items-center mx-20 text-left text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
            <div>
                <Image className='mx-20' src='/aboutpic.jpg' alt='Handsome boi' width={200} height={200}/>
                <p className='flex items-center mx-20 text-left text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            </div>
        </div>
    </main>
  )
}

export default About