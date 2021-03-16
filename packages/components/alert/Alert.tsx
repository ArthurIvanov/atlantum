import { FC, ReactNode } from 'react';
import * as React from 'react';
import styled from 'styled-components';

import Icon from '@atlantum/icons';

type Status = 'danger' | 'info' | 'success' | 'warning';

export interface AlertProps {
    children?: ReactNode;
    alertStatus: Status;
}

const StyledAlert = styled.div<AlertProps>`
    max-width: 500px;
    padding: 16px;
    border: 1px solid;
    border-radius: ${(props) => props.theme.borderRadius};
    color: ${(props) => props.theme.colors.neutral400};

    ${(props) =>
        props.alertStatus === 'danger' &&
        ` 
        border-color: ${props.theme.colors.danger300};
        background-color: ${props.theme.colors.dangerBG}; 
        
        .atlantum-status-icon {
            color: ${props.theme.colors.danger300};
        }
             
    }
    `}
`;

const Alert: FC<AlertProps> = ({ children, alertStatus }) => (
    <StyledAlert alertStatus={alertStatus}>
        <AlertIcon alertStatus={alertStatus} />
        {children}
    </StyledAlert>
);

export const AlertIcon: FC<AlertProps> = ({ alertStatus }) => {
    return (
        <>
            {alertStatus === 'danger' && (
                <Icon className="atlantum-status-icon" name="alert-triangle" />
            )}
            {alertStatus === 'info' && (
                <Icon className="atlantum-status-icon" name="info" />
            )}
            {alertStatus === 'success' && (
                <Icon className="atlantum-status-icon" name="check-circle" />
            )}
            {alertStatus === 'warning' && (
                <Icon className="atlantum-status-icon" name="alert-circle" />
            )}
        </>
    );
};

export default Alert;
