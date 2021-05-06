import React from 'react';
import { GlobalStyles } from '@atlantum/theme';
import { TextInput } from '@atlantum/text-input';
import { Card } from '@atlantum/card';
import { storiesOf } from '@storybook/react';
import '../stories.styles.css';

const DefaultInput = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <TextInput
                        type={'text'}
                        name={'username'}
                        label={'Default input'}
                        input
                        id={'text'}
                        placeholder={'Please enter your name'}
                    />
                </Card>
            </div>
        </>
    );
};

const DisabledInput = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <TextInput
                        disabled
                        input
                        label={'Disabled input'}
                        type={'text'}
                        name={'disabled'}
                        defaultValue={'Read only'}
                    />
                </Card>
            </div>
        </>
    );
};

const DangerInput = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <TextInput
                        danger
                        input
                        label={'Danger input'}
                        type={'text'}
                        name={'danger'}
                        defaultValue={'Please enter text'}
                        value={'Oh no! Mistake here!'}
                        alert={'Please enter a valid text'}
                    />
                </Card>
            </div>
        </>
    );
};

const SuccessInput = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <TextInput
                        input
                        success
                        label={'Success input'}
                        type={'text'}
                        name={'danger'}
                        defaultValue={'Please enter text'}
                        value={'Yes! Correct!'}
                        alert={'You got it right!'}
                    />
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Text-input', module).add('Default', () => (
    <DefaultInput />
));
storiesOf('Components/Text-input', module).add('Disabled', () => (
    <DisabledInput />
));
storiesOf('Components/Text-input', module).add('Danger', () => <DangerInput />);
storiesOf('Components/Text-input', module).add('Success', () => (
    <SuccessInput />
));
