import * as React from 'react';
import Radio from '@atlantum/radio';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@atlantum//theme';
import './stories.styles.css';

const Radios = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="flex margin-r-24">
                <div>
                    <Radio
                        type={'radio'}
                        name={'radio'}
                        label={'Regular radio'}
                    />
                </div>
                <div>
                    <Radio
                        disabled
                        type={'radio'}
                        name={'radio'}
                        label={'Disabled radio'}
                    />
                </div>
                <div>
                    <Radio
                        danger
                        type={'radio'}
                        name={'radio'}
                        label={'Danger radio'}
                    />
                </div>
                <div>
                    <Radio
                        success
                        type={'radio'}
                        name={'radio'}
                        label={'Success radio'}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Radio', module).add('All radio buttons', () => <Radios />);
