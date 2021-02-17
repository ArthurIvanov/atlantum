import { FC, ReactNode } from 'react';
import * as React from 'react';
import styled from 'styled-components';

export interface TableProps {
    children: ReactNode;
    id?: string | number;
}

const StyledTable = styled.table<TableProps>`
    width: 100%;
    border-collapse: collapse;

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
`;

const Table: FC<TableProps> = ({ children }) => {
    return <StyledTable>{children}</StyledTable>;
};

export default Table;
