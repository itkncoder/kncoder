import HeroSection from "@/components/landing/hero-section";
import { Meteors } from "@/components/magicui/meteors";
import Particles from "@/components/magicui/particles";

export default async function Page() {
	return (
		<>
			<div className="z-50 relative">
				<HeroSection />
			</div>

			<Particles className="absolute inset-0 -z-10" quantity={50} ease={70} size={0.05} staticity={40} color={"#ffffff"} />

			<div className="overflow-hidden w-full h-screen absolute opacity-75 left-0 top-0">
				<Meteors number={20} />
			</div>
		</>
	);
}