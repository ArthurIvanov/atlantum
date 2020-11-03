import * as React from 'react';
import Button from '@atlantum/button';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@atlantum/theme';
import './stories.styles.css';

const Buttons = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="margin-r-24">
                <Button>I am Primary</Button>
                <Button secondary>I am Secondary</Button>
                <Button disabled>I am Disabled</Button>
            </div>
        </ThemeProvider>
    );
};

const Primary = () => {
    return (
        <ThemeProvider theme={theme}>
            <Button>I am Primary</Button>
        </ThemeProvider>
    );
};
const Secondary = () => {
    return (
        <ThemeProvider theme={theme}>
            <Button secondary>I am Secondary</Button>
        </ThemeProvider>
    );
};
const Disabled = () => {
    return (
        <ThemeProvider theme={theme}>
            <Button disabled>I am Disabled</Button>
        </ThemeProvider>
    );
};

storiesOf('Buttons', module).add('All buttons', () => <Buttons />);
storiesOf('Buttons', module).add('Primary', () => <Primary />);
storiesOf('Buttons', module).add('Secondary', () => <Secondary />);
storiesOf('Buttons', module).add('Disabled', () => <Disabled />);
