import * as React from 'react';
import styled from 'styled-components';
import { FC, ReactNode } from 'react';

export interface LabelProps {
    children: ReactNode;
    htmlFor?: string;
    className?: string;
}

const StyledLabel = styled.label<LabelProps>`
    display: flex;
    font-weight: ${(props) => props.theme.typography.weight['400']};
`;

const Label: FC<LabelProps> = (props) => {
    return (
        <StyledLabel htmlFor={props.htmlFor} className={props.className}>
            {props.children}
        </StyledLabel>
    );
};

export default Label;
