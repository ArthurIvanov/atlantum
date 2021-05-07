import * as React from 'react';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme } from '@atlantum/theme';
import { Heading } from '@atlantum/heading';
import { Accordion, AccordionItem } from '@atlantum/accordion';
import { TextLink } from '../../components/link.component';
import { Link } from 'gatsby';
import { SideMenu } from '../../components/side-menu.component';
import { Container } from '../../components/container.component';
import { Text } from '@atlantum/text';
import { ItemsStack } from '@atlantum/items-stack';

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
            <Container>
                <ItemsStack direction={'column'} distance={'32px'}>
                    <ItemsStack direction={'column'} distance={'12px'}>
                        <Heading as={'h3'}>Component name</Heading>
                        <Text as={'p'}>Description</Text>
                        <Text as={'p'}>Source code buttons</Text>
                    </ItemsStack>

                    <ItemsStack direction={'column'} distance={'12px'}>
                        <Heading as={'h4'}>Import</Heading>
                        <Text as={'p'}>code snippet</Text>
                    </ItemsStack>

                    <ItemsStack direction={'column'} distance={'12px'}>
                        <Heading as={'h4'}>Usage</Heading>
                        <Text as={'p'}>component preview</Text>
                        <Text as={'p'}>code snippet</Text>
                    </ItemsStack>

                    <ItemsStack direction={'column'} distance={'12px'}>
                        <Heading as={'h4'}>Props</Heading>
                        <Text as={'p'}>description</Text>
                        <Text as={'p'}>table of examples</Text>
                    </ItemsStack>

                    <ItemsStack direction={'column'} distance={'12px'}>
                        <Heading as={'h4'}>Props</Heading>
                        <Text as={'p'}>description</Text>
                        <Text as={'p'}>table of examples</Text>
                    </ItemsStack>
                </ItemsStack>
            </Container>
        </ThemeProvider>
    );
};

export default Docs;
