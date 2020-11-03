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
                <Radio type={'radio'} name={'radio'} />
                <Radio disabled type={'radio'} name={'radio'} />
                <Radio danger type={'radio'} name={'radio'} />
                <Radio success type={'radio'} name={'radio'} />
            </div>
        </ThemeProvider>
    );
};

storiesOf('Inputs/Radio', module).add('All radio buttons', () => <Radios />);
