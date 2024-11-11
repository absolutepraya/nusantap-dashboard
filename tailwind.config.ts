import type { Config } from 'tailwindcss';

export default {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				custblack: '#171a1c',
				custgray1: '#636b74',
				custgray2: '#32383e',

				first: '#fbfcfe',
				second: '#f0f4f8',
				third: '#dde7ee',

				custblue: '#0b6bcb',
				custorange: '#f77b28',
				green: '#37c1bb',
				lime: '#d1dd25',
			},
		},
	},
	plugins: [],
} satisfies Config;
