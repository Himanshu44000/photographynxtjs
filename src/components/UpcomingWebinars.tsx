"use client";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
    {
      title: 'Mastering Natural Light Photography',
      description:
        'Discover how to harness natural light for stunning portraits and landscapes using professional techniques.',
      slug: 'mastering-natural-light-photography',
      isFeatured: true,
    },
    {
      title: 'The Art of Visual Storytelling',
      description:
        'Learn to create compelling narratives through your photography with composition and emotional impact.',
      slug: 'the-art-of-visual-storytelling',
      isFeatured: true,
    },
    {
      title: 'Advanced Camera Settings Mastery',
      description:
        'Master manual mode, exposure triangle, and advanced camera features for professional results.',
      slug: 'advanced-camera-settings-mastery',
      isFeatured: true,
    },
    {
      title: 'Photography Post-Processing Workflow',
      description:
        'Complete guide to Adobe Lightroom and Photoshop for transforming your raw images.',
      slug: 'photography-post-processing-workflow',
      isFeatured: true,
    },
    {
      title: 'Professional Portfolio Development',
      description:
        'Build a compelling photography portfolio that attracts clients and showcases your unique style.',
      slug: 'professional-portfolio-development',
      isFeatured: true,
    },
    {
      title: 'Photography Business and Marketing',
      description:
        'Learn to monetize your photography skills and build a successful photography business.',
      slug: 'photography-business-and-marketing',
      isFeatured: true,
    },
];

function UpcomingWebinars() {
    return (
        <div className='P-12 dark:bg-zinc-900 '>
            <div className='max-w-7xl mx-auto px-4 sm:px-6'>
                <div className='text-center'>
                    <h2 className='py-9 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500'>Featured Workshops</h2>
                    <p className='mt-4 font-medium text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>
                        Join our expert photographers in live interactive workshops designed to elevate your photography skills and unleash your creative potential.</p>
                </div>
                <div className='mt-10'>
                    <HoverEffect items={featuredWebinars.map(webinars => (
                        {
                            title: webinars.title,
                            description: webinars.description,
                            link: '/',
                            isFeatured: webinars.isFeatured,
                            className: 'bg-white dark:bg-neutral-800 text-black dark:text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300',
                        }
                    ))} />
                </div>
                
            </div>
        </div>
    )
}

export default UpcomingWebinars