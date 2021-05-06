import * as React from 'react';
import { Datepicker } from '@atlantum/datepicker';
import { Card } from '@atlantum/card';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import '../stories.styles.css';

const DefaultInput = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <Datepicker
                        name={'date'}
                        label={'Choose your date'}
                        id={'datepicker'}
                        input
                        type={'date'}
                    />
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Datepicker', module).add('Default', () => (
    <DefaultInput />
));
