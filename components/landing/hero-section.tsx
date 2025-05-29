"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { VideoText } from "../magicui/video-text";
import { MorphingText } from "../magicui/morphing-texts";
import { SparklesText } from "../magicui/magic-text";
import Link from "next/link";

export default function HeroSection() {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-100px" });
	return (
		<section id="hero" className="relative mx-auto mt-24 max-w-[80rem] px-6 text-center md:px-8">
			<a href="https://www.linkedin.com/in/kncoder/" target="_blank" className="backdrop-filter-[12px] inline-flex h-7 items-center justify-between rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white dark:text-black transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in opacity-0">
				<TextShimmer className="inline-flex gap-2 items-center justify-center">
					<LinkedInLogoIcon />
					<span> My LinkedIn</span> <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
				</TextShimmer>
			</a>

			<div className="relative hidden lg:block h-[110px] mt-20 w-full overflow-hidden">
				<VideoText fontSize={"110px"} src="https://videos.pexels.com/video-files/2776522/2776522-uhd_2560_1440_30fps.mp4">
					Khatamov Nuriddin
				</VideoText>
			</div>

			<div className="relative block lg:hidden h-[110px] mt-5 lg:mt-20 w-full overflow-hidden">
				<VideoText fontSize={"40px"} src="https://videos.pexels.com/video-files/2776522/2776522-uhd_2560_1440_30fps.mp4">
					Khatamov Nuriddin
				</VideoText>
			</div>

			<MorphingText texts={["Front-end developer", "Designer"]} />

			<SparklesText className="mb-10 text-lg tracking-tight text-gray-300 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0">
				Building creative, modern, and business apps with
				<br className="hidden md:block" /> a designer’s eye and a developer’s mind.
			</SparklesText>

			<a href="https://t.me/kncoder" target="_blank">
				<Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms]">
					<span>Contact with me </span>
					<ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
				</Button>
			</a>

			<Link href={"/resume.pdf"}>
				<img src="/resume.jpg" alt="Resume" className="relative w-full h-full rounded-2xl opacity-5 cursor-zoom-in hover:opacity-100 transition-all duration-500 my-20 z-10" />
			</Link>
		</section>
	);
}
