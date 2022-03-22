module.exports = {
  content: ["./**/*.liquid"],
  theme: {
		container: {
			center: true,
			padding: {
        DEFAULT: '1rem'
			}
		},
		fontFamily: {
			'sans': ['Necto', 'ui-monospace']
		},
		extend: {},
  },
  plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio')
	],
}
