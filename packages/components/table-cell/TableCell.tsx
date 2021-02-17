import { FC, ReactNode } from 'react';
import * as React from 'react';
import styled from 'styled-components';

export interface TableCellProps {
    children: ReactNode;
    id?: string;
}

const StyledTableCell = styled.td<TableCellProps>`
    padding: 12px;
    font-weight: 400;
    border: 1px solid #ddd;
`;

const TableCell: FC<TableCellProps> = ({ children, id }) => {
    return <StyledTableCell id={id}>{children}</StyledTableCell>;
};

export default TableCell;
