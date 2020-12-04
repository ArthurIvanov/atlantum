import * as React from 'react';
import MainHeader from '@atlantum/main-header';
import Sidebar from '@atlantum/sidebar';
import Accordion from '@atlantum//accordion';
import AccordionItem from '@atlantum//accordion-item';
import Heading from '@atlantum/heading';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles, { theme } from '@atlantum/theme';
import './stories.styles.css';

const UI = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MainHeader>
                <a href="#">
                    <Heading as={'h6'}>Atlantum Design System</Heading>
                </a>
            </MainHeader>
            <Sidebar>
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
            </Sidebar>
        </ThemeProvider>
    );
};

storiesOf('UI', module).add('UI', () => <UI />);
