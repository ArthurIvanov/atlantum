import * as React from 'react';
import { storiesOf } from '@storybook/react';
import '../stories.styles.css';
import { Card } from '@atlantum/card';
import { Tab, Tabs, TabList, TabPanel } from '@atlantum/tabs';
import { GlobalStyles } from '@atlantum/theme';
import { Text } from '@atlantum/text';

const TabStories = () => {
    return (
        <>
            <GlobalStyles />
            <div>
                <Card size={'standard'}>
                    <Tabs defaultActive="tab-1">
                        <TabList label="Entertainment">
                            <Tab id="tab-1">Tab 1</Tab>
                            <Tab id="tab-2">Tab 2</Tab>
                            <Tab id="tab-3">Tab 3</Tab>
                        </TabList>
                        <TabPanel id="tab-1">
                            <Text as={'p'}>
                                Content for first tab goes here.
                            </Text>
                        </TabPanel>
                        <TabPanel id="tab-2">
                            <Text as={'p'}>
                                Content for second tab goes here.
                            </Text>
                        </TabPanel>
                        <TabPanel id="tab-3">
                            <Text as={'p'}>
                                Content for third tab goes here.
                            </Text>
                        </TabPanel>
                    </Tabs>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Tabs', module).add('Default', () => <TabStories />);
