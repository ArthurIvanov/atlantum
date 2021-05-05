import * as React from 'react';
import { Toggle } from '@atlantum/toggle';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import { Card } from '@atlantum/card';
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
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D268%253A178"
                    allowFullScreen
                />
                <iframe
                    style={{ borderRadius: '4px', border: 'none' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D268%253A173"
                    allowFullScreen
                />
            </ItemsStack>
        </div>
    );
};

storiesOf('Components/Toggle', module).add('Design', () => <Design />);

const DefaultToggle = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <div>
                        <Toggle
                            type={'checkbox'}
                            name={'toggle'}
                            label={'Regular toggle'}
                        />
                    </div>
                </Card>
            </div>
        </>
    );
};
const DisabledToggle = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <div>
                        <Toggle
                            disabled
                            type={'checkbox'}
                            name={'toggle'}
                            label={'Disabled toggle'}
                        />
                    </div>
                </Card>
            </div>
        </>
    );
};
const SwitchedToggle = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <div>
                        <Toggle
                            checked
                            type={'checkbox'}
                            name={'toggle'}
                            label={'Switch "on" toggle'}
                        />
                    </div>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Toggle', module).add('Default', () => <DefaultToggle />);
storiesOf('Components/Toggle', module).add('Disabled', () => (
    <DisabledToggle />
));
storiesOf('Components/Toggle', module).add('Switched on', () => (
    <SwitchedToggle />
));
