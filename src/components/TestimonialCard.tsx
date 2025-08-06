"use client";
import { InfiniteMovingCards } from "./ui/infinte-moving-cards";

const photographySchoolTestimonials = [
    {
        quote:
            'This photography academy completely transformed my perspective on visual storytelling. The instructors taught me to see light and composition in ways I never imagined possible.',
        name: 'Sarah Mitchell',
        title: 'Portrait Photography Student',
    },
    {
        quote:
            "The hands-on approach and real-world assignments helped me build a professional portfolio that landed me my first commercial photography contract within months of graduation.",
        name: 'David Rodriguez',
        title: 'Commercial Photography Student',
    },
    {
        quote:
            "Learning advanced post-processing techniques here gave me the creative edge I needed. My landscape photography has never looked more professional and impactful.",
        name: 'Emma Thompson',
        title: 'Landscape Photography Student',
    },
    {
        quote:
            'The wildlife photography course challenged me to push my limits and capture moments I thought were impossible. The technical knowledge I gained is invaluable.',
        name: 'Marcus Chen',
        title: 'Wildlife Photography Student',
    },
    {
        quote:
            'From street photography basics to advanced storytelling techniques, this academy provided the perfect foundation for my photojournalism career. Absolutely life-changing!',
        name: 'Isabella Garcia',
        title: 'Street Photography Student',
    },
];

function TestimonialCard() {
    return (
        <div className="">
            <h2 className="font-bold text-5xl mt-16 text-center text-neutral-400">Capture Their Stories</h2>
                <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.2] items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={photographySchoolTestimonials}
                        direction="right"
                        speed="normal"
                    />
                </div>
        </div>
    )
}

export default TestimonialCard