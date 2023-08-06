module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: "airbnb-base",
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                ".eslintrc.{js,cjs}",
            ],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
    },
    rules: {
        semi: ["error", "always"],
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        indent: ["error", 4],
        "eol-last": ["error", "never"],
        "linebreak-style": 0,
    },
};