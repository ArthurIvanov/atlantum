import * as React from 'react';
import { Accordion, AccordionItem } from '@atlantum/accordion';
import { storiesOf } from '@storybook/react';

import { GlobalStyles } from '@atlantum/theme';
import { Card } from '@atlantum/card';
import { NavigationLink } from '@atlantum/navigation-link';
import '../stories.styles.css';

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

storiesOf('Components/Accordion', module).add('Accordions', () => (
    <Accordions />
));
