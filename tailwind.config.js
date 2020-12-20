module.exports = {
    purge: {
        enabled: false,
        content: [
            './src/**/*.tsx'
        ]
    },
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                primary: ['"Drawing Guides"'],
                secondary: ['"Magic Mushroom"']
            },
            colors: {
                primary: {
                    light: '#f88c36',
                    DEFAULT: '#f88020',
                    dark: '#df731c'
                },
                secondary: {
                    light: '#d53c5d',
                    DEFAULT: '#d1274b',
                    dark: '#bc2343'
                },
                light: '#fff4e4',
                dark: '#3d0e1e'
            }
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
