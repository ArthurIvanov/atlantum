import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { GlobalStyles } from '@atlantum/theme';
import { Group } from '@atlantum/group';
import { Image } from '@atlantum/image';

import { Heading } from '@atlantum/heading';
import { Text } from '@atlantum/text';
import { TextLink } from '@atlantum/text-link';

import './stories.styles.css';

const Intro = () => {
    return (
        <>
            <GlobalStyles />
            <Image
                src={'https://i.ibb.co/xhWftv3/intro.png'}
                width={'100%'}
                alt={'intro'}
                isRounded={false}
            />
            <div className="atlantum-view">
                <Group relation={'separated'}>
                    <Heading as={'h3'}>
                        Welcome to Atlantum Design System storybook
                    </Heading>
                    <Group relation={'grouped'}>
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
        </>
    );
};

storiesOf('Introduction', module).add('Introduction', () => <Intro />);
