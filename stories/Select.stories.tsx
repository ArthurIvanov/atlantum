import * as React from 'react';
import Select from '../packages/components/select';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@atlantum/theme';
import './stories.styles.css';


const Checkboxes = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="flex margin-r-24">
                <div>
                    <Select name={'select'} type={'text'} placeholder={'Please select and option'}>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </Select>
                </div>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Select', module).add('Select', () => <Checkboxes />);
