import * as React from 'react';
import Button from '@atlantum/button';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@atlantum/theme';
import './stories.styles.css';

const Buttons = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="flex margin-r-24">
                <div>
                    <Button>I am Primary</Button>
                </div>
                <div>
                    <Button secondary>I am Secondary</Button>
                </div>
                <div>
                    <Button disabled>I am Disabled</Button>
                </div>
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

storiesOf('Button', module).add('All buttons', () => <Buttons />);
storiesOf('Button', module).add('Primary', () => <Primary />);
storiesOf('Button', module).add('Secondary', () => <Secondary />);
storiesOf('Button', module).add('Disabled', () => <Disabled />);
