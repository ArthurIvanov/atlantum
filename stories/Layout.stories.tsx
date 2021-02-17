import * as React from 'react';
import Grid from '@atlantum/grid';
import Column from '@atlantum/column';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { lightTheme } from '@atlantum/theme';
import Card from '@atlantum/card';
import './stories.styles.css';
import Content from '../packages/layout/content';

const Narrow = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <div className="atlantum-full-view">
                <Card size={'standard'}>
                    <Content width="focus">
                        <Grid columnGap={'24'}>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 1'}
                                mediumBP={'1 / 1'}
                                largeBP={'1 / 1'}
                            >
                                1
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 2'}
                                mediumBP={'2 / 2'}
                                largeBP={'2 / 2'}
                            >
                                2
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 3'}
                                mediumBP={'3 / 3'}
                                largeBP={'3 / 3'}
                            >
                                3
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 4'}
                                mediumBP={'4 / 4'}
                                largeBP={'4 / 4'}
                            >
                                4
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 5'}
                                mediumBP={'5 / 5'}
                                largeBP={'5 / 5'}
                            >
                                5
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 6'}
                                mediumBP={'6 / 6'}
                                largeBP={'6 / 6'}
                            >
                                6
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 7'}
                                mediumBP={'7 / 7'}
                                largeBP={'7 / 7'}
                            >
                                7
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 8'}
                                mediumBP={'8 / 8'}
                                largeBP={'8 / 8'}
                            >
                                8
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 9'}
                                mediumBP={'9 / 9'}
                                largeBP={'9 / 9'}
                            >
                                9
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 10'}
                                mediumBP={'10 / 10'}
                                largeBP={'10 / 10'}
                            >
                                10
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 11'}
                                mediumBP={'11 / 11'}
                                largeBP={'11 / 11'}
                            >
                                11
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 12'}
                                mediumBP={'12 / 12'}
                                largeBP={'12 / 12'}
                            >
                                12
                            </Column>
                        </Grid>
                    </Content>
                </Card>
            </div>
        </ThemeProvider>
    );
};

const Full = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <GlobalStyles />
            <div className="atlantum-full-view">
                <Card size={'standard'}>
                    <Content width="full">
                        <Grid columnGap={'24'}>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 1'}
                                mediumBP={'1 / 1'}
                                largeBP={'1 / 1'}
                            >
                                1
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 2'}
                                mediumBP={'2 / 2'}
                                largeBP={'2 / 2'}
                            >
                                2
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 3'}
                                mediumBP={'3 / 3'}
                                largeBP={'3 / 3'}
                            >
                                3
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 4'}
                                mediumBP={'4 / 4'}
                                largeBP={'4 / 4'}
                            >
                                4
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 5'}
                                mediumBP={'5 / 5'}
                                largeBP={'5 / 5'}
                            >
                                5
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 6'}
                                mediumBP={'6 / 6'}
                                largeBP={'6 / 6'}
                            >
                                6
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 7'}
                                mediumBP={'7 / 7'}
                                largeBP={'7 / 7'}
                            >
                                7
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 8'}
                                mediumBP={'8 / 8'}
                                largeBP={'8 / 8'}
                            >
                                8
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 9'}
                                mediumBP={'9 / 9'}
                                largeBP={'9 / 9'}
                            >
                                9
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 10'}
                                mediumBP={'10 / 10'}
                                largeBP={'10 / 10'}
                            >
                                10
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 11'}
                                mediumBP={'11 / 11'}
                                largeBP={'11 / 11'}
                            >
                                11
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 12'}
                                mediumBP={'12 / 12'}
                                largeBP={'12 / 12'}
                            >
                                12
                            </Column>
                        </Grid>
                    </Content>
                </Card>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Layout', module).add('Narrow Content', () => <Narrow />);
storiesOf('Layout', module).add('Full Content', () => <Full />);
