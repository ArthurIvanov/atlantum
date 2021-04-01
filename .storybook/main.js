module.exports = {
    stories: [
        '../stories/Intro.stories.tsx',
        '../stories/Colors.stories.tsx',
        '../stories/*.stories.mdx',
        '../stories/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-storysource',
        '@storybook/addon-a11y',
        '@storybook/addon-contexts/register',
    ],
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) =>
                prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
        },
    },
};
