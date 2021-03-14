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
    color: ${(props) => props.theme.colors.neutral400};
    font-size: ${(props) => props.theme.typography.fontSize.label};
    font-family: ${(props) => props.theme.typography.family.label};
    line-height: ${(props) => props.theme.typography.lineHeight.label};

    tr:nth-child(odd) {
        background-color: ${(props) => props.theme.colors.neutral100};
    }
`;

const Table: FC<TableProps> = ({ children }) => {
    return <StyledTable>{children}</StyledTable>;
};

export default Table;
