import React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import { ItemsStack } from '@atlantum/items-stack';
import { Tag } from '../../packages/tag';
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
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D860%253A249"
                    allowFullScreen
                />
                <iframe
                    style={{ borderRadius: '4px', border: 'none' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D860%253A244"
                    allowFullScreen
                />
            </ItemsStack>
        </div>
    );
};
const Tags = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size="standard">
                    <ItemsStack direction={'row'}>
                        <Tag tagColor={'neutral'}>Neutral tag</Tag>
                        <Tag tagColor={'red'}>Red tag</Tag>
                        <Tag tagColor={'green'}>Green tag</Tag>
                        <Tag tagColor={'orange'}>Orange tag</Tag>
                        <Tag tagColor={'blue'}>Blue tag</Tag>
                    </ItemsStack>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Tag', module).add('Design', () => <Design />);
storiesOf('Components/Tag', module).add('Tag variations', () => <Tags />);
