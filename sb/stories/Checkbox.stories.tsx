import * as React from 'react';
import Checkbox from '@atlantum/checkbox';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@atlantum/theme';
import './stories.styles.css';

const Checkboxes = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="flex margin-r-24">
                <Checkbox type={'checkbox'} name={'username'} />
                <Checkbox
                    disabled
                    checked
                    type={'checkbox'}
                    name={'disabled'}
                />
                <Checkbox danger type={'checkbox'} name={'disabled'} />
                <Checkbox success type={'checkbox'} name={'disabled'} />
            </div>
        </ThemeProvider>
    );
};

storiesOf('Inputs/Checkbox', module).add('All checkboxes', () => (
    <Checkboxes />
));
