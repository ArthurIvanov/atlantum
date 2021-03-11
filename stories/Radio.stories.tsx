import * as React from 'react';
import Radio from '@atlantum/radio';
import { storiesOf } from '@storybook/react';
import GlobalStyles  from '@atlantum/theme';
import './stories.styles.css';
import Card from '@atlantum/card';

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

storiesOf('Radio', module).add('Default', () => <DefaultRadio />);
storiesOf('Radio', module).add('Disabled', () => <DisabledRadio />);
storiesOf('Radio', module).add('Success', () => <SuccessRadio />);
storiesOf('Radio', module).add('Danger', () => <DangerRadio />);
