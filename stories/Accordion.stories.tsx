import * as React from 'react';
import Accordion from '@atlantum/accordion';
import AccordionItem from '@atlantum/accordion-item';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { lightTheme } from '@atlantum/theme';
import './stories.styles.css';
import Card from '@atlantum/card';
import NavigationLink from '../packages/components/navigation-link';

const Accordions = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'full'}>
                    <Accordion>
                        <AccordionItem title={'Expandable item 1'}>
                            <NavigationLink href="https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src">
                                Navigation link 1
                            </NavigationLink>
                            <NavigationLink href="https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src">
                                Navigation link 2
                            </NavigationLink>
                            <NavigationLink href="https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src">
                                Navigation link 3
                            </NavigationLink>
                            <NavigationLink href="https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src">
                                Navigation link 4
                            </NavigationLink>
                        </AccordionItem>
                        <AccordionItem title={'Expandable item 2'}>
                            <NavigationLink href="https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src">
                                Navigation link 1
                            </NavigationLink>
                            <NavigationLink href="https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src">
                                Navigation link 2
                            </NavigationLink>
                            <NavigationLink href="https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src">
                                Navigation link 3
                            </NavigationLink>
                            <NavigationLink href="https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src">
                                Navigation link 4
                            </NavigationLink>
                        </AccordionItem>

                        <NavigationLink href="https://github.com/kiwicom/orbit/tree/master/packages/orbit-components/src">
                            Navigation link 4
                        </NavigationLink>
                    </Accordion>
                </Card>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Accordion', module).add('Accordions', () => <Accordions />);
