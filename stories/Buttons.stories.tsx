import * as React from 'react';
import Button from '@atlantum/button';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@atlantum/theme';

import './stories.styles.css';

const Primary = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="atlantum-compact">
                <Button>I am Primary</Button>
            </div>
        </ThemeProvider>
    );
};
const Secondary = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="atlantum-compact">
                <Button secondary>I am Secondary</Button>
            </div>
        </ThemeProvider>
    );
};
const Disabled = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="atlantum-compact">
                <Button disabled>I am Disabled</Button>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Button', module).add('Primary', () => <Primary />);
storiesOf('Button', module).add('Secondary', () => <Secondary />);
storiesOf('Button', module).add('Disabled', () => <Disabled />);
