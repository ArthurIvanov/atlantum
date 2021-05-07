import * as React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme } from '@atlantum/theme';
import { SideMenu } from '../components/side-menu.component';
import { TextLink } from '../components/link.component';

import { Accordion, AccordionItem } from '@atlantum/accordion';
import { Link } from 'gatsby';

const Docs = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <SideMenu>
                <Accordion>
                    <AccordionItem title={'Components'}>
                        <TextLink href={'/docs/accordion'} as={Link}>
                            Accordion
                        </TextLink>
                        <TextLink href={'/docs/alert'} as={Link}>
                            Alert
                        </TextLink>
                        <TextLink href={'/docs/avatar'} as={Link}>
                            Avatar
                        </TextLink>
                    </AccordionItem>
                </Accordion>
            </SideMenu>
        </ThemeProvider>
    );
};

export default Docs;
