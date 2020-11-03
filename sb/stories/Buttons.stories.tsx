import * as React from 'react';
import Button from '@morph-design-system/button';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@morph-design-system/theme';
import './stories.styles.css';

const Buttons = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
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
        <ThemeProvider theme={defaultTheme}>
            <Button>I am Primary</Button>
        </ThemeProvider>
    );
};
const Secondary = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Button secondary>I am Secondary</Button>
        </ThemeProvider>
    );
};
const Disabled = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Button disabled>I am Disabled</Button>
        </ThemeProvider>
    );
};

storiesOf('Buttons', module).add('All buttons', () => <Buttons />);
storiesOf('Buttons', module).add('Primary', () => <Primary />);
storiesOf('Buttons', module).add('Secondary', () => <Secondary />);
storiesOf('Buttons', module).add('Disabled', () => <Disabled />);
