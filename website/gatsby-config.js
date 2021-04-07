module.exports = {
    siteMetadata: {
        title: 'website',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-gatsby-cloud',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-mdx',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                // eslint-disable-next-line no-undef
                path: './website/src/pages/',
            },
        },
        {
            __key: 'pages',
        },
    ],
};
