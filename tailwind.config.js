/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--color-primary))',
                secondary: 'rgb(var(--color-secondary))',
                accent: 'rgb(var(--color-accent))',
                background: 'rgb(var(--color-bg))',
            }
        }
    },
    plugins: []
};
