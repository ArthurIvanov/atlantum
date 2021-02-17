import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { lightTheme } from '@atlantum/theme';
import './stories.styles.css';

import Image from '@atlantum/image';

const Simple = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <div className="atlantum-view">
                <Image src="https://i.ibb.co/DLtL9b8/atlantum-bg.png" />
            </div>
        </ThemeProvider>
    );
};

storiesOf('Image', module).add('Simple', () => <Simple />);
