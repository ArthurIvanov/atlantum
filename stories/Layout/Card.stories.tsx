import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import { Card } from '@atlantum/card';

import { Box } from '../utilities/box.ut';

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
                    <Box>Here is no padding</Box>
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
                    <Box>Padding from sides is 12px</Box>
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
                    <Box>Padding from sides is 24px</Box>
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
                    <Box>Padding from sides is 48px</Box>
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
                    <Box>Padding from sides is 64px</Box>
                </Card>
            </div>
        </>
    );
};

storiesOf('Layout/Card', module).add('Design', () => <Design />);
storiesOf('Layout/Card', module).add('Full', () => <Full />);
storiesOf('Layout/Card', module).add('Large', () => <Large />);
storiesOf('Layout/Card', module).add('Standard', () => <Standard />);
storiesOf('Layout/Card', module).add('Compact', () => <Compact />);
storiesOf('Layout/Card', module).add('Landing', () => <Landing />);
