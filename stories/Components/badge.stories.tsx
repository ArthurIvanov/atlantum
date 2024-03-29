import React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import { ItemsStack } from '@atlantum/items-stack';
import { Badge } from '@atlantum/badge';
import { Card } from '@atlantum/card';
import '../stories.styles.css';

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

storiesOf('Components/Badge', module).add('Default', () => <BadgesFilled />);
