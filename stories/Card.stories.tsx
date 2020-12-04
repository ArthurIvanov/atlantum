import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@atlantum/theme';
import GlobalStyles from '@atlantum/theme';

import Grid from '@atlantum/grid';
import Column from '@atlantum/column';

import Card from '../packages/components/card';
import Group from '../packages/components/group/Group';
import Input from '@atlantum/input';
import Heading from '@atlantum/heading';
import Text from '@atlantum/text';

import './stories.styles.css';

const Standard = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'} centered>
                    <Group relation={'far'}>
                        <Group relation={'closest'}>
                            <Heading as={'h5'} centered>
                                I'm standard card
                            </Heading>
                            <Text as={'p'} centered>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book. It has survived not only five centuries.
                            </Text>
                        </Group>
                        <Group relation={'one-of'}>
                            <Grid columnGap={'24'}>
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
                            <Input
                                type={'text'}
                                name={'username'}
                                label={'Regular input'}
                                input
                                id={'text'}
                                placeholder={'Please enter your name'}
                            />
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

storiesOf('Cards', module).add('Standard', () => <Standard />);
