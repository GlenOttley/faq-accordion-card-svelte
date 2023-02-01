/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			borderRadius: {
				DEFAULT: '23px'
			},
			boxShadow: {
				DEFAULT: '0 50px 50px -20px rgba(53, 18, 122, 0.5)'
			},
			fontFamily: {
				sans: ['Kumbh Sans', 'sans-serif']
			}
		},
		colors: {
			transparent: 'transparent',
			white: '#FFFFFF',
			black: '#000000',
			'light-grayish-blue': '#E7E7E9',
			'dark-grayish-blue': '#787887',
			'very-dark-grayish-blue': '#4A4B5E',
			'very-dark-desaturated-blue': '#1D1E35',
			'soft-red': '#F47C57',
			'soft-violet': '#AF67E9',
			'soft-blue': '#6565E7'
		},
		container: {
			center: true,
			padding: '24px'
		},
		fontSize: {
			sm: ['12px', '18px'],
			base: ['13px', 'auto'],
			lg: ['14px', 'auto'],
			xl: ['32px', 'auto']
		},
		screens: {
			sm: '375px',
			md: '640px',
			lg: '968px'
		}
	},
	plugins: []
};
