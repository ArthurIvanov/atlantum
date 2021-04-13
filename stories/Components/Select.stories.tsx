import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import { Card } from '@atlantum/card';
import { Select } from '../../packages/select';
import '../stories.styles.css';

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

storiesOf('Components/Select', module).add('Default', () => <DefaultSelect />);
