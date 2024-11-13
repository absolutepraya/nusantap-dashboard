import type { Metadata } from 'next';
import './globals.css';
import '@fontsource/inter';
import { Suspense } from 'react';

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
				<Suspense fallback={<div className="flex h-screen w-full items-center justify-center">Loading...</div>}>{children}</Suspense>
			</body>
		</html>
	);
}
