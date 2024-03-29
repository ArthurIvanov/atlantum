import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface TableProps {
    children: ReactNode;
    id?: string | number;

    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledTable = styled.table<TableProps>`
    border-collapse: collapse;
    color: ${(props) => props.theme.colors.neutral[400]};
    font-size: ${(props) => props.theme.typography.fontSize.label};
    font-family: ${(props) => props.theme.typography.family.label};
    line-height: ${(props) => props.theme.typography.lineHeight.label};

    tr:nth-child(odd) {
        background-color: ${(props) => props.theme.colors.neutral[100]};
    }
`;

export const Table: FC<TableProps> = ({ children, className }) => {
    return <StyledTable className={className}>{children}</StyledTable>;
};
