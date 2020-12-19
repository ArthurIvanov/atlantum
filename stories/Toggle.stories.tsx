import * as React from 'react';
import Toggle from '@atlantum/toggle';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { theme } from '@atlantum/theme';
import './stories.styles.css';
import Card from '@atlantum/card';

const DefaultToggle = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <div>
                        <Toggle
                            type={'checkbox'}
                            name={'toggle'}
                            label={'Regular toggle'}
                        />
                    </div>
                </Card>
            </div>
        </ThemeProvider>
    );
};
const DisabledToggle = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <div>
                        <Toggle
                            disabled
                            type={'checkbox'}
                            name={'toggle'}
                            label={'Disabled toggle'}
                        />
                    </div>
                </Card>
            </div>
        </ThemeProvider>
    );
};
const SwitchedToggle = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <div>
                        <Toggle
                            checked
                            type={'checkbox'}
                            name={'toggle'}
                            label={'Switch "on" toggle'}
                        />
                    </div>
                </Card>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Toggle', module).add('Default', () => <DefaultToggle />);
storiesOf('Toggle', module).add('Disabled', () => <DisabledToggle />);
storiesOf('Toggle', module).add('Switched on', () => <SwitchedToggle />);
