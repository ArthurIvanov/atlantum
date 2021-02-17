import styled from 'styled-components';
import * as React from 'react';
import { FC, ReactNode } from 'react';

export type RelationTypes =
    | 'closest'
    | 'one-of'
    | 'not-depend'
    | 'separated'
    | 'far';

export type Direction = 'row' | 'column';

export interface GroupProps {
    children: ReactNode;
    relation: RelationTypes;
    isCentered?: boolean;
    className?: string;
}

const StyledGroup = styled.div<GroupProps>`
    width: 100%;
    display: flex;
    flex-direction: column;

    ${(props) =>
        props.isCentered &&
        `
            align-items: center;
    `}

    ${(props) =>
        props.relation === 'closest' &&
        `
        &>*:not(:last-child) {
            margin-bottom: ${props.theme.spacing.space8};
            
            & * >.atlantum-column:not(:last-child) {
                margin-bottom: ${props.theme.spacing.space8};
            }
        }
        
    `}

    ${(props) =>
        props.relation === 'one-of' &&
        `
        &>*:not(:last-child) {
            margin-bottom: ${props.theme.spacing.space16};  
        }
        @media only screen and (min-width: 400px) {
        div.atlantum-grid > .atlantum-column:not(:last-child) {
            margin-bottom: ${props.theme.spacing.space16};
        }
        
        @media only screen and (min-width: 600px) {
        div.atlantum-grid > .atlantum-column:not(:last-child) {
            margin-bottom: ${props.theme.spacing.space16};
        }
        
        @media only screen and (min-width: 1050px) {
        div.atlantum-grid > .atlantum-column:not(:last-child) {
            margin-bottom: 0;
        }
    }
        
    }
      
    `}

    ${(props) =>
        props.relation === 'not-depend' &&
        `
        & > *:not(:last-child) {
            margin-bottom: ${props.theme.spacing.space24};
            
        }
        
        @media only screen and (min-width: 400px) {
            & div.atlantum-grid > .atlantum-column:not(:last-child) {
                margin-bottom: ${props.theme.spacing.space16};
            }
        
    `}
    
    ${(props) =>
        props.relation === 'separated' &&
        `
        & > *:not(:last-child) {
            margin-bottom: ${props.theme.spacing.space32};
        }
        
    `}
    
    ${(props) =>
        props.relation === 'far' &&
        `
        & > *:not(:last-child) {
            margin-bottom: ${props.theme.spacing.space48};
        }
        
    `}
`;

const Group: FC<GroupProps> = ({
    children,
    relation,
    className,
    isCentered,
}) => {
    return (
        <StyledGroup
            className={className}
            relation={relation}
            isCentered={isCentered}
        >
            {children}
        </StyledGroup>
    );
};

export default Group;
