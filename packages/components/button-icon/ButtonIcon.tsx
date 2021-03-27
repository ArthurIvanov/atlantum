import styled from 'styled-components';
import React, { FC } from 'react';
import { ButtonProps, StyledButton } from '@atlantum/button';

const StyledIconButton = styled(StyledButton)<ButtonProps>`
    display: flex;
    align-items: center;
`;

const ButtonIcon: FC<ButtonProps> = (props) => (
    <StyledIconButton
        isSecondary={props.isSecondary}
        disabled={props.disabled}
        className={props.className}
    >
        {props.children}
    </StyledIconButton>
);

export default ButtonIcon;
