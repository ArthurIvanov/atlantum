import * as React from 'react';
import Select from '../packages/components/select';
import { storiesOf } from '@storybook/react';
import GlobalStyles  from '@atlantum/theme';
import './stories.styles.css';
import Card from '@atlantum/card';

const DefaultSelect = () => {
    return (
        <>
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
        </>
    );
};

storiesOf('Select', module).add('Default', () => <DefaultSelect />);
