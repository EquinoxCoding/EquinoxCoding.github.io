/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        fontFamily: {
            sans: ['Rubik', 'Calibri']
        },
        colors: {
            'blue-1': 'var(--blue-1)',
            'blue-2': 'var(--blue-2)',
            'blue-3': 'var(--blue-3)',
            dark: 'var(--dark)',
            gray: 'var(--gray)',
            'light-1': 'var(--light-1)',
            'light-2': 'var(--light-2)',
            'light-3': 'var(--light-3)',
            'light-blue': 'var(--light-blue)',
            'pink-1': 'var(--pink-1)',
            'pink-2': 'var(--pink-2)',
            'purple-1': 'var(--purple-1)',
            'purple-2': 'var(--purple-2)'
        }
    },
    plugins: []
};
