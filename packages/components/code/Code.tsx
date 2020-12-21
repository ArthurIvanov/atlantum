import styled from 'styled-components';
import * as React from 'react';
import { FC, ReactNode } from 'react';

export interface CodeProps {
    children: ReactNode;
    inline?: boolean;
}

const StyledCode = styled.code<CodeProps>``;

const Code: FC<CodeProps> = ({ children, inline }) => {
    return <StyledCode inline={inline}>{children}</StyledCode>;
};

export default Code;
