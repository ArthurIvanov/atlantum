import * as React from 'react';
import { storiesOf } from '@storybook/react';

import GlobalStyles from '@atlantum/theme';
import Alert from '@atlantum/alert';
import './stories.styles.css';

const AlertSuccess = () => {
    return (
        <>
            <GlobalStyles />
            <Alert alertStatus={'success'}>Hold on</Alert>
        </>
    );
};

const AlertDanger = () => {
    return (
        <>
            <GlobalStyles />
            <Alert alertStatus={'danger'}>Hold on</Alert>
        </>
    );
};

storiesOf('Alert', module).add('Alert success', () => <AlertSuccess />);
storiesOf('Alert', module).add('Alert danger', () => <AlertDanger />);
