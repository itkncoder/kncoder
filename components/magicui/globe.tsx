"use client";

import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useCallback } from "react";

import { cn } from "@/lib/utils";

const MOVEMENT_DAMPING = 1400;

const DEFAULT_CONFIG: COBEOptions = {
	width: 800,
	height: 800,
	onRender: () => {},
	devicePixelRatio: 2,
	phi: 0,
	theta: 0.3,
	dark: 1,
	diffuse: 0.4,
	mapSamples: 16000,
	mapBrightness: 1.5,
	baseColor: [0, 0.8, 1],
	markerColor: [1 / 50, 100 / 500, 21 / 100],
	glowColor: [0.065, 0.065, 0.065],
	markers: [
		{ location: [14.5995, 120.9842], size: 0.03 },
		{ location: [19.076, 72.8777], size: 0.1 },
		{ location: [23.8103, 90.4125], size: 0.05 },
		{ location: [30.0444, 31.2357], size: 0.07 },
		{ location: [39.9042, 116.4074], size: 0.08 },
		{ location: [-23.5505, -46.6333], size: 0.1 },
		{ location: [19.4326, -99.1332], size: 0.1 },
		{ location: [40.7128, -74.006], size: 0.1 },
		{ location: [34.6937, 135.5022], size: 0.05 },
		{ location: [41.0082, 28.9784], size: 0.06 },
	],
};

export function Globe({
	className,
	config = DEFAULT_CONFIG,
}: {
	className?: string;
	config?: COBEOptions;
}) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const pointerStart = useRef<number | null>(null);
	const pointerDelta = useRef(0);
	const globeWidth = useRef(0);
	const phiRef = useRef(0);

	const motion = useMotionValue(0);
	const smoothMotion = useSpring(motion, {
		mass: 1,
		damping: 30,
		stiffness: 100,
	});

	const updatePointerStart = useCallback((x: number | null) => {
		pointerStart.current = x;
		if (canvasRef.current) {
			canvasRef.current.style.cursor = x !== null ? "grabbing" : "grab";
		}
	}, []);

	const updatePointerDelta = useCallback((x: number) => {
		if (pointerStart.current !== null) {
			const delta = x - pointerStart.current;
			pointerDelta.current = delta;
			motion.set(motion.get() + delta / MOVEMENT_DAMPING);
		}
	}, [motion]);

	useEffect(() => {
		const handleResize = () => {
			if (canvasRef.current) {
				globeWidth.current = canvasRef.current.offsetWidth;
			}
		};

		window.addEventListener("resize", handleResize);
		handleResize();

		const globe = createGlobe(canvasRef.current!, {
			...config,
			width: globeWidth.current * 2,
			height: globeWidth.current * 2,
			onRender: (state) => {
				if (pointerStart.current === null) {
					phiRef.current += 0.005;
				} else {
					phiRef.current += pointerDelta.current / MOVEMENT_DAMPING;
					pointerDelta.current *= 0.9;
				}

				state.phi = phiRef.current + smoothMotion.get();
				state.width = globeWidth.current * 2;
				state.height = globeWidth.current * 2;
			},
		});

		requestAnimationFrame(() => {
			if (canvasRef.current) canvasRef.current.style.opacity = "1";
		});

		return () => {
			globe.destroy();
			window.removeEventListener("resize", handleResize);
		};
	}, [smoothMotion, config]);

	return (
		<div className={cn("absolute inset-0 mx-auto aspect-square w-full max-w-[800px]", className)}>
			<canvas
				ref={canvasRef}
				className={cn("size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]")}
				onPointerDown={(e) => updatePointerStart(e.clientX)}
				onPointerUp={() => updatePointerStart(null)}
				onPointerOut={() => updatePointerStart(null)}
				onPointerMove={(e) => updatePointerDelta(e.clientX)}
				onTouchStart={(e) => updatePointerStart(e.touches[0].clientX)}
				onTouchEnd={() => updatePointerStart(null)}
				onTouchMove={(e) => e.touches[0] && updatePointerDelta(e.touches[0].clientX)}
			/>
		</div>
	);
}
