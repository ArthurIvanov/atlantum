import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { theme } from '@atlantum/theme';
import './stories.styles.css';
import Heading from '@atlantum/heading';
import Text from '@atlantum/text';
import TextLink from '@atlantum/text-link';
import Group from '@atlantum/group';

const Intro = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="atlantum-view">
                <Group relation={'not-depend'}>
                    <Heading as={'h3'}>
                        Welcome to Atlantum Design System storybook
                    </Heading>
                    <Group relation={'one-of'}>
                        <Text as={'p'}>
                            This is collection of UI components for building
                            great products with Atlantum.
                        </Text>
                        <Text as={'p'}>
                            For any questions please contact with me via email:
                        </Text>
                        <TextLink href={'mailto:arthur.ivanov.art@gmail.com'}>
                            arthur.ivanov.art@gmail.com
                        </TextLink>
                    </Group>
                </Group>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Introduction', module).add('Introduction', () => <Intro />);