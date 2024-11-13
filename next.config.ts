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
	async headers() {
		return [
			{
				source: '/api/:path*',
				headers: [
					{
						key: 'Access-Control-Allow-Origin',
						value: '*',
					},
					{
						key: 'Access Control-Allow-Methods',
						value: 'GET, POST, PUT, DELETE, OPTIONS',
					},
					{
						key: 'Access-Control-Allow-Headers',
						value: 'X-Requested-With, Content-Type, Authorization',
					},
				],
			},
		];
	},
	images: {
		remotePatterns: [
			{
				hostname: '**',
			}
		],
	}
};

export default nextConfig;
