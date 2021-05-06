import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { lightTheme } from '@atlantum/theme';
import Heading from '@atlantum/heading';

// markup
const IndexPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <Heading as="h1">Atlantum</Heading>
        </ThemeProvider>
    );
};

export default IndexPage;
