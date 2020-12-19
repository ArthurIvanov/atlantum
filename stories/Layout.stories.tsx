import * as React from 'react';
import Grid from '@atlantum/grid';
import Column from '@atlantum/column';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { theme } from '@atlantum/theme';
import Card from '@atlantum/card';
import './stories.styles.css';

const Layout = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <Grid columnGap={'24'}>
                        <Column
                            smallBP={'1 / 1'}
                            mediumBP={'1 / 1'}
                            largeBP={'1 / 1'}
                        >
                            <div className="atlantum-div">1</div>
                        </Column>
                        <Column
                            smallBP={'1 / 2'}
                            mediumBP={'2 / 2'}
                            largeBP={'2 / 2'}
                        >
                            <div className="atlantum-div">2</div>
                        </Column>
                        <Column
                            smallBP={'1 / 3'}
                            mediumBP={'3 / 3'}
                            largeBP={'3 / 3'}
                        >
                            <div className="atlantum-div">3</div>
                        </Column>
                        <Column
                            smallBP={'1 / 4'}
                            mediumBP={'4 / 4'}
                            largeBP={'4 / 4'}
                        >
                            <div className="atlantum-div">4</div>
                        </Column>
                        <Column
                            smallBP={'1 / 5'}
                            mediumBP={'5 / 5'}
                            largeBP={'5 / 5'}
                        >
                            <div className="atlantum-div">5</div>
                        </Column>
                        <Column
                            smallBP={'1 / 6'}
                            mediumBP={'6 / 6'}
                            largeBP={'6 / 6'}
                        >
                            <div className="atlantum-div">6</div>
                        </Column>
                        <Column
                            smallBP={'1 / 7'}
                            mediumBP={'7 / 7'}
                            largeBP={'7 / 7'}
                        >
                            <div className="atlantum-div">7</div>
                        </Column>
                        <Column
                            smallBP={'1 / 8'}
                            mediumBP={'8 / 8'}
                            largeBP={'8 / 8'}
                        >
                            <div className="atlantum-div">8</div>
                        </Column>
                        <Column
                            smallBP={'1 / 9'}
                            mediumBP={'9 / 9'}
                            largeBP={'9 / 9'}
                        >
                            <div className="atlantum-div">9</div>
                        </Column>
                        <Column
                            smallBP={'1 / 10'}
                            mediumBP={'10 / 10'}
                            largeBP={'10 / 10'}
                        >
                            <div className="atlantum-div">10</div>
                        </Column>
                        <Column
                            smallBP={'1 / 11'}
                            mediumBP={'11 / 11'}
                            largeBP={'11 / 11'}
                        >
                            <div className="atlantum-div">11</div>
                        </Column>
                        <Column
                            smallBP={'1 / 12'}
                            mediumBP={'12 / 12'}
                            largeBP={'12 / 12'}
                        >
                            <div className="atlantum-div">12</div>
                        </Column>
                    </Grid>
                </Card>
            </div>
        </ThemeProvider>
    );
};

storiesOf('Layout', module).add('Grid & Columns', () => <Layout />);
