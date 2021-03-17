import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface TableCellProps {
    children: ReactNode;
    id?: string;
}

const StyledTableCell = styled.td<TableCellProps>`
    padding: 12px;
    border: 1px solid ${(props) => props.theme.colors.neutral200};
`;

const TableCell: FC<TableCellProps> = ({ children, id }) => {
    return <StyledTableCell id={id}>{children}</StyledTableCell>;
};

export default TableCell;
