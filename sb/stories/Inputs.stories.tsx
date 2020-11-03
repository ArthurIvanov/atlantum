import * as React from 'react';
import Input from '@atlantum/input';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@atlantum/theme';
import './stories.styles.css';

const Inputs = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="flex margin-r-24">
                <Input
                    type={'text'}
                    name={'username'}
                    label={'basic label'}
                    input
                    id={'text'}
                    placeholder={'Please enter your name'}
                />
                <Input
                    disabled
                    label={'basic label'}
                    input
                    type={'text'}
                    name={'disabled'}
                    defaultValue={'Read only'}
                />
                <Input
                    danger
                    label={'danger label'}
                    type={'text'}
                    name={'disabled'}
                    placeholder={'Oops, some mistake here!'}
                />
                <Input
                    success
                    type={'text'}
                    name={'disabled'}
                    placeholder={'You are good to go!'}
                />
            </div>
        </ThemeProvider>
    );
};

storiesOf('Inputs/Text input', module).add('All text inputs', () => <Inputs />);
