import React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import { ItemsStack } from '@atlantum/items-stack';
import { Badge } from '../../packages/badge';
import { Card } from '@atlantum/card';
import '../stories.styles.css';

const Design = () => {
    return (
        <div className="atlantum-full-view">
            <ItemsStack direction={'row'}>
                <iframe
                    style={{ borderRadius: '4px', border: 'none' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D96%253A756"
                    allowFullScreen
                />
                <iframe
                    style={{ borderRadius: '4px', border: 'none' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D96%253A753"
                    allowFullScreen
                />
            </ItemsStack>
        </div>
    );
};
const BadgesFilled = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size="standard">
                    <ItemsStack direction={'row'}>
                        <Badge isInfo>Info</Badge>
                        <Badge isSuccess>Success</Badge>
                        <Badge isWarning>Warning</Badge>
                        <Badge isDanger>Danger</Badge>
                    </ItemsStack>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Badge', module).add('Design', () => <Design />);
storiesOf('Components/Badge', module).add('Default', () => <BadgesFilled />);
