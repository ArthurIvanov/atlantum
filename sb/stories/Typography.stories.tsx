import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@atlantum/theme';
import GlobalStyles from '@atlantum/theme';
import './stories.styles.css';
import Heading from '../../packages/typography/heading';

const Typography = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="flex margin-r-24">
                <div>
                    <Heading as={'h1'}>Heading 1</Heading>
                    <Heading as={'h2'}>Heading 2</Heading>
                    <Heading as={'h3'}>Heading 3</Heading>
                    <Heading as={'h4'}>Heading 4</Heading>
                    <Heading as={'h5'}>Heading 5</Heading>
                    <Heading as={'h6'}>Heading 6</Heading>
                </div>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Typography', module).add('Heading', () => <Typography />);
