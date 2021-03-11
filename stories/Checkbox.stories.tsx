import * as React from 'react';
import Checkbox from '@atlantum/checkbox';
import { storiesOf } from '@storybook/react';
import GlobalStyles from '@atlantum/theme';
import './stories.styles.css';
import Card from '@atlantum/card';

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

storiesOf('Checkbox', module).add('Regular', () => <Regular />);
storiesOf('Checkbox', module).add('Checked', () => <Checked />);
storiesOf('Checkbox', module).add('Disabled', () => <Disabled />);
