import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface TableHeaderProps {
    children: ReactNode;
    id?: string;

    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledTableHeader = styled.th<TableHeaderProps>`
    padding: ${(props) => props.theme.spacing[12]}px;
    text-align: left;
    border: 1px solid ${(props) => props.theme.colors.neutral[200]};
`;

export const TableHeader: FC<TableHeaderProps> = ({
    children,
    id,
    className,
}) => {
    return (
        <StyledTableHeader id={id} className={className}>
            {children}
        </StyledTableHeader>
    );
};
