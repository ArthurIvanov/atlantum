import React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import { Card } from '@atlantum/card';
import { ItemsStack } from '@atlantum/items-stack';
import { Divider } from '@atlantum/divider';

import '../stories.styles.css';

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

storiesOf('Components/Divider', module).add('Default', () => (
    <DividerDefault />
));
