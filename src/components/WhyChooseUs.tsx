"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Professional Portfolio Building",
    description:
      "Build a stunning photography portfolio with guidance from industry professionals. Learn composition techniques, lighting mastery, and post-processing skills that will showcase your unique artistic vision and attract potential clients.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Professional Portfolio Building
      </div>
    ),
  },
  {
    title: "Live Shooting Sessions",
    description:
      "Participate in real-time photography workshops with professional photographers. Watch techniques unfold live, ask questions instantly, and practice alongside instructors in various photography styles from portrait to landscape shooting.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        Live Shooting Sessions
      </div>
    ),
  },
  {
    title: "Progressive Skill Development",
    description:
      "Master photography through our structured learning path that adapts to your skill level. From camera basics to advanced techniques, our curriculum ensures steady progress with personalized feedback and milestone achievements that build confidence.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Progressive Skill Development
      </div>
    ),
  },
  {
    title: "Industry Recognition Program",
    description:
      "Gain credibility through our certification program recognized by photography professionals worldwide. Complete specialized courses, submit portfolio reviews, and earn certificates that validate your expertise in various photography disciplines and techniques.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white">
        Industry Recognition Program
      </div>
    ),
  },
];



function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />

    </div>
  )
}

export default WhyChooseUs