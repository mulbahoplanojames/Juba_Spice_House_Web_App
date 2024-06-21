/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#f5f5f5",
				secondary: "#0f0f0f",
				accent_light: "#f57319",
				accent_dark: "#1d232a",
				text_light: "#747474",
				text_bold: "#262626",
				yellow_accent_1: "#FCF300",
				yellow_accent_2: "#ffcc00",
				yellow_accent_3: "#ffc60a",
				yellow_accent_4: "#FDC921",
				yellow_accent_5: "#FFCF33",
				yellow_accent_6: "#FFD95C",
				yellow_accent_7: "#FFE285",
				yellow_accent_8: "#FFECAD",
				yellow_accent_9: "#ffc107",
				red_accent_1: "#FF0000",
				red_accent_2: "#cc0000",
				red_accent_3: "#990000",
				red_accent_4: "#660000",
				red_accent_5: "#330000",
			},
		},
	},
	plugins: [],
};
