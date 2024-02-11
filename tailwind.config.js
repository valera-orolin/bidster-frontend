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
            },
        },
      },
    plugins: [],
}
