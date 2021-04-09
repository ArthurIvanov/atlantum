import * as React from 'react';
import { Button, ButtonIcon, ButtonGroup } from '@atlantum/button';

import { storiesOf } from '@storybook/react';
import GlobalStyles from '@atlantum/theme';
import { Icon } from '../../packages/components/icons/src';

import '../stories.styles.css';
import Card from '../../packages/layout/card';
import ItemsStack from '../../packages/layout/items-stack';

const Design = () => {
    return (
        <div className="atlantum-full-view">
            <ItemsStack direction={'row'}>
                <iframe
                    style={{ borderRadius: '4px', border: 'none' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D96%253A3192"
                    allowFullScreen
                />
                <iframe
                    style={{ borderRadius: '4px', border: 'none' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D96%253A3183"
                    allowFullScreen
                />
            </ItemsStack>
        </div>
    );
};

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

storiesOf('Components/Button', module).add('Design', () => <Design />);
storiesOf('Components/Button', module).add('Primary', () => <Primary />);
storiesOf('Components/Button', module).add('Secondary', () => <Secondary />);
storiesOf('Components/Button', module).add('Disabled', () => <Disabled />);
storiesOf('Components/Button', module).add('Icon', () => <BtnIcon />);
storiesOf('Components/Button', module).add('Group', () => <BtnGroup />);
