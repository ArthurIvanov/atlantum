import * as React from 'react';
import { storiesOf } from '@storybook/react';

import GlobalStyles from '@atlantum/theme';
import './stories.styles.css';

import ItemsStack from '@atlantum/items-stack';
import Text from '@atlantum/text';
import Card from '@atlantum/card';

const Horizontal = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <ItemsStack direction={'row'}>
                    <Card size={'standard'}>
                        <ItemsStack direction={'row'}>
                            <Text as={'p'}>One</Text>
                            <Text as={'p'}>Two</Text>
                            <Text as={'p'}>Three</Text>
                        </ItemsStack>
                    </Card>
                    <Card size={'standard'}>
                        <ItemsStack direction={'row'}>
                            <Text as={'p'}>One</Text>
                            <Text as={'p'}>Two</Text>
                            <Text as={'p'}>Three</Text>
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
                        <ItemsStack direction={'column'}>
                            <Text as={'p'}>One</Text>
                            <Text as={'p'}>Two</Text>
                            <Text as={'p'}>Three</Text>
                        </ItemsStack>
                    </Card>
                    <Card size={'standard'}>
                        <ItemsStack direction={'column'}>
                            <Text as={'p'}>One</Text>
                            <Text as={'p'}>Two</Text>
                            <Text as={'p'}>Three</Text>
                        </ItemsStack>
                    </Card>
                </ItemsStack>
            </div>
        </>
    );
};

storiesOf('ItemsStack', module).add('horizontal', () => <Horizontal />);
storiesOf('ItemsStack', module).add('vertical', () => <Vertical />);
