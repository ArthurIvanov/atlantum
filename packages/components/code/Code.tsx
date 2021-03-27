import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

export interface CodeProps {
    children: ReactNode;
    inline?: boolean;

    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledCode = styled.code<CodeProps>``;

const Code: FC<CodeProps> = ({ children, inline, className }) => {
    return (
        <StyledCode inline={inline} className={className}>
            {children}
        </StyledCode>
    );
};

export default Code;
