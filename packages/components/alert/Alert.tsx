import { FC, ReactNode } from 'react';
import React from 'react';
import styled from 'styled-components';

import Icon from '@atlantum/icons';
import Heading from '@atlantum/heading';
import ItemsStack from '@atlantum/items-stack';

type Status = 'danger' | 'info' | 'success' | 'warning';

export interface AlertProps {
    children?: ReactNode;
    alertStatus?: Status;
    alertTitle?: string;
    isClosable?: boolean;

    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledAlert = styled.div<AlertProps>`
    position: relative;
    display: flex;
    max-width: 500px;
    font-size: ${(props) => props.theme.typography.fontSize.base};
    line-height: ${(props) => props.theme.typography.lineHeight.base};
    padding: 16px 48px 16px 48px;
    border: 1px solid;
    border-radius: ${(props) => props.theme.borderRadius};
    color: ${(props) => props.theme.colors.neutral400};

    .atlantum-status-content {
        position: absolute;
        left: 16px;
        top: 16px;
    }

    .atlantum-close-button {
        position: absolute;
        right: 16px;
        top: 16px;
        cursor: pointer;
    }

    ${(props) =>
        props.alertStatus === 'info' &&
        ` 
        border-color: ${props.theme.colors.info200};
        background-color: ${props.theme.colors.infoBG}; 
        
        .atlantum-status-content {
            color: ${props.theme.colors.info200};
        }
             
    }
    `}

    ${(props) =>
        props.alertStatus === 'success' &&
        ` 
        border-color: ${props.theme.colors.success200};
        background-color: ${props.theme.colors.successBG}; 
        
        .atlantum-status-content {
            color: ${props.theme.colors.success200};
        }
             
    }
    `}
    
    ${(props) =>
        props.alertStatus === 'warning' &&
        ` 
        border-color: ${props.theme.colors.warning200};
        background-color: ${props.theme.colors.warningBG}; 
        
        .atlantum-status-content {
            color: ${props.theme.colors.warning200};
        }
             
    }
    `}

    ${(props) =>
        props.alertStatus === 'danger' &&
        ` 
        border-color: ${props.theme.colors.danger200};
        background-color: ${props.theme.colors.dangerBG}; 
        
        .atlantum-status-content {
            color: ${props.theme.colors.danger200};

        }
             
    }
    `}
`;

const Alert: FC<AlertProps> = ({
    children,
    alertStatus,
    className,
    alertTitle,
    isClosable,
}) => (
    <StyledAlert alertStatus={alertStatus} className={className}>
        <AlertIcon alertStatus={alertStatus} />
        <CloseIcon className={className} isClosable={isClosable} />
        <ItemsStack direction={'column'} space={'8px'}>
            {alertTitle && (
                <AlertTitle
                    className="atlantum-alert-headline"
                    alertTitle={alertTitle}
                >
                    {alertTitle}
                </AlertTitle>
            )}

            <span>{children}</span>
        </ItemsStack>
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

export const CloseIcon: FC<AlertProps> = ({ isClosable }) => {
    return (
        <>
            {isClosable && (
                <Icon className="atlantum-close-button" name="close" />
            )}
        </>
    );
};

export const AlertTitle: FC<AlertProps> = ({ alertTitle }) => (
    <Heading as="h6">{alertTitle}</Heading>
);

export default Alert;
