import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { lightTheme } from '@atlantum/theme';

import Grid from '@atlantum/grid';
import Column from '@atlantum/column';

import Card from '@atlantum/card';
import Group from '../packages/layout/group';
import Input from '@atlantum/input';

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
                            <Group relation={'grouped'}>
                                <Grid>
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
                        <Group relation={'grouped'}>
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
                        <Group relation={'separated'}>
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
                        <Group relation={'grouped'}>
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
