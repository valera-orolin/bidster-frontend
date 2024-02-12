/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'my-black': '#130D1B',
                'my-gray1': '#252134',
                'my-gray2': '#262131',
                'my-gray3': '#D8D8D9',
                'my-gray4': '#FAFAFA',
                'my-lila': '#AC6AFF',
                'my-orange': '#FFC876',
                'my-aqua': '#79FFF7',
                'my-violet': '#9F53FF',
                'my-pink': '#FF98E2',
                'my-velvet': '#591952',
                'rimary1': '#AC6AFF',
                'primary2': '#FFC876',
                'primary3': '#79FFF7',
                'primary4': '#9F53FF',
                'primary5': '#FF98E2',
                'primary6': '#591952',
            },
            scale: {
                '180': '1.80',
            }
        },
      },
    plugins: [],
}
