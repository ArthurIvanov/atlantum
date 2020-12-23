import * as React from 'react';
import Button from '@atlantum/button';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { theme } from '@atlantum/theme';

import './stories.styles.css';
import Card from '@atlantum/card';

const Primary = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <Button>I am Primary</Button>
                </Card>
            </div>
        </ThemeProvider>
    );
};
const Secondary = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <Button isSecondary>I am Secondary</Button>
                </Card>
            </div>
        </ThemeProvider>
    );
};
const Disabled = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <Button disabled>I am Disabled</Button>
                </Card>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Button', module).add('Primary', () => <Primary />);
storiesOf('Button', module).add('Secondary', () => <Secondary />);
storiesOf('Button', module).add('Disabled', () => <Disabled />);
