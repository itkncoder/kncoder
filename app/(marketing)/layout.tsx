import { ScrollProgress } from "@/components/magicui/progress";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

interface MarketingLayoutProps {
	children: React.ReactNode;
}

export default async function MarketingLayout({ children }: MarketingLayoutProps) {
	return (
		<>
			<ScrollProgress className="top-[0x] z-50" />

			<SiteHeader />
			<main className="mx-auto flex-1 overflow-hidden">{children}</main>
			<SiteFooter />
		</>
	);
}
