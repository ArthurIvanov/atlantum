import React from 'react';
import { GlobalStyles } from '@atlantum/theme';
import { TextInput } from '../../packages/text-input';
import { Card } from '../../packages/layout/card';
import { storiesOf } from '@storybook/react';
import { ItemsStack } from '@atlantum/items-stack';
import '../stories.styles.css';

const Design = () => {
    return (
        <div className="atlantum-full-view">
            <ItemsStack direction={'row'}>
                <iframe
                    style={{ borderRadius: '4px', border: 'none' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D344%253A1327"
                    allowFullScreen
                />
                <iframe
                    style={{ borderRadius: '4px', border: 'none' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D344%253A1322"
                    allowFullScreen
                />
            </ItemsStack>
        </div>
    );
};

storiesOf('Components/Text-input', module).add('Design', () => <Design />);

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
