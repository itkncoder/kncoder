"use client";

import { BorderBeam } from "@/components/magicui/border-beam";
import TextShimmer from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { VideoText } from "../magicui/video-text";
import { MorphingText } from "../magicui/morphing-texts";

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

			<div className="relative h-[110px] mt-20 w-full overflow-hidden">
				<VideoText fontSize={"110px"} src="https://cdn.magicui.design/ocean-small.webm">
					Khatamov Nuriddin
				</VideoText>
			</div>

			<MorphingText texts={["Front-end developer", "Designer"]} />

			<p className="mb-12 text-lg tracking-tight text-gray-300 md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
				Building creative, modern, and business apps with
				<br className="hidden md:block" /> a designer’s eye and a developer’s mind.
			</p>

			<a href="https://t.me/kncoder" target="_blank">
				<Button className="translate-y-[-1rem] animate-fade-in gap-1 rounded-lg text-white dark:text-black opacity-0 ease-in-out [--animation-delay:600ms]">
					<span>Contact with me </span>
					<ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
				</Button>
			</a>
			
			<div ref={ref} className="relative mt-[8rem] animate-fade-up opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]">
				<div className={`rounded-xl border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:h-full before:w-full before:opacity-0 before:[filter:blur(180px)] before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] ${inView ? "before:animate-image-glow" : ""}`}>
					<BorderBeam size={200} duration={12} delay={11} colorFrom="var(--color-one)" colorTo="var(--color-two)" />

					<img src="/hero-dark.png" alt="Hero Image" className="hidden relative w-full h-full rounded-[inherit] border object-contain dark:block" />
					<img src="/hero-light.png" alt="Hero Image" className="block relative w-full h-full  rounded-[inherit] border object-contain dark:hidden" />
				</div>
			</div>
		</section>
	);
}
