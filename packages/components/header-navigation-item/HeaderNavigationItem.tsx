import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import TextLink from '@atlantum/text-link';

export interface StyledHeaderNavigationItemProps {
    children: ReactNode;
}

const StyledHeaderNavigationItem = styled.li<StyledHeaderNavigationItemProps>``;

const HeaderNavigationItem: FC<StyledHeaderNavigationItemProps> = ({
    children,
}) => {
    return (
        <StyledHeaderNavigationItem>
            <TextLink>{children}</TextLink>
        </StyledHeaderNavigationItem>
    );
};

export default HeaderNavigationItem;
