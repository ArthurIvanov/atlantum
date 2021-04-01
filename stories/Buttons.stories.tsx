import * as React from 'react';
import Button from '@atlantum/button';
import ButtonIcon from '../packages/components/button-icon';
import ButtonGroup from '../packages/components/button-group';
import { storiesOf } from '@storybook/react';
import GlobalStyles from '@atlantum/theme';
import Icon from '@atlantum/icons';

import './stories.styles.css';
import Card from '@atlantum/card';

const Primary = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <Button leftIcon>I am primary</Button>
                </Card>
            </div>
        </>
    );
};
const Secondary = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <Button isSecondary>I am Secondary</Button>
                </Card>
            </div>
        </>
    );
};
const Disabled = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <Button disabled>I am Disabled</Button>
                </Card>
            </div>
        </>
    );
};

const BtnIcon = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <ButtonIcon isSecondary>
                    <Icon name={'terminal'} />
                </ButtonIcon>
            </div>
        </>
    );
};

const BtnGroup = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <ButtonGroup>
                        <Button
                            isSecondary
                            leftIcon={<Icon name={'git-commit'} size={20} />}
                        >
                            First
                        </Button>
                        <Button>Second</Button>
                        <ButtonIcon>
                            <Icon name={'git-pull-request'} size={20} />
                        </ButtonIcon>
                    </ButtonGroup>
                </Card>
            </div>
        </>
    );
};

storiesOf('Button', module).add('Primary', () => <Primary />);
storiesOf('Button', module).add('Secondary', () => <Secondary />);
storiesOf('Button', module).add('Disabled', () => <Disabled />);
storiesOf('Button', module).add('Icon', () => <BtnIcon />);
storiesOf('Button', module).add('Group', () => <BtnGroup />);
