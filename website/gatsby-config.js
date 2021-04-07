// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const path = require('path');

// eslint-disable-next-line no-undef
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
                path: `${__dirname}/website/src/pages/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                // eslint-disable-next-line no-undef
                path: `${__dirname}/website/src/data/`,
                ignore: [`**/\.*`], // ignore files starting with a dot
            },
        },
    ],
};
