import React, { FC } from 'react';
import styled from 'styled-components';

export interface TabListProps {
    children?: React.ReactNode;
    label?: string;
}

const StyledTab = styled.div<TabListProps>`
    display: block;
    border-radius: 8px;
`;

export const TabList: FC<TabListProps> = ({ children, label }) => {
    return (
        <StyledTab role="tablist" tabIndex={0} aria-label={label}>
            {children}
        </StyledTab>
    );
};
