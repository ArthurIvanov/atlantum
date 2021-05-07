import * as React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme } from '@atlantum/theme';
import { Heading } from '@atlantum/heading';

const Docs = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <Heading as="h1">Atlantum</Heading>
            <Heading as={'h5'}>Composable design system</Heading>
        </ThemeProvider>
    );
};

export default Docs;
