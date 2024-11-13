import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	async rewrites() {
		return [
			{
				source: '/prevalence-map/jabar',
				destination: '/prevalence-jabar.html',
			},
			{
				source: '/prevalence-map/ntt',
				destination: '/prevalence-ntt.html',
			},
		];
	},
	images: {
		remotePatterns: [
			{
				hostname: '**',
			},
		],
	},
};

export default nextConfig;
