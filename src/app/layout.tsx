import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import '@fontsource/inter';

export const metadata: Metadata = {
	title: 'NuSantap - Dashboard',
	description: 'NuSantap Government Dashboard by UINNOVATOR - Gov-AI Hackathon 2024',
	icons: {
		icon: '/logo.svg',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`font-inter text-custblack antialiased`}>
				{children}
			</body>
		</html>
	);
}
