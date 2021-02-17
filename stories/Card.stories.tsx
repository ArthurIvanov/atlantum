import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { lightTheme } from '@atlantum/theme';

import Grid from '@atlantum/grid';
import Column from '@atlantum/column';
import Content from '@atlantum/content';

import Card from '@atlantum/card';
import Group from '@atlantum/group';
import Input from '@atlantum/input';
import Image from '@atlantum/image';
import Heading from '@atlantum/heading';
import Text from '@atlantum/text';

import './stories.styles.css';
import Container from '@atlantum/container';

const Compact = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <div className="atlantum-view">
                <Container align={'centered'}>
                    <Card size={'compact'}>
                        <Group relation={'far'}>
                            <Group relation={'closest'}>
                                <Heading as={'h5'} centered>
                                    I'm compact card headline
                                </Heading>
                                <Text as={'p'} centered>
                                    This is compact card with padding in 16px
                                    from all sides.
                                </Text>
                            </Group>
                            <Group relation={'one-of'}>
                                <Grid rowGap="8">
                                    <Column
                                        smallBP={'1 / 13'}
                                        mediumBP={'1 / 13'}
                                        largeBP={'1 / 5'}
                                    >
                                        <Input
                                            type={'text'}
                                            name={'username'}
                                            label={'First input'}
                                            input
                                            id={'text'}
                                            placeholder={
                                                'Please enter your name'
                                            }
                                        />
                                    </Column>
                                    <Column
                                        smallBP={'1 / 13'}
                                        mediumBP={'1 / 13'}
                                        largeBP={'5 / 9'}
                                    >
                                        <Input
                                            type={'text'}
                                            name={'username'}
                                            label={'Second input'}
                                            input
                                            id={'text'}
                                            placeholder={
                                                'Please enter your name'
                                            }
                                        />
                                    </Column>
                                    <Column
                                        smallBP={'1 / 13'}
                                        mediumBP={'1 / 13'}
                                        largeBP={'9 / 13'}
                                    >
                                        <Input
                                            type={'text'}
                                            name={'username'}
                                            label={'Second input'}
                                            input
                                            id={'text'}
                                            placeholder={
                                                'Please enter your name'
                                            }
                                        />
                                    </Column>
                                </Grid>

                                <Input
                                    type={'text'}
                                    name={'username'}
                                    label={'Full width input'}
                                    input
                                    id={'text'}
                                    placeholder={'Please enter your name'}
                                />
                            </Group>
                        </Group>
                    </Card>
                    <Card size="landing">
                        <Content width="focus">
                            <Group relation="separated">
                                <Heading centered as="h4">
                                    We provide you
                                </Heading>
                                <Grid rowGap="24">
                                    <Column
                                        smallBP="1 / 13"
                                        mediumBP="1 / 13"
                                        largeBP="1 / 5"
                                    >
                                        <Card size="standard">
                                            <Group
                                                relation="not-depend"
                                                isCentered
                                            >
                                                <Image
                                                    src="https://i.ibb.co/4wLDJpx/start.png"
                                                    width="80%"
                                                />

                                                <Group relation="closest">
                                                    <Heading centered as="h5">
                                                        Start
                                                    </Heading>
                                                    <Text centered as="p">
                                                        Start build products
                                                        with carefuly builded
                                                        Design library
                                                    </Text>
                                                </Group>
                                            </Group>
                                        </Card>
                                    </Column>
                                    <Column
                                        smallBP="1 / 13"
                                        mediumBP="1 / 13"
                                        largeBP="5 / 9"
                                    >
                                        <Card size="standard">
                                            <Group
                                                relation="not-depend"
                                                isCentered
                                            >
                                                <Image
                                                    src="https://i.ibb.co/DLm6C9n/accelerate.png"
                                                    width="80%"
                                                />

                                                <Group relation="closest">
                                                    <Heading centered as="h5">
                                                        Start
                                                    </Heading>
                                                    <Text centered as="p">
                                                        Accelerate your design
                                                        process by shared
                                                        library and
                                                        documentation
                                                    </Text>
                                                </Group>
                                            </Group>
                                        </Card>
                                    </Column>
                                    <Column
                                        smallBP="1 / 13"
                                        mediumBP="1 / 13"
                                        largeBP="9 / 13"
                                    >
                                        <Card size="standard">
                                            <Group
                                                relation="not-depend"
                                                isCentered
                                            >
                                                <Image
                                                    src="https://i.ibb.co/YZMSZ42/connect.png"
                                                    width="80%"
                                                />

                                                <Group relation="closest">
                                                    <Heading centered as="h5">
                                                        Start
                                                    </Heading>
                                                    <Text centered as="p">
                                                        Develop product right
                                                        after Design with our
                                                        React Library
                                                    </Text>
                                                </Group>
                                            </Group>
                                        </Card>
                                    </Column>
                                </Grid>
                            </Group>
                        </Content>
                    </Card>
                </Container>
            </div>
        </ThemeProvider>
    );
};

const Standard = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <Group relation={'far'}>
                        <Group relation={'closest'}>
                            <Heading as={'h5'} centered>
                                I'm standard card headline
                            </Heading>
                            <Text as={'p'} centered>
                                This is standard card with padding in 24px from
                                all sides.
                            </Text>
                        </Group>
                        <Group relation={'one-of'}>
                            <Grid columnGap={'24'} rowGap="8">
                                <Column
                                    smallBP={'1 / 13'}
                                    mediumBP={'1 / 13'}
                                    largeBP={'1 / 7'}
                                >
                                    <Input
                                        type={'text'}
                                        name={'username'}
                                        label={'Regular input'}
                                        input
                                        id={'text'}
                                        placeholder={'Please enter your name'}
                                    />
                                </Column>
                                <Column
                                    smallBP={'1 / 13'}
                                    mediumBP={'1 / 13'}
                                    largeBP={'7 / 13'}
                                >
                                    <Input
                                        type={'text'}
                                        name={'username'}
                                        label={'Regular input'}
                                        input
                                        id={'text'}
                                        placeholder={'Please enter your name'}
                                    />
                                </Column>
                            </Grid>

                            <Input
                                type={'text'}
                                name={'username'}
                                label={'Regular input'}
                                input
                                id={'text'}
                                placeholder={'Please enter your name'}
                            />
                        </Group>
                    </Group>
                </Card>
            </div>
        </ThemeProvider>
    );
};

const Large = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'large'}>
                    <Group relation={'far'}>
                        <Group relation={'closest'}>
                            <Heading as={'h5'} centered>
                                I'm large card headline
                            </Heading>
                            <Text as={'p'} centered>
                                This is standard card with padding in 24px from
                                all sides.
                            </Text>
                        </Group>
                        <Group relation={'one-of'}>
                            <Grid columnGap={'24'} rowGap="8">
                                <Column
                                    smallBP={'1 / 13'}
                                    mediumBP={'1 / 13'}
                                    largeBP={'1 / 7'}
                                >
                                    <Input
                                        type={'text'}
                                        name={'username'}
                                        label={'Regular input'}
                                        input
                                        id={'text'}
                                        placeholder={'Please enter your name'}
                                    />
                                </Column>
                                <Column
                                    smallBP={'1 / 13'}
                                    mediumBP={'1 / 13'}
                                    largeBP={'7 / 13'}
                                >
                                    <Input
                                        type={'text'}
                                        name={'username'}
                                        label={'Regular input'}
                                        input
                                        id={'text'}
                                        placeholder={'Please enter your name'}
                                    />
                                </Column>
                            </Grid>

                            <Input
                                type={'text'}
                                name={'username'}
                                label={'Regular input'}
                                input
                                id={'text'}
                                placeholder={'Please enter your name'}
                            />
                        </Group>
                    </Group>
                </Card>
            </div>
        </ThemeProvider>
    );
};

const Landing = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'landing'}>
                    <Group relation={'far'}>
                        <Group relation={'closest'}>
                            <Heading as={'h5'} centered>
                                I'm landing card headline
                            </Heading>
                            <Text as={'p'} centered>
                                This is standard card with padding in 24px from
                                all sides.
                            </Text>
                        </Group>
                        <Group relation={'one-of'}>
                            <Grid columnGap={'24'} rowGap="8">
                                <Column
                                    smallBP={'1 / 13'}
                                    mediumBP={'1 / 13'}
                                    largeBP={'1 / 7'}
                                >
                                    <Input
                                        type={'text'}
                                        name={'username'}
                                        label={'Regular input'}
                                        input
                                        id={'text'}
                                        placeholder={'Please enter your name'}
                                    />
                                </Column>
                                <Column
                                    smallBP={'1 / 13'}
                                    mediumBP={'1 / 13'}
                                    largeBP={'7 / 13'}
                                >
                                    <Input
                                        type={'text'}
                                        name={'username'}
                                        label={'Regular input'}
                                        input
                                        id={'text'}
                                        placeholder={'Please enter your name'}
                                    />
                                </Column>
                            </Grid>

                            <Input
                                type={'text'}
                                name={'username'}
                                label={'Regular input'}
                                input
                                id={'text'}
                                placeholder={'Please enter your name'}
                            />
                        </Group>
                    </Group>
                </Card>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Card', module).add('Compact', () => <Compact />);
storiesOf('Card', module).add('Standard', () => <Standard />);
storiesOf('Card', module).add('Large', () => <Large />);
storiesOf('Card', module).add('Landing', () => <Landing />);
