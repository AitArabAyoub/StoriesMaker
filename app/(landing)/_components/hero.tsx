import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div className='text-center'>
            <h2 className='text-3xl font-bold w-full md:w-[600px] mb-3'>Discover And Share Inspring Carrer Journies</h2>
            <p className='w-full md:w-[500px] mx-auto mb-3'>StoryMaker is an innovative platform designed for storytellers of all kinds. Whether you're a seasoned writer or a beginner with a story to tell, StoryMaker provides a vibrant community and a creative space to craft, share, and discover stories.</p>
            <Image src="/hero.JPG" alt='hero' className='mx-auto' width={500} height={300}/>
        </div>
    )
}

export default Hero
