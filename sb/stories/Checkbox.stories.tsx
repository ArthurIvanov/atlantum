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
                <div>
                    <Checkbox
                        type={'checkbox'}
                        name={'username'}
                        label={'Regular checkbox'}
                    />
                </div>
                <div>
                    <Checkbox
                        disabled
                        checked
                        type={'checkbox'}
                        name={'checkbox'}
                        label={'Disabled checkbox'}
                    />
                </div>
                <div>
                    <Checkbox
                        danger
                        type={'checkbox'}
                        name={'disabled'}
                        label={'Danger checkbox'}
                    />
                </div>
                <div>
                    <Checkbox
                        success
                        type={'checkbox'}
                        name={'disabled'}
                        label={'Success checkbox'}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Checkbox', module).add('All checkboxes', () => <Checkboxes />);
