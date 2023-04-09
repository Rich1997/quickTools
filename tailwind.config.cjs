/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter var', 'sans-serif'],
                roboto_flex: ['Roboto flex', 'sans-serif'],
            },
            colors: {},
        },
        screens: {
            phone: '320px',
            tablet: '640px',
            laptop: '1024px',
            desktop: '1280px',
        },
        keyframes: {
            slideDownAndFade: {
                from: { opacity: 0, transform: 'translateY(-2px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
            },
            slideLeftAndFade: {
                from: { opacity: 0, transform: 'translateX(2px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
            },
            slideUpAndFade: {
                from: { opacity: 0, transform: 'translateY(2px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
            },
            slideRightAndFade: {
                from: { opacity: 0, transform: 'translateX(2px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
            },
        },
        animation: {
            'spin-soft': 'spin 1s linear 0.5',
            slideDownAndFade:
                'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
            slideLeftAndFade:
                'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
            slideUpAndFade:
                'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
            slideRightAndFade:
                'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        styled: true,
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter',
            {
                neon: {
                    primary: '#8b5cf6',
                    secondary: '#e879f9',
                    accent: '#f9a8d4',
                    neutral: '#191D24',
                    'base-100': '#111827',
                    info: '#67e8f9',
                    success: '#6ee7b7',
                    warning: '#fcd34d',
                    error: '#fca5a5',
                },
            },
        ],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: '',
        darkTheme: 'dark',
    },
};
