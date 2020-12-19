import * as React from 'react';
import Checkbox from '@atlantum/checkbox';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { theme } from '@atlantum/theme';
import './stories.styles.css';
import Card from '@atlantum/card';

const Regular = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <Checkbox
                        type={'checkbox'}
                        name={'username'}
                        label={'Label'}
                    />
                </Card>
            </div>
        </ThemeProvider>
    );
};
const Checked = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <Checkbox
                        checked
                        type={'checkbox'}
                        name={'username'}
                        label={'Label'}
                    />
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
                    <Checkbox
                        checked
                        disabled
                        type={'checkbox'}
                        name={'username'}
                        label={'Label'}
                    />
                </Card>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Checkbox', module).add('Regular', () => <Regular />);
storiesOf('Checkbox', module).add('Checked', () => <Checked />);
storiesOf('Checkbox', module).add('Disabled', () => <Disabled />);
