import * as React from 'react';
import { storiesOf } from '@storybook/react';

import GlobalStyles from '@atlantum/theme';
import Alert from '@atlantum/alert';
import './stories.styles.css';

const AlertError = () => {
    return (
        <>
            <GlobalStyles />
            <Alert alertStatus={'danger'}>Hold on</Alert>
        </>
    );
};

storiesOf('Alert', module).add('Alert danger', () => <AlertError />);
