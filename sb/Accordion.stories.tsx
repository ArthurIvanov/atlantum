import * as React from 'react';
import Accordion from '@atlantum/accordion';
import AccordionItem from '@atlantum/accordion-item';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@atlantum/theme';
import './stories.styles.css';

const Accordions = () => {
    return (
        <ThemeProvider theme={theme}>
            <Accordion>
                <AccordionItem title={'Design'}>
                    <li>
                        <a href="#">Foundation</a>
                    </li>
                    <li>
                        <a href="#">Idea</a>
                    </li>
                    <li>
                        <a href="#">Examples</a>
                    </li>
                </AccordionItem>
                <AccordionItem title={'Components'}>
                    <li>
                        <a href="#">Accordion</a>
                    </li>
                    <li>
                        <a href="#">Button</a>
                    </li>
                    <li>
                        <a href="#">Input</a>
                    </li>
                </AccordionItem>

                <li>
                    <a href="https://github.com/ArthurIvanov">Github</a>
                </li>
            </Accordion>
        </ThemeProvider>
    );
};

storiesOf('Accordion', module).add('Accordions', () => <Accordions />);
