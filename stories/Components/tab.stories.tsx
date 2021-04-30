import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import '../stories.styles.css';
import { Card } from '@atlantum/card';
import { Tab, Tabs, TabList, TabPanel } from '../../packages/tabs';

const TabStories = () => {
    return (
        <>
            <GlobalStyles />
            <div hidden>
                <Card size={'standard'}>
                    <Tabs defaultActive="Foo">
                        <TabList label="Entertainment">
                            <Tab id="Foo">Foo</Tab>
                            <Tab id="Bar">Bar</Tab>
                            <Tab id="Baz">Baz</Tab>
                        </TabList>
                        <TabPanel id="Foo">
                            <div hidden={true}>
                                Nils Frahm is a German musician, composer and
                                record producer based in Berlin. He is known for
                                combining classical and electronic music and for
                                an unconventional approach to the piano in which
                                he mixes a grand piano, upright piano, Roland
                                Juno-60, Rhodes piano, drum machine, and Moog
                                Taurus.
                            </div>
                        </TabPanel>
                        <TabPanel id="Bar">
                            Agnes Caroline Thaarup Obel is a Danish
                            singer/songwriter. Her first album, Philharmonics,
                            was released by PIAS Recordings on 4 October 2010 in
                            Europe. Philharmonics was certified gold in June
                            2011 by the Belgian Entertainment Association (BEA)
                            for sales of 10,000 Copies.
                        </TabPanel>
                        <TabPanel id="Baz">
                            was released by PIAS Recordings on 4 October 2010 in
                            Europe. Philharmonics was certified gold in June
                            2011 by the Belgian Entertainment Association (BEA)
                            for sales of 10,000 Copies.
                        </TabPanel>
                    </Tabs>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Tab', module).add('Default', () => <TabStories />);
