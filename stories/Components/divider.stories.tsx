import React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import { Card } from '@atlantum/card';
import { ItemsStack } from '@atlantum/items-stack';
import { Divider } from '@atlantum/divider';

import '../stories.styles.css';

const Design = () => {
    return (
        <div className="atlantum-full-view">
            <ItemsStack direction={'row'}>
                <iframe
                    style={{ borderRadius: '4px', border: 'none' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D811%253A3"
                    allowFullScreen
                />
                <iframe
                    style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D811%253A0"
                    allowFullScreen
                />
            </ItemsStack>
        </div>
    );
};

const DividerDefault = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <ItemsStack direction={'row'} distance={'24px'}>
                        <Divider orientation={'horizontal'} length={'200px'} />
                        <Divider orientation={'vertical'} length={'50px'} />
                    </ItemsStack>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Divider', module).add('Design', () => <Design />);
storiesOf('Components/Divider', module).add('Default', () => (
    <DividerDefault />
));
