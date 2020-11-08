import * as React from 'react';
import Toggle from '../../packages/components/toggle';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@atlantum/theme';
import './stories.styles.css';

const Toggles = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="flex margin-r-24">
                <div>
                    <Toggle
                        type={'checkbox'}
                        name={'checkbox'}
                        label={'Regular toggle'}
                    />
                </div>
                <div>
                    <Toggle
                        disabled
                        type={'checkbox'}
                        name={'checkbox'}
                        label={'Disabled toggle'}
                    />
                </div>
                <div>
                    <Toggle
                        checked
                        type={'checkbox'}
                        name={'checkbox'}
                        label={'Switch "on" toggle'}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Toggle', module).add('All toggles', () => <Toggles />);
