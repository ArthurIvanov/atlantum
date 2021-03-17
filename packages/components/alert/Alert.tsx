import { FC, ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

import Icon from '@atlantum/icons';
import Heading from '@atlantum/heading';

type Status = 'danger' | 'info' | 'success' | 'warning';

export interface AlertProps {
    children?: ReactNode;
    alertStatus?: Status;
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
        
        .atlantum-status-content {
            color: ${props.theme.colors.danger300};
        }
             
    }
    `}

    ${(props) =>
        props.alertStatus === 'success' &&
        ` 
        border-color: ${props.theme.colors.success300};
        background-color: ${props.theme.colors.successBG}; 
        
        .atlantum-status-content {
            color: ${props.theme.colors.success300};
        }
             
    }
    `}
`;

const Alert: FC<AlertProps> = ({ children, alertStatus }) => (
    <StyledAlert alertStatus={alertStatus}>
        <AlertIcon alertStatus={alertStatus} />
        <AlertTitle>Headline</AlertTitle>
        {children}
    </StyledAlert>
);

export const AlertIcon: FC<AlertProps> = ({ alertStatus }) => {
    return (
        <>
            {alertStatus === 'danger' && (
                <Icon
                    className="atlantum-status-content"
                    name="alert-triangle"
                />
            )}
            {alertStatus === 'info' && (
                <Icon className="atlantum-status-content" name="info" />
            )}
            {alertStatus === 'success' && (
                <Icon className="atlantum-status-content" name="check-circle" />
            )}
            {alertStatus === 'warning' && (
                <Icon className="atlantum-status-content" name="alert-circle" />
            )}
        </>
    );
};

export const AlertTitle: FC<AlertProps> = ({ children }) => (
    <Heading as="h6">{children}</Heading>
);

export default Alert;
