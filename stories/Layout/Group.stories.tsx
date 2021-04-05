import React from 'react';
import { storiesOf } from '@storybook/react';
import GlobalStyles from '@atlantum/theme';
import Card from '@atlantum/card';

import '../stories.styles.css';

const Design = () => {
    return (
        <div className="atlantum-full-view">
            <iframe
                style={{ borderRadius: '4px', border: 'none' }}
                width="100%"
                height="400"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D96%253A3264"
                allowFullScreen
            />
            <iframe
                style={{ borderRadius: '4px', border: 'none' }}
                width="100%"
                height="400"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D96%253A3255"
                allowFullScreen
            />
        </div>
    );
};

const Full = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'full'}>
                    <div
                        style={{
                            width: '100%',
                            height: '200px',
                            background: '#F4F4F6',
                        }}
                    />
                </Card>
            </div>
        </>
    );
};

const Large = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'large'}>
                    <div
                        style={{
                            width: '100%',
                            height: '200px',
                            background: '#F4F4F6',
                        }}
                    />
                </Card>
            </div>
        </>
    );
};

const Standard = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <div
                        style={{
                            width: '100%',
                            height: '200px',
                            background: '#F4F4F6',
                        }}
                    />
                </Card>
            </div>
        </>
    );
};

const Compact = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'compact'}>
                    <div
                        style={{
                            width: '100%',
                            height: '200px',
                            background: '#F4F4F6',
                        }}
                    />
                </Card>
            </div>
        </>
    );
};

const Landing = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'landing'}>
                    <div
                        style={{
                            width: '100%',
                            height: '200px',
                            background: '#F4F4F6',
                        }}
                    />
                </Card>
            </div>
        </>
    );
};

storiesOf('Card', module).add('Design', () => <Design />);
storiesOf('Card', module).add('Full', () => <Full />);
storiesOf('Card', module).add('Large', () => <Large />);
storiesOf('Card', module).add('Standard', () => <Standard />);
storiesOf('Card', module).add('Compact', () => <Compact />);
storiesOf('Card', module).add('Landing', () => <Landing />);
