import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	async rewrites() {
		return [
			{
				source: '/prevalence-map',
				destination: '/prevalence.html',
			},
		];
	},
};

export default nextConfig;
