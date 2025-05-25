"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface MeteorsProps {
	number?: number;
	minDelay?: number;
	maxDelay?: number;
	minDuration?: number;
	maxDuration?: number;
	className?: string;
}

export const Meteors = ({ number = 20, minDelay = 0.2, maxDelay = 1.2, minDuration = 2, maxDuration = 100, className }: MeteorsProps) => {
	const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);

	useEffect(() => {
		const styles = Array.from({ length: number }).map(() => ({
			top: "0px",
			left: `${Math.random() * 100}%`,
			animationDelay: `${Math.random() * (maxDelay - minDelay) + minDelay}s`,
			animationDuration: `${Math.floor(Math.random() * (maxDuration - minDuration) + minDuration)}s`,
		}));
		setMeteorStyles(styles);
	}, [number, minDelay, maxDelay, minDuration, maxDuration]);

	return (
		<>
			{meteorStyles.map((style, idx) => (
				<span key={`meteor-${idx}`} style={style} className={cn("pointer-events-none absolute h-0.5 w-0.5 animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]", className)}>
					<div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-slate-500 to-transparent" />
				</span>
			))}
		</>
	);
};
