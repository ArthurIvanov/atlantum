import styled from 'styled-components';
import React, { FC } from 'react';
import { ButtonProps, StyledButton } from './button';

const StyledIconButton = styled(StyledButton)<ButtonProps>`
    display: flex;
    align-items: center;
    padding: ${(props) => props.theme.spacing[8]};
`;

export const ButtonIcon: FC<ButtonProps> = ({
    isSecondary,
    disabled,
    className,
    children,
}) => (
    <StyledIconButton
        isSecondary={isSecondary}
        disabled={disabled}
        className={className}
    >
        {children}
    </StyledIconButton>
);
