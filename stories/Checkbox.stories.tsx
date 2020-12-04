import * as React from 'react';
import Checkbox from '@atlantum/checkbox';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@atlantum/theme';
import './stories.styles.css';

const Regular = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="atlantum-view">
                <div>
                    <Checkbox
                        type={'checkbox'}
                        name={'username'}
                        label={'Label'}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
};
const Checked = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="atlantum-view">
                <div>
                    <Checkbox
                        checked
                        type={'checkbox'}
                        name={'username'}
                        label={'Label'}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
};

const Disabled = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="atlantum-view">
                <div>
                    <Checkbox
                        checked
                        disabled
                        type={'checkbox'}
                        name={'username'}
                        label={'Label'}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Checkbox', module).add('Regular', () => <Regular />);
storiesOf('Checkbox', module).add('Checked', () => <Checked />);
storiesOf('Checkbox', module).add('Disabled', () => <Disabled />);
