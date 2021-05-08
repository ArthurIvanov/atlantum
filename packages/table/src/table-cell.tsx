import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface TableCellProps {
    children: ReactNode;
    id?: string;

    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledTableCell = styled.td<TableCellProps>`
    padding: ${(props) => props.theme.spacing[12]}px;
    border: 1px solid ${(props) => props.theme.colors.neutral[200]};
`;

export const TableCell: FC<TableCellProps> = ({ children, id, className }) => {
    return (
        <StyledTableCell id={id} className={className}>
            {children}
        </StyledTableCell>
    );
};
