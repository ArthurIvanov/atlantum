import * as React from 'react';
import { Radio } from '@atlantum/radio';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import { Card } from '@atlantum/card';

import '../stories.styles.css';

const DefaultRadio = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size="standard">
                    <Radio
                        type={'radio'}
                        name={'radio'}
                        label={'Regular radio'}
                    />
                </Card>
            </div>
        </>
    );
};

const CheckedRadio = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size="standard">
                    <Radio
                        checked
                        type={'radio'}
                        name={'radio'}
                        label={'Regular radio'}
                    />
                </Card>
            </div>
        </>
    );
};

const DisabledRadio = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size="standard">
                    <Radio
                        disabled
                        checked
                        type={'radio'}
                        name={'radio'}
                        label={'Disabled radio'}
                    />
                </Card>
            </div>
        </>
    );
};

const SuccessRadio = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size="standard">
                    <Radio
                        success
                        type={'radio'}
                        name={'radio'}
                        label={'Success radio'}
                    />
                </Card>
            </div>
        </>
    );
};

const DangerRadio = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size="standard">
                    <Radio
                        danger
                        type={'radio'}
                        name={'radio'}
                        label={'Danger radio'}
                    />
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Radio', module).add('Default', () => <DefaultRadio />);
storiesOf('Components/Radio', module).add('Checked', () => <CheckedRadio />);
storiesOf('Components/Radio', module).add('Disabled', () => <DisabledRadio />);
storiesOf('Components/Radio', module).add('Success', () => <SuccessRadio />);
storiesOf('Components/Radio', module).add('Danger', () => <DangerRadio />);
