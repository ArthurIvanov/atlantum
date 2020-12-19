import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { theme } from '@atlantum/theme';
import './stories.styles.css';
import Heading from '@atlantum/heading';
import Text from '@atlantum/text';
import Card from '@atlantum/card';
import Group from '@atlantum/group';

const Headlines = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <Group relation={'not-depend'}>
                        <Heading as={'h1'}>Heading 1</Heading>
                        <Heading as={'h2'}>Heading 2</Heading>
                        <Heading as={'h3'}>Heading 3</Heading>
                        <Heading as={'h4'}>Heading 4</Heading>
                        <Heading as={'h5'}>Heading 5</Heading>
                        <Heading as={'h6'}>Heading 6</Heading>
                    </Group>
                </Card>
            </div>
        </ThemeProvider>
    );
};

const Paragraph = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <Group relation={'not-depend'}>
                        <Text as={'p'}>
                            Regular paragraph text with simple example
                        </Text>
                        <Text as={'strong'}>
                            Strong paragraph text with simple example
                        </Text>
                        <Text as={'i'}>
                            Emphasize paragraph text with simple example
                        </Text>
                        <Text as={'span'} size={'label'}>
                            Span text with simple example
                        </Text>
                    </Group>
                </Card>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Typography', module).add('Heading', () => <Headlines />);
storiesOf('Typography', module).add('Paragraph', () => <Paragraph />);
