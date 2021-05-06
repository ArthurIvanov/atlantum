import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { GlobalStyles } from '@atlantum/theme';
import { Alert } from '@atlantum/alert';
import { ItemsStack } from '@atlantum/items-stack';
import { Card } from '@atlantum/card';
import { Heading } from '@atlantum/heading';
import '../stories.styles.css';

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
