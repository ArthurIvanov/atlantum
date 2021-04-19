import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { GlobalStyles } from '@atlantum/theme';
import '../stories.styles.css';

import { ItemsStack } from '@atlantum/items-stack';
import { Text } from '@atlantum/text';
import { Card } from '@atlantum/card';

const Design = () => {
    return (
        <div className="atlantum-full-view">
            <iframe
                style={{ borderRadius: '4px', border: 'none' }}
                width="100%"
                height="400"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D189%253A123"
                allowFullScreen
            />
            <iframe
                style={{ borderRadius: '4px', border: 'none' }}
                width="100%"
                height="400"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D189%253A121"
                allowFullScreen
            />
        </div>
    );
};

storiesOf('Layout/ItemsStack', module).add('Design', () => <Design />);

const Horizontal = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <ItemsStack direction={'row'}>
                    <Card size={'standard'}>
                        <ItemsStack direction={'row'} distance="12px">
                            <Text as={'p'}>Distance</Text>
                            <Text as={'p'}>Between</Text>
                            <Text as={'p'}>12px</Text>
                        </ItemsStack>
                    </Card>
                    <Card size={'standard'}>
                        <ItemsStack direction={'row'} distance="24px">
                            <Text as={'p'}>Distance</Text>
                            <Text as={'p'}>Between</Text>
                            <Text as={'p'}>24px</Text>
                        </ItemsStack>
                    </Card>
                    <Card size={'standard'}>
                        <ItemsStack direction={'row'} distance="32px">
                            <Text as={'p'}>Distance</Text>
                            <Text as={'p'}>Between</Text>
                            <Text as={'p'}>32px</Text>
                        </ItemsStack>
                    </Card>
                </ItemsStack>
            </div>
        </>
    );
};

const Vertical = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <ItemsStack direction={'column'}>
                    <Card size={'standard'}>
                        <ItemsStack direction={'row'} distance="12px">
                            <Text as={'p'}>Distance</Text>
                            <Text as={'p'}>Between</Text>
                            <Text as={'p'}>12px</Text>
                        </ItemsStack>
                    </Card>
                    <Card size={'standard'}>
                        <ItemsStack direction={'row'} distance="24px">
                            <Text as={'p'}>Distance</Text>
                            <Text as={'p'}>Between</Text>
                            <Text as={'p'}>24px</Text>
                        </ItemsStack>
                    </Card>
                    <Card size={'standard'}>
                        <ItemsStack direction={'row'} distance="32px">
                            <Text as={'p'}>Distance</Text>
                            <Text as={'p'}>Between</Text>
                            <Text as={'p'}>32px</Text>
                        </ItemsStack>
                    </Card>
                </ItemsStack>
            </div>
        </>
    );
};

storiesOf('Layout/ItemsStack', module).add('horizontal', () => <Horizontal />);
storiesOf('Layout/ItemsStack', module).add('vertical', () => <Vertical />);
