import * as React from 'react';
import Radio from '@atlantum/radio';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { lightTheme } from '@atlantum/theme';
import './stories.styles.css';
import Card from '@atlantum/card';

const DefaultRadio = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size="standard">
                    <Radio
                        type={'radio'}
                        name={'radio'}
                        label={'Regular radio'}
                    />
                </Card>
            </div>
        </ThemeProvider>
    );
};

const DisabledRadio = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size="standard">
                    <Radio
                        disabled
                        type={'radio'}
                        name={'radio'}
                        label={'Disabled radio'}
                    />
                </Card>
            </div>
        </ThemeProvider>
    );
};

const SuccessRadio = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size="standard">
                    <Radio
                        success
                        type={'radio'}
                        name={'radio'}
                        label={'Success radio'}
                    />
                </Card>
            </div>
        </ThemeProvider>
    );
};

const DangerRadio = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size="standard">
                    <Radio
                        success
                        type={'radio'}
                        name={'radio'}
                        label={'Danger radio'}
                    />
                </Card>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Radio', module).add('Default', () => <DefaultRadio />);
storiesOf('Radio', module).add('Disabled', () => <DisabledRadio />);
storiesOf('Radio', module).add('Success', () => <SuccessRadio />);
storiesOf('Radio', module).add('Danger', () => <DangerRadio />);
