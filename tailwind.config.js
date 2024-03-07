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
                //'my-gray1': '#252134',
                'my-gray1': '#F15D44',
                //'my-gray2': '#262131',
                'my-gray2': '#252134',
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
                '200': '2.00',
                '230': '2.30',
            },
            borderWidth: {
                '0.5': '0.5px'
            },
            ringWidth: {
                '0.5': '0.5px',
            },
            spacing: {
                '0.5': '0.125rem',
                '84': '21rem',
            },
            maxHeight: {
                '200': '50rem',
                '160': '40rem',
            },
            height: {
                '200': '50rem',
                '160': '40rem',
                '128': '32rem',
                '112': '28rem',
                '104': '26rem',
            },
            width: {
                '260': '65rem',
                '200': '50rem',
                '160': '40rem',
                '140': '35rem',
            },
            translate: {
                '88': '22rem',
                '108': '27rem',
                '120': '30rem',
                '144': '36rem',
                '152': '38rem',
                '160': '40rem',
            },
        },
      },
    plugins: [],
}
