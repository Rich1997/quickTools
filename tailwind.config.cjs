/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter var', 'sans-serif'],
                roboto_flex: ['Roboto flex', 'sans-serif'],
            },
        },
        screens: {
            phone: '320px',
            tablet: '640px',
            laptop: '1024px',
            desktop: '1280px',
        },
        keyframes: {
            overlayShow: {
                from: { opacity: 0 },
                to: { opacity: 1 },
            },
            contentShow: {
                from: {
                    opacity: 0,
                    transform: 'translate(-50%, -50%) scale(0.96)',
                },
                to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
            },
        },
        animation: {
            overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
            contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
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
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
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
                    ...require('daisyui/src/colors/themes')[
                        '[data-theme=night]'
                    ],
                    primary: '#6c00d6',
                    secondary: '#8e00ab',
                    accent: '#f9a8d4',
                    neutral: '#191D24',
                    'base-100': '#0f0a17',
                    'base-200': '#211e24',
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
        darkTheme: 'neon',
    },
};
