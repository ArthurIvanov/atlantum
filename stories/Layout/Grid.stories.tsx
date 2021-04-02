import * as React from 'react';
import Grid from '@atlantum/grid';
import Column from '@atlantum/column';
import { storiesOf } from '@storybook/react';

import GlobalStyles from '@atlantum/theme';
import Card from '../../packages/layout/card';
import '../stories.styles.css';
import Content from '@atlantum/content';

const Narrow = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-full-view">
                <Card size={'standard'}>
                    <Content width="focus">
                        <Grid columnGap={'24'}>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'1 / 1'}
                                largeBP={'1 / 1'}
                            >
                                1
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'2 / 2'}
                                largeBP={'2 / 2'}
                            >
                                2
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'3 / 3'}
                                largeBP={'3 / 3'}
                            >
                                3
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'4 / 4'}
                                largeBP={'4 / 4'}
                            >
                                4
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 12'}
                                mediumBP={'5 / 5'}
                                largeBP={'5 / 5'}
                            >
                                5
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'6 / 6'}
                                largeBP={'6 / 6'}
                            >
                                6
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'7 / 7'}
                                largeBP={'7 / 7'}
                            >
                                7
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'8 / 8'}
                                largeBP={'8 / 8'}
                            >
                                8
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'9 / 9'}
                                largeBP={'9 / 9'}
                            >
                                9
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'10 / 10'}
                                largeBP={'10 / 10'}
                            >
                                10
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'11 / 11'}
                                largeBP={'11 / 11'}
                            >
                                11
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'12 / 12'}
                                largeBP={'12 / 12'}
                            >
                                12
                            </Column>
                        </Grid>
                    </Content>
                </Card>
            </div>
        </>
    );
};

const Full = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-full-view">
                <Card size={'standard'}>
                    <Content width="full">
                        <Grid columnGap={'24'}>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'1 / 1'}
                                largeBP={'1 / 1'}
                            >
                                1
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'2 / 2'}
                                largeBP={'2 / 2'}
                            >
                                2
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'3 / 3'}
                                largeBP={'3 / 3'}
                            >
                                3
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'4 / 4'}
                                largeBP={'4 / 4'}
                            >
                                4
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'5 / 5'}
                                largeBP={'5 / 5'}
                            >
                                5
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'6 / 6'}
                                largeBP={'6 / 6'}
                            >
                                6
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'7 / 7'}
                                largeBP={'7 / 7'}
                            >
                                7
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'8 / 8'}
                                largeBP={'8 / 8'}
                            >
                                8
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'9 / 9'}
                                largeBP={'9 / 9'}
                            >
                                9
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'10 / 10'}
                                largeBP={'10 / 10'}
                            >
                                10
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'11 / 11'}
                                largeBP={'11 / 11'}
                            >
                                11
                            </Column>
                            <Column
                                className="atlantum-div"
                                smallBP={'1 / 13'}
                                mediumBP={'12 / 12'}
                                largeBP={'12 / 12'}
                            >
                                12
                            </Column>
                        </Grid>
                    </Content>
                </Card>
            </div>
        </>
    );
};

storiesOf('Layout/Grid', module).add('Narrow Content', () => <Narrow />);
storiesOf('Layout/Grid', module).add('Full Content', () => <Full />);
