import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import { Card } from '@atlantum/card';

import { Box } from '../utilities/src/box.ut';

import '../stories.styles.css';

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

storiesOf('Layout/Card', module).add('Full', () => <Full />);
storiesOf('Layout/Card', module).add('Large', () => <Large />);
storiesOf('Layout/Card', module).add('Standard', () => <Standard />);
storiesOf('Layout/Card', module).add('Compact', () => <Compact />);
storiesOf('Layout/Card', module).add('Landing', () => <Landing />);
