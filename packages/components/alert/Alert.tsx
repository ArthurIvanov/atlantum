import { FC, ReactNode } from 'react';
import * as React from 'react';
import styled from 'styled-components';

import { Info } from 'react-feather';
import { AlertCircle } from 'react-feather';
import { AlertTriangle } from 'react-feather';
import { CheckCircle } from 'react-feather';

type Status = 'danger' | 'info' | 'success' | 'warning';

export interface AlertProps {
    children?: ReactNode;
    alertStatus: Status;
}

const StyledAlert = styled.div<AlertProps>`
    max-width: 500px;
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
            {alertStatus === 'danger' && <AlertTriangle size="24" />}
            {alertStatus === 'info' && <Info size="24" />}
            {alertStatus === 'success' && <CheckCircle size="24" />}
            {alertStatus === 'warning' && <AlertCircle size="24" />}
        </>
    );
};

export default Alert;
