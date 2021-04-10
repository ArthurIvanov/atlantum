import * as React from 'react';
import { Datepicker } from '@atlantum/datepicker';
import { Card } from '@atlantum/card';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import '../stories.styles.css';
import { ItemsStack } from '@atlantum/items-stack';

const Design = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size="standard">Under development</Card>
            </div>
        </>
    );
};

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
                    />
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Datepicker', module).add('Design', () => <Design />);
storiesOf('Components/Datepicker', module).add('Default', () => (
    <DefaultInput />
));
