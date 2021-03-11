import * as React from 'react';
import Input from '@atlantum/input';
import Card from '@atlantum/card';
import { storiesOf } from '@storybook/react';
import GlobalStyles  from '@atlantum/theme';
import './stories.styles.css';

const DefaultInput = () => {
    return (
       <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <Input
                        type={'text'}
                        name={'username'}
                        label={'Input default'}
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
                    <Input
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
                    <Input
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
                    <Input
                        success
                        input
                        label={'Success input'}
                        type={'text'}
                        name={'danger'}
                        defaultValue={'Please enter text'}
                        value={'Yes! Correct!'}
                    />
                </Card>
            </div>
        </>
    );
};

storiesOf('Text-input', module).add('Default', () => <DefaultInput />);
storiesOf('Text-input', module).add('Disabled', () => <DisabledInput />);
storiesOf('Text-input', module).add('Danger', () => <DangerInput />);
storiesOf('Text-input', module).add('Success', () => <SuccessInput />);
