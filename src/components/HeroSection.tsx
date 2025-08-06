import Link from 'next/link';
import { Spotlight } from './ui/Spotlight';
import {Button} from './ui/moving-border';


export default function HeroSection() {
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
            />
            <div className="p-4 relative z-10 w-full text-center">
                <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500' >Capture Your Passion</h1>
                <p className='mt-6 font-medium text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Unlock your creative potential through expert-led photography courses. From mastering camera settings to building a powerful portfolio, we guide you every step of the way in turning passion into profession.</p>
                <div className="mt-9">
                    <Link href="/courses">
                        <Button 
                            borderRadius="1.75rem">
                            Explore Courses
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}