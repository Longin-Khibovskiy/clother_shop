/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,css}'],
	theme: {
		screens: {
			lg: { max: '1199.99px' },
			md: { max: '991.99px' },
			sm: { max: '767.99px' },
			smx: { max: '615px' },
			xs: { max: '479.99px' },
		},
		// colors: {
		// 	'first-color': '#CAD2C5',
		// 	'second-color': '#84A98C',
		// 	'third-color': '#52796F',
		// 	'fourth-color': '#354F52',
		// 	'fifth-color': '#2F3E46',
		// },
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				inter: ['Inter', 'sans-serif'],
			},
			backgroundImage: {
				'first-paste': "url('../assets/Elements/PasteImage1.jpg')",
				'second-paste': "url('../assets/Elements/PasteImage2.jpg')",
				'third-paste': "url('../assets/Elements/PasteImage3.jpg')",
				'fourth-paste': "url('../assets/Elements/PasteImage4.jpg')",
				'catalog-one': "url('../assets/Elements/catalog1.jpg')",
				'catalog-two': "url('../assets/Elements/catalog2.jpg')",
				'catalog-three': "url('../assets/Elements/catalog3.jpg')",
				'catalog-four': "url('../assets/Elements/catalog4.jpg')",
			},
		},
	},
	plugins: [],
}
