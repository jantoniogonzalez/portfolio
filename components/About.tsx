import React from 'react'
import Image from 'next/image'
import BuildingBlocks from './BuildingBlocks'

type Props = {}

const About = (props: Props) => {
  return (
    <main className='relative mx-auto max-w-7xl h-screen flex flex-col flex-wrap items-center justify-center text-center overflow-hidden'>
        <h1 className='headings'>About</h1>
        <div className='flex space-x-16'>
            <div className='text-left max-w-xl'>
                <h1 
                className="font-extrabold font-serif text-3xl before:content-['Based_in_Vancouver,_Canada'] hover:before:content-['MADE_IN_COLOMBIA']
               hover:text-black hover:font-sans hover:font-extrabold"></h1>
                <p className='flex text-xl'>Born and raised in Bogota, Colombia, I am completing my undergraduate in computer science at Simon Fraser University. I love coding, but you already knew that. </p>
            </div>
            <div className=''>
                <BuildingBlocks/>
            </div>
        </div>
    </main>
  )
}

export default About

//<Image className='mx-20' src='/aboutpic.jpg' alt='Handsome boi' width={200} height={200}/>