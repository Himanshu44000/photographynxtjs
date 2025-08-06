"use client"
import React from 'react'
import { WavyBackground } from './ui/wavy-background'
import { AnimatedTooltip } from "./ui/animated-tooltip";


const instructors = [
  {
    id: 1,
    name: 'Elena Briggs',
    designation: 'Portrait Photography Expert',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    name: 'Marcus Reid',
    designation: 'Wildlife Photographer',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=3540&q=80',
  },
  {
    id: 3,
    name: 'Julia Zhang',
    designation: 'Fashion Photography Mentor',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    name: 'Andre Gomez',
    designation: 'Street Photography Specialist',
    image:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
  },
];

function Instructors() {
    return (
  <div className='relative h-[40rem] overflow-hidden flex items-center justify-center'>
    <WavyBackground className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'>

      {/* Section Heading */}
      <h2 className='py-9 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500'>
        Meet Our Instructors
      </h2>

      {/* Short About Paragraph */}
      <p className='mt-4 font-medium text-base md:text-lg text-neutral-300 max-w-2xl mx-auto text-center'>
        Our instructors are more than just photographers — they are mentors, artists, and industry professionals with years of experience behind the lens. Whether you are learning the basics or mastering advanced techniques, our team is here to guide you every step of the way.
      </p>

      {/* Tooltip Section (Instructor Cards/Avatars) */}
      <div className='flex flex-row items-center justify-center mt-10 w-full'>
        <AnimatedTooltip items={instructors} />
      </div>

    </WavyBackground>
  </div>
);

}

export default Instructors