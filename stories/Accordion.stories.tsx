import * as React from 'react';
import Accordion from '@atlantum/accordion';
import AccordionItem from '@atlantum/accordion-item';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { theme } from '@atlantum/theme';
import './stories.styles.css';
import Card from '@atlantum/card';

const Accordions = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="atlantum-compact">
                <Card size={'standard'}>
                    <Accordion>
                        <AccordionItem title={'Expandable item 1'}>
                            <li>
                                <a href="#">Nested item 1</a>
                            </li>
                            <li>
                                <a href="#">Nested item 2</a>
                            </li>
                            <li>
                                <a href="#">Nested item 3</a>
                            </li>
                        </AccordionItem>
                        <AccordionItem title={'Expandable item 2'}>
                            <li>
                                <a href="#">Nested item 1</a>
                            </li>
                            <li>
                                <a href="#">Nested item 1</a>
                            </li>
                            <li>
                                <a href="#">Nested item 1</a>
                            </li>
                        </AccordionItem>

                        <li>
                            <a href="https://github.com/ArthurIvanov">
                                Nested item 1
                            </a>
                        </li>
                    </Accordion>
                </Card>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Accordion', module).add('Accordions', () => <Accordions />);
