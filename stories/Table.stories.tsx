import * as React from 'react';
import { storiesOf } from '@storybook/react';
import GlobalStyles from '@atlantum/theme';
import './stories.styles.css';

import Table from '../packages/components/table';
import TableCell from '../packages/components/table-cell';
import TableHeader from '../packages/components/table-header';
import TableRow from '../packages/components/table-row';
import Card from '@atlantum/card';

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

storiesOf('Table', module).add('Basic', () => <Basic />);
