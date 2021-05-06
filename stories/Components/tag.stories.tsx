import React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import { ItemsStack } from '@atlantum/items-stack';
import { Tag } from '@atlantum/tag';
import { Card } from '@atlantum/card';
import '../stories.styles.css';

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

storiesOf('Components/Tag', module).add('Tag variations', () => <Tags />);
