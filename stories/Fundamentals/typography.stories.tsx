import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import '../stories.styles.css';
import { Heading } from '@atlantum/heading';
import { Text } from '@atlantum/text';
import { Card } from '@atlantum/card';
import { Group } from '@atlantum/group';

const Design = () => {
    return (
        <div className="atlantum-full-view">
            <iframe
                style={{ borderRadius: '4px', border: 'none' }}
                width="100%"
                height="600"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D344%253A1368"
                allowFullScreen
            />
        </div>
    );
};

const Headlines = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <Group relation={'grouped'}>
                        <Heading as={'h1'}>Heading 1</Heading>
                        <Heading as={'h2'}>Heading 2</Heading>
                        <Heading as={'h3'}>Heading 3</Heading>
                        <Heading as={'h4'}>Heading 4</Heading>
                        <Heading as={'h5'}>Heading 5</Heading>
                        <Heading as={'h6'}>Heading 6</Heading>
                    </Group>
                </Card>
            </div>
        </>
    );
};

const Paragraph = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <Group relation={'grouped'}>
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
        </>
    );
};

storiesOf('Fundamentals/Typography', module).add('Design', () => <Design />);

storiesOf('Fundamentals/Typography', module).add('Heading', () => (
    <Headlines />
));
storiesOf('Fundamentals/Typography', module).add('Paragraph', () => (
    <Paragraph />
));
