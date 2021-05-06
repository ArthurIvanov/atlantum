import React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';

import { Grid } from '@atlantum/grid';
import { Column } from '@atlantum/column';
import { Card } from '@atlantum/card';
import { Group } from '@atlantum/group';

import '../stories.styles.css';

import { Box } from '../utilities/box.ut';

const Responsive = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size="standard">
                    <Group relation={'far'}>
                        <Box>
                            Group should be used when you need <br />
                            to achieve responsive layout
                            <br />
                            but keep vertical spacing consistent. <br />
                            Please resize window to see effect.
                        </Box>
                        <Group relation={'one-context'}>
                            <Grid columnGap={'24'} rowGap="0">
                                <Column
                                    smallBP={'1 / 13'}
                                    mediumBP={'1 / 13'}
                                    largeBP={'1 / 7'}
                                >
                                    <Box height="50px" />
                                </Column>
                                <Column
                                    smallBP={'1 / 13'}
                                    mediumBP={'1 / 13'}
                                    largeBP={'7 / 13'}
                                >
                                    <Box height="50px" />
                                </Column>
                            </Grid>

                            <Box height="50px" />
                        </Group>
                    </Group>
                </Card>
            </div>
        </>
    );
};

storiesOf('Layout/Group', module).add('Design', () => <Design />);
storiesOf('Layout/Group', module).add('Group', () => <Responsive />);
