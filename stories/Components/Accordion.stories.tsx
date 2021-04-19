import * as React from 'react';
import { Accordion, AccordionItem } from '@atlantum/accordion';
import { storiesOf } from '@storybook/react';

import { GlobalStyles } from '@atlantum/theme';
import '../stories.styles.css';
import { Card } from '@atlantum/card';
import { NavigationLink } from '@atlantum/navigation-link';
import { ItemsStack } from '@atlantum/items-stack';

const Design = () => {
    return (
        <div className="atlantum-full-view">
            <ItemsStack direction={'row'}>
                <iframe
                    style={{ borderRadius: '4px', border: 'none' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D96%253A507"
                    allowFullScreen
                />
                <iframe
                    style={{ borderRadius: '4px', border: 'none' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D96%253A502"
                    allowFullScreen
                />
            </ItemsStack>
        </div>
    );
};

const Accordions = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'full'}>
                    <Accordion>
                        <AccordionItem title={'Expandable item 1'}>
                            <NavigationLink href="https://atlantum-ds-storybook.netlify.app/?path=/story/accordion--accordions">
                                Navigation link 1
                            </NavigationLink>
                            <NavigationLink href="https://atlantum-ds-storybook.netlify.app/?path=/story/accordion--accordions">
                                Navigation link 2
                            </NavigationLink>
                            <NavigationLink href="https://atlantum-ds-storybook.netlify.app/?path=/story/accordion--accordions">
                                Navigation link 3
                            </NavigationLink>
                            <NavigationLink href="https://atlantum-ds-storybook.netlify.app/?path=/story/accordion--accordions">
                                Navigation link 4
                            </NavigationLink>
                        </AccordionItem>
                        <AccordionItem title={'Expandable item 2'}>
                            <NavigationLink href="https://atlantum-ds-storybook.netlify.app/?path=/story/accordion--accordions">
                                Navigation link 1
                            </NavigationLink>
                            <NavigationLink href="https://atlantum-ds-storybook.netlify.app/?path=/story/accordion--accordions">
                                Navigation link 2
                            </NavigationLink>
                            <NavigationLink href="https://atlantum-ds-storybook.netlify.app/?path=/story/accordion--accordions">
                                Navigation link 3
                            </NavigationLink>
                            <NavigationLink href="https://atlantum-ds-storybook.netlify.app/?path=/story/accordion--accordions">
                                Navigation link 4
                            </NavigationLink>
                        </AccordionItem>

                        <NavigationLink href="https://atlantum-ds-storybook.netlify.app/?path=/story/accordion--accordions">
                            Navigation link 4
                        </NavigationLink>
                    </Accordion>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Accordion', module).add('Design', () => <Design />);
storiesOf('Components/Accordion', module).add('Accordions', () => (
    <Accordions />
));
