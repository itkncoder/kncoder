import { DiscordLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { CodeIcon } from "lucide-react";
import Link from "next/link";

const footerNavs = [
	{
		label: "Product",
		items: [
			{
				href: "/",
				name: "Email Collection",
			},
			{
				href: "/pricing",
				name: "Pricing",
			},
			{
				href: "/faq",
				name: "FAQ",
			},
		],
	},

	{
		label: "Community",
		items: [
			{
				href: "/",
				name: "Discord",
			},
			{
				href: "/",
				name: "Twitter",
			},
			{
				href: "mailto:hello@chatcollect.com",
				name: "Email",
			},
		],
	},
	{
		label: "Legal",
		items: [
			{
				href: "/terms",
				name: "Terms",
			},

			{
				href: "/privacy",
				name: "Privacy",
			},
		],
	},
];

const footerSocials = [
	{
		href: "",
		name: "Discord",
		icon: <DiscordLogoIcon className="h-4 w-4" />,
	},
	{
		href: "",
		name: "Twitter",
		icon: <CodeIcon className="h-4 w-4" />,
	},
];

export function SiteFooter() {
	return <footer></footer>;
}