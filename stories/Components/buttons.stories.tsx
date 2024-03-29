import React from 'react';
import { Button, ButtonIcon, ButtonGroup } from '@atlantum/button';

import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import { Icon } from '@atlantum/icons';

import '../stories.styles.css';
import { Card } from '@atlantum/card';
import { ItemsStack } from '@atlantum/items-stack';

const Primary = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <Button>I am primary</Button>
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

const Custom = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <ItemsStack direction={'column'} distance={'24px'}>
                        <Button themed={`danger`}>Danger</Button>
                        <Button themed={`warning`}>Warning</Button>
                        <Button themed={`success`}>Success</Button>
                        <Button themed={`info`}>Info</Button>
                    </ItemsStack>
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
                <Card size="standard">
                    <ItemsStack direction="row">
                        <div>
                            <ButtonIcon>
                                <Icon name={'terminal'} size={24} />
                            </ButtonIcon>
                        </div>
                        <div>
                            <ButtonIcon isSecondary>
                                <Icon name={'terminal'} />
                            </ButtonIcon>
                        </div>
                    </ItemsStack>
                </Card>
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
                            leftIcon={<Icon name={'git-commit'} size={24} />}
                        >
                            First
                        </Button>
                        <Button>Second</Button>
                        <ButtonIcon>
                            <Icon name={'git-pull-request'} size={24} />
                        </ButtonIcon>
                    </ButtonGroup>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Button', module).add('Primary', () => <Primary />);
storiesOf('Components/Button', module).add('Secondary', () => <Secondary />);
storiesOf('Components/Button', module).add('Disabled', () => <Disabled />);
storiesOf('Components/Button', module).add('Custom', () => <Custom />);
storiesOf('Components/Button', module).add('Icon', () => <BtnIcon />);
storiesOf('Components/Button', module).add('Group', () => <BtnGroup />);
