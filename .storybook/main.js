module.exports = {
    stories: [
        '../stories/intro.stories.tsx',
        '../stories/*.stories.mdx',
        '../stories/Fundamentals/*.stories.@(js|jsx|ts|tsx)',
        '../stories/Components/*.stories.@(js|jsx|ts|tsx)',
        '../stories/Layout/*.stories.@(js|jsx|ts|tsx)',
        '../stories/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-storysource',
        '@storybook/addon-a11y',
        '@storybook/addon-contexts/register',
    ],
};
