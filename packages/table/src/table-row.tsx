import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface TableRowProps {
    children: ReactNode;
    id?: string;
    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledTableRow = styled.tr<TableRowProps>`
    padding: 12px;
`;

export const TableRow: FC<TableRowProps> = ({ children, id, className }) => {
    return (
        <StyledTableRow id={id} className={className}>
            {children}
        </StyledTableRow>
    );
};
