module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
    ],
    plugins: ['@typescript-eslint', 'import'],
    rules: {
        // --- import ordering ---
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',   // node built-ins
                    'external',  // packages
                    'internal',  // aliases like @/...
                    ['parent', 'sibling', 'index'],
                ],
                'newlines-between': 'always',
                alphabetize: { order: 'asc', caseInsensitive: true },
            },
        ],

        // --- max consecutive empty lines ---
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

        // optional niceties
        'no-trailing-spaces': 'error',
        'eol-last': ['error', 'always'],
    },
};
