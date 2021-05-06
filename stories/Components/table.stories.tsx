import React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import { Card } from '@atlantum/card';

import { Table, TableCell, TableHeader, TableRow } from '@atlantum/table';
import '../stories.styles.css';

const Basic = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <Table>
                        <TableRow>
                            <TableHeader>Name</TableHeader>
                            <TableHeader>Number</TableHeader>
                            <TableHeader>Address</TableHeader>
                        </TableRow>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Number</TableCell>
                            <TableCell>Address</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Number</TableCell>
                            <TableCell>Address</TableCell>
                        </TableRow>
                    </Table>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Table', module).add('Basic', () => <Basic />);
