import ClientSection from "@/components/landing/client-section";
import CallToActionSection from "@/components/landing/cta-section";
import HeroSection from "@/components/landing/hero-section";
import PricingSection from "@/components/landing/pricing-section";
import { Meteors } from "@/components/magicui/meteors";
import Particles from "@/components/magicui/particles";
import { SphereMask } from "@/components/magicui/sphere-mask";

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
