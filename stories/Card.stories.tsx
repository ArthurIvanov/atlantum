import * as React from 'react';
import { storiesOf } from '@storybook/react';
import GlobalStyles from '@atlantum/theme';

import Grid from '@atlantum/grid';
import Column from '@atlantum/column';

import Card from '@atlantum/card';
import Group from '../packages/layout/group';
import Input from '@atlantum/input';

import Heading from '@atlantum/heading';
import Text from '@atlantum/text';

import './stories.styles.css';

const Full = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'full'}>
                    <Group relation={'far'}>
                        <Group relation={'closest'}>
                            <Heading as={'h5'} centered>
                                I'm large card headline
                            </Heading>
                            <Text as={'p'} centered>
                                This is full width card with padding in 0 from
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
        </>
    );
};

const Large = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'large'}>
                    <Group relation={'far'}>
                        <Group relation={'closest'}>
                            <Heading as={'h5'} centered>
                                I'm large card headline
                            </Heading>
                            <Text as={'p'} centered>
                                This is large width card with padding in 12px
                                from all sides.
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
        </>
    );
};

const Standard = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <Group relation={'far'}>
                        <Group relation={'closest'}>
                            <Heading as={'h5'} centered>
                                I'm standard card headline
                            </Heading>
                            <Text as={'p'} centered>
                                This is standard width card with padding in 24px
                                from all sides.
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
        </>
    );
};

const Compact = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'compact'}>
                    <Group relation={'far'}>
                        <Group relation={'closest'}>
                            <Heading as={'h5'} centered>
                                I'm compact card headline
                            </Heading>
                            <Text as={'p'} centered>
                                This is compact width card with padding in 48px
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
                                        placeholder={'Please enter your name'}
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
                                        placeholder={'Please enter your name'}
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
                                        placeholder={'Please enter your name'}
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
            </div>
        </>
    );
};

const Landing = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'landing'}>
                    <Group relation={'far'}>
                        <Group relation={'closest'}>
                            <Heading as={'h5'} centered>
                                I'm landing card headline
                            </Heading>
                            <Text as={'p'} centered>
                                This is landing width card with padding in 64px
                                from all sides.
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
        </>
    );
};

storiesOf('Card', module).add('Full', () => <Full />);
storiesOf('Card', module).add('Large', () => <Large />);
storiesOf('Card', module).add('Standard', () => <Standard />);
storiesOf('Card', module).add('Compact', () => <Compact />);
storiesOf('Card', module).add('Landing', () => <Landing />);
