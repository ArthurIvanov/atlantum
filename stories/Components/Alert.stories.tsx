import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { GlobalStyles } from '@atlantum/theme';
import { Alert } from '@atlantum/alert';
import '../stories.styles.css';
import { ItemsStack } from '@atlantum/items-stack';
import { Card } from '@atlantum/card';
import { Heading } from '@atlantum/heading';

const Design = () => {
    return (
        <div className="atlantum-full-view">
            <ItemsStack direction={'row'}>
                <iframe
                    style={{ borderRadius: '4px', border: 'none' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D96%253A321"
                    allowFullScreen
                />
                <iframe
                    style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D96%253A2"
                    allowFullScreen
                />
            </ItemsStack>
        </div>
    );
};

const AlertInfo = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size="standard">
                    <ItemsStack direction="column">
                        <Heading as={'h4'}>In development</Heading>
                        <Alert
                            alertStatus={'info'}
                            alertTitle={'Info alert title'}
                            isClosable
                        >
                            Alert text placeholder
                        </Alert>
                        <Alert alertStatus={'info'}>
                            Alert text placeholder
                        </Alert>
                    </ItemsStack>
                </Card>
            </div>
        </>
    );
};

const AlertSuccess = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size="standard">
                    <ItemsStack direction="column">
                        <Heading as={'h4'}>In development</Heading>
                        <Alert
                            alertStatus={'success'}
                            alertTitle={'Success alert title'}
                            isClosable
                        >
                            Alert text placeholder
                        </Alert>
                        <Alert alertStatus={'success'}>
                            Alert text placeholder
                        </Alert>
                    </ItemsStack>
                </Card>
            </div>
        </>
    );
};

const AlertWarning = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size="standard">
                    <ItemsStack direction="column">
                        <Heading as={'h4'}>In development</Heading>
                        <Alert
                            alertStatus={'warning'}
                            alertTitle={'Warning alert title'}
                            isClosable
                        >
                            Alert text placeholder
                        </Alert>
                        <Alert alertStatus={'warning'}>
                            Alert text placeholder
                        </Alert>
                    </ItemsStack>
                </Card>
            </div>
        </>
    );
};

const AlertDanger = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size="standard">
                    <ItemsStack direction="column">
                        <Heading as={'h4'}>In development</Heading>
                        <Alert
                            alertStatus={'danger'}
                            alertTitle={'Danger alert title'}
                            isClosable
                        >
                            Alert text placeholder
                        </Alert>
                        <Alert alertStatus={'danger'}>
                            Alert text placeholder
                        </Alert>
                    </ItemsStack>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Alert', module).add('Design', () => <Design />);
storiesOf('Components/Alert', module).add('Alert info', () => <AlertInfo />);
storiesOf('Components/Alert', module).add('Alert success', () => (
    <AlertSuccess />
));
storiesOf('Components/Alert', module).add('Alert warning', () => (
    <AlertWarning />
));

storiesOf('Components/Alert', module).add('Alert danger', () => (
    <AlertDanger />
));
