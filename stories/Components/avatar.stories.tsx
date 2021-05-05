import React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import { Card } from '@atlantum/card';
import { ItemsStack } from '@atlantum/items-stack';
import { Avatar } from '@atlantum/avatar';

import '../stories.styles.css';

const Design = () => {
    return (
        <div className="atlantum-full-view">
            <ItemsStack direction={'row'}>
                <iframe
                    style={{ borderRadius: '4px', border: 'none' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D560%253A196"
                    allowFullScreen
                />
                <iframe
                    style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D560%253A175"
                    allowFullScreen
                />
            </ItemsStack>
        </div>
    );
};

const AvatarDefault = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <ItemsStack direction={'row'} distance={'24px'}>
                        <Avatar size={'default'} />
                        <Avatar
                            size={'default'}
                            src={'https://i.ibb.co/PWt4sKP/me.jpg'}
                        />
                        <Avatar size={'default'}>ai</Avatar>
                    </ItemsStack>
                </Card>
            </div>
        </>
    );
};
const AvatarLarge = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <ItemsStack direction={'row'} distance={'24px'}>
                        <Avatar size={'large'} />
                        <Avatar
                            size={'large'}
                            src={'https://i.ibb.co/PWt4sKP/me.jpg'}
                        />
                        <Avatar size={'large'}>ai</Avatar>
                    </ItemsStack>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Avatar', module).add('Design', () => <Design />);
storiesOf('Components/Avatar', module).add('Default', () => <AvatarDefault />);
storiesOf('Components/Avatar', module).add('Large', () => <AvatarLarge />);
