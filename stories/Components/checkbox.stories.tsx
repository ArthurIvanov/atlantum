import * as React from 'react';
import { Checkbox } from '@atlantum/checkbox';
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
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D116%253A242"
                    allowFullScreen
                />
                <iframe
                    style={{ borderRadius: '4px', border: 'none' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D116%253A239"
                    allowFullScreen
                />
            </ItemsStack>
        </div>
    );
};

storiesOf('Components/Checkbox', module).add('Design', () => <Design />);

const Regular = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <Checkbox
                        type={'checkbox'}
                        name={'username'}
                        label={'Label'}
                    />
                </Card>
            </div>
        </>
    );
};
const Checked = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <Checkbox
                        checked
                        type={'checkbox'}
                        name={'username'}
                        label={'Label'}
                    />
                </Card>
            </div>
        </>
    );
};

const Disabled = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <Checkbox
                        checked
                        disabled
                        type={'checkbox'}
                        name={'username'}
                        label={'Label'}
                    />
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Checkbox', module).add('Regular', () => <Regular />);
storiesOf('Components/Checkbox', module).add('Checked', () => <Checked />);
storiesOf('Components/Checkbox', module).add('Disabled', () => <Disabled />);
