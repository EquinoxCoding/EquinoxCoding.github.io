/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            'sans': ['Rubik', 'Calibri']
        },
        extend: {
            colors: {
                'dark': {
                    300: '#828c8e',
                    500: '#647279',
                    700: '#3d3e45',
                    900: '#27292f',
                },
                'light': '#fffffa',
                'neutral': '#c5deda'
            }
        }
    },
    plugins: []
};
