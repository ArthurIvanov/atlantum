import { FC, ReactNode } from 'react';
import * as React from 'react';
import styled from 'styled-components';

export interface TableHeaderProps {
    children: ReactNode;
    id?: string;
}

const StyledTableHeader = styled.th<TableHeaderProps>`
    padding: 12px;
    text-align: left;
    border: 1px solid ${(props) => props.theme.colors.neutral300};
    font-weight: ${(props) => props.theme.typography.fontWeight.semiBold};
`;

const TableHeader: FC<TableHeaderProps> = ({ children, id }) => {
    return <StyledTableHeader id={id}>{children}</StyledTableHeader>;
};

export default TableHeader;
