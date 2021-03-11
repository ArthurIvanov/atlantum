import * as React from 'react';
import MainHeader from '@atlantum/main-header';
import Sidebar from '@atlantum/sidebar';
import SideNavigation from '../packages/components/side-navigation';
import HeaderNavigation from '@atlantum/header-navigation';
import HeaderNavigationItem from '@atlantum/header-navigation-item';
import HeaderActionsGroup from '../packages/components/header-actions-group';
import Accordion from '@atlantum/accordion';
import AccordionItem from '@atlantum//accordion-item';
import Heading from '@atlantum/heading';
import { storiesOf } from '@storybook/react';
import GlobalStyles from '@atlantum/theme';

import './stories.styles.css';
import Button from '@atlantum/button';

const UI = () => {
    return (
       <>
            <GlobalStyles />
            <div className="">
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
            </div>
       </>
    );
};

const SideNav = () => {
    return (
       <>
            <GlobalStyles />
            <div className="">
                <MainHeader>
                    <a href="#">
                        <Heading as={'h6'}>Atlantum Design System</Heading>
                    </a>
                    <HeaderNavigation>
                        <HeaderNavigationItem>Link 1</HeaderNavigationItem>
                        <HeaderNavigationItem>Link 3</HeaderNavigationItem>
                        <HeaderNavigationItem>Link 3</HeaderNavigationItem>
                        <HeaderNavigationItem>Link 4</HeaderNavigationItem>
                    </HeaderNavigation>
                    <HeaderActionsGroup>
                        <Button>Hey</Button>
                    </HeaderActionsGroup>
                </MainHeader>
                <SideNavigation>
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
                        <li>
                            <a href="mailto:arthur.ivanov.art@gmail.com">
                                Gmail
                            </a>
                        </li>
                    </Accordion>
                </SideNavigation>
            </div>
       </>
    );
};

storiesOf('UI navigation', module).add('With sidebar', () => <UI />);
storiesOf('UI navigation', module).add('Side navigation', () => <SideNav />);
