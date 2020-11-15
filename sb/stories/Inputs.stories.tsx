import * as React from 'react';
import Input from '@atlantum/input';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@atlantum/theme';

import { theme } from '@atlantum/theme';
import './stories.styles.css';

const Inputs = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="flex margin-r-24">
                <div>
                    <Input
                        type={'text'}
                        name={'username'}
                        label={'Regular input'}
                        input
                        id={'text'}
                        placeholder={'Please enter your name'}
                    />
                </div>

                <div>
                    <Input
                        disabled
                        input
                        label={'Disabled input'}
                        type={'text'}
                        name={'disabled'}
                        defaultValue={'Read only'}
                    />
                </div>

                <div>
                    <Input
                        danger
                        input
                        label={'Danger input'}
                        alert={'alert message!'}
                        type={'text'}
                        name={'danger'}
                        placeholder={'Oops, some mistake here!'}
                        defaultValue={'Damn! Mistake here! 🤬'}
                    />
                </div>

                <div>
                    <Input
                        success
                        input
                        label={'Success input'}
                        type={'text'}
                        name={'success'}
                        placeholder={'Enter something'}
                        defaultValue={'Everything are ok 👍'}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Text-input', module).add('All text inputs', () => <Inputs />);
