import * as React from 'react';
import { Radio } from '@atlantum/radio';
import { storiesOf } from '@storybook/react';
import GlobalStyles from '@atlantum/theme';
import '../stories.styles.css';
import Card from '../../packages/layout/card';
import ItemsStack from '../../packages/layout/items-stack';

const Design = () => {
    return (
        <div className="atlantum-full-view">
            <ItemsStack direction={'row'}>
                <iframe
                    style={{ borderRadius: '4px', border: 'none' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D127%253A359"
                    allowFullScreen
                />
                <iframe
                    style={{ borderRadius: '4px', border: 'none' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D127%253A357"
                    allowFullScreen
                />
            </ItemsStack>
        </div>
    );
};

storiesOf('Components/Radio', module).add('Design', () => <Design />);

const DefaultRadio = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size="standard">
                    <Radio
                        fontWeight={'regular'}
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
storiesOf('Components/Radio', module).add('Disabled', () => <DisabledRadio />);
storiesOf('Components/Radio', module).add('Success', () => <SuccessRadio />);
storiesOf('Components/Radio', module).add('Danger', () => <DangerRadio />);
