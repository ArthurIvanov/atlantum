import { FC, ReactNode } from 'react';
import * as React from 'react';
import styled from 'styled-components';

export interface TableHeaderProps {
    children: ReactNode;
    id?: string;
}

const StyledTableHeader = styled.th<TableHeaderProps>`
    padding: 12px;
    font-weight: 600;
    text-align: left;
    border: 1px solid #ddd;
`;

const TableHeader: FC<TableHeaderProps> = ({ children, id }) => {
    return <StyledTableHeader id={id}>{children}</StyledTableHeader>;
};

export default TableHeader;
