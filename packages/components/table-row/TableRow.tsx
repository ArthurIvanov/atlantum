import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface TableRowProps {
    children: ReactNode;
    id?: string;
}

const StyledTableRow = styled.tr<TableRowProps>`
    padding: 12px;
    width: 100%;
`;

const TableRow: FC<TableRowProps> = ({ children, id }) => {
    return <StyledTableRow id={id}>{children}</StyledTableRow>;
};

export default TableRow;
