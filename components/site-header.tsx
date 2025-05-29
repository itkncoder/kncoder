"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from "framer-motion";
import { AlignJustify, PlaneIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Globe } from "@/components/magicui/globe";
import { ScrollProgress } from "./magicui/progress";
import { Meteors } from "./magicui/meteors";
import { MorphingText } from "./magicui/morphing-texts";

const menuItem = [
	{
		id: 1,
		label: "Features",
		href: "/features",
	},
	{
		id: 2,
		label: "Pricing",
		href: "#",
	},
	{
		id: 3,
		label: "Careers",
		href: "#",
	},
	{
		id: 4,
		label: "Contact Us",
		href: "#",
	},
];

export function SiteHeader() {
	const mobilenavbarVariant = {
		initial: {
			opacity: 0,
			scale: 1,
		},
		animate: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.2,
				ease: "easeOut",
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.2,
				delay: 0.2,
				ease: "easeOut",
			},
		},
	};

	const mobileLinkVar = {
		initial: {
			y: "-20px",
			opacity: 0,
		},
		open: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.3,
				ease: "easeOut",
			},
		},
	};

	const containerVariants = {
		open: {
			transition: {
				staggerChildren: 0.06,
			},
		},
	};

	const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

	useEffect(() => {
		const html = document.querySelector("html");
		if (html) html.classList.toggle("overflow-hidden", hamburgerMenuIsOpen);
	}, [hamburgerMenuIsOpen]);

	useEffect(() => {
		const closeHamburgerNavigation = () => setHamburgerMenuIsOpen(false);
		window.addEventListener("orientationchange", closeHamburgerNavigation);
		window.addEventListener("resize", closeHamburgerNavigation);

		return () => {
			window.removeEventListener("orientationchange", closeHamburgerNavigation);
			window.removeEventListener("resize", closeHamburgerNavigation);
		};
	}, [setHamburgerMenuIsOpen]);

	return (
		<>
			<header className="fixed left-0 top-0 z-[9999999] w-full translate-y-[-1rem] animate-fade-in border-b opacity-0 backdrop-blur-[12px] [--animation-delay:600ms]">
				<div className="container flex h-[3.5rem] items-center justify-between w-full">
					<div className="h-[70px] hidden lg:block w-[240px]">
						<MorphingText texts={["Hello!", "Khatamov", "Nuriddin", "KNCoder"]} className="text-lg text-start scale-[0.4]" />
					</div>

					<div className="mx-auto flex h-full w-full lg:justify-end justify-between flex-1 items-center">
						<div className="flex items-center gap-2">
							<Link className="flex mr-6 items-center gap-1" href="https://www.linkedin.com/in/kncoder/" target="_blank">
								<div className="text-sm hidden lg:block">LinkedIn</div>
								<LinkedInLogoIcon />
							</Link>

							<Link className="flex mr-6 items-center gap-1" href="https://github.com/itkncoder" target="_blank">
								<div className="text-sm hidden lg:block">GitHub</div>
								<GitHubLogoIcon />
							</Link>

							<Link href="https://www.instagram.com/kncoder.me/" target="_blank" className="flex mr-6 items-center gap-1">
								<div className="text-sm hidden lg:block">Instagram</div>
								<InstagramLogoIcon />
							</Link>
						</div>

						<Link className={cn(buttonVariants({ variant: "default" }), "gap-1 text-sm")} href="https://t.me/kncoder" target="_blank">
							Telegram
							<PlaneIcon size={16} />
						</Link>
					</div>
				</div>
			</header>

			{/* <div className="relative z-50">
				<Globe className="my-[100px] opacity-55" />
			</div> */}
		</>
	);
}
