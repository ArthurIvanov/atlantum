import styled from 'styled-components';
import * as React from 'react';
import { FC, ReactNode } from 'react';

export type RelationTypes =
    | 'closest'
    | 'one-of'
    | 'not-depend'
    | 'separated'
    | 'far';

export interface GroupProps {
    children: ReactNode;
    relation: RelationTypes;
}

const StyledGroup = styled.div<GroupProps>`
    width: 100%;

    ${(props) =>
        props.relation === 'closest' &&
        `
        & > *:not(:last-child) {
            margin-bottom: 8px;
        }
        
    `}

    ${(props) =>
        props.relation === 'one-of' &&
        `
        & > *:not(:last-child) {
            margin-bottom: 16px;
        }
        
    `}
    
    ${(props) =>
        props.relation === 'not-depend' &&
        `
        & > *:not(:last-child) {
            margin-bottom: 24px;
        }
        
    `}
    
    ${(props) =>
        props.relation === 'separated' &&
        `
        & > *:not(:last-child) {
            margin-bottom: 32px;
        }
        
    `}
    
    ${(props) =>
        props.relation === 'far' &&
        `
        & > *:not(:last-child) {
            margin-bottom: 48px;
        }
        
    `}
`;

const Group: FC<GroupProps> = ({ children, relation }) => {
    return <StyledGroup relation={relation}>{children}</StyledGroup>;
};

export default Group;
