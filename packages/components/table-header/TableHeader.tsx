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
    border: 1px solid ${(props) => props.theme.colors.neutral200};
    border-top-left-radius: 32px;
`;

const TableHeader: FC<TableHeaderProps> = ({ children, id }) => {
    return <StyledTableHeader id={id}>{children}</StyledTableHeader>;
};

export default TableHeader;
