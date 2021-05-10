import React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import { ItemsStack } from '@atlantum/items-stack';
import { Code } from '../../packages/code';
import { Card } from '@atlantum/card';
import '../stories.styles.css';

const CodePreview = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size="standard">
                    <ItemsStack direction={'row'}>
                        <Code>$ yarn add '@atlantum/core'</Code>
                    </ItemsStack>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Code', module).add('Default', () => <CodePreview />);
