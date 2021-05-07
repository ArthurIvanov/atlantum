import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, GlobalStyles } from '@atlantum/theme';
import { Heading } from '@atlantum/heading';
import { HeroImage } from '../components/hero-image.component';

// markup
const IndexPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <HeroImage url={'https://i.ibb.co/zrXyZhd/cover.png'}>
                <Heading as="h1">Atlantum</Heading>
                <Heading as={'h5'}>Composable design system</Heading>
            </HeroImage>
        </ThemeProvider>
    );
};

export default IndexPage;
