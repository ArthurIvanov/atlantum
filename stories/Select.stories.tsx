import * as React from 'react';
import Select from '../packages/components/select';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { lightTheme } from '@atlantum/theme';
import './stories.styles.css';
import Card from '@atlantum/card';

const DefaultSelect = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <Select
                        name={'select'}
                        type={'text'}
                        placeholder={'Please select and option'}
                    >
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </Select>
                </Card>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Select', module).add('Default', () => <DefaultSelect />);
