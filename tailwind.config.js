module.exports = {
	content: [
		"./dist/**/*.{html,js}"
	],
	theme: {
		screens: {
			// Desplazados xl->lg, lg->md, md->sm…
			sm: '768px',
			md: '1024px',
			lg: '1280px',
			xl: '1920px',
		},
		fontFamily: {
			sans: ['Exo', 'sans-serif'],
		},
		extend: {
			spacing: {
				'128': '32rem',
				'144': '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			}
		}
	},
	plugins: [
		require('daisyui'),
	],
	daisyui: {
		themes: [
		  {
			'iuui': {
				'primary': '#f61067',
				'primary-focus': '#dc0859',
				'primary-content': '#f5f8fc',

				'secondary': '#782cc9',
				'secondary-focus': '#6927b0',
				'secondary-content': '#f5f8fc',

				'accent': '#37cdbe',
				'accent-focus': '#279c90',
				'accent-content': '#f5f8fc',

				'neutral': '#f5f8fc',
				'neutral-focus': '#dfe2e6',		// No en paleta
				'neutral-content': '#23231a',

				'base-100': '#23231a',
				'base-200': '#434332',
				'base-300': '#64644A',
				'base-content': '#f5f8fc',

				'info': '#1eb9ff',
				'success': '#53dd6c',
				'warning': '#ffb81f',
				'error': '#f41111',
			},
		  },
		],
	  },
}
