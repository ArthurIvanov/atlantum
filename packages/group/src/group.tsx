import styled from 'styled-components';
import React, { FC, ReactNode } from 'react';

// @Todo Define Docs for type
export type RelationTypes =
    | 'closest'
    | 'grouped'
    | 'one-context'
    | 'separated'
    | 'far';

// @Todo Define Docs for type
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
            margin-bottom: ${props.theme.spacing[8]};  
        }
        @media only screen and (min-width: 400px) {
        * > *:not(:last-child) {
            margin-bottom: ${props.theme.spacing[8]};
        }
        
        @media only screen and (min-width: 600px) {
        * > *:not(:last-child) {
            margin-bottom: ${props.theme.spacing[8]};
        }
        
        @media only screen and (min-width: 1050px) {
        * > *:not(:last-child) {
            margin-bottom: 0;
        }
    }
        
    }
      
    `}

    ${(props) =>
        props.relation === 'grouped' &&
        `
        &>*:not(:last-child) {
            margin-bottom: ${props.theme.spacing[16]};  
        }
        @media only screen and (min-width: 400px) {
        * > *:not(:last-child) {
            margin-bottom: ${props.theme.spacing[16]};
        }
        
        @media only screen and (min-width: 600px) {
        * > *:not(:last-child) {
            margin-bottom: ${props.theme.spacing[16]};
        }
        
        @media only screen and (min-width: 1050px) {
        * > *:not(:last-child) {
            margin-bottom: 0;
        }
    }
        
    }
      
    `}

    ${(props) =>
        props.relation === 'one-context' &&
        `
        &>*:not(:last-child) {
            margin-bottom: ${props.theme.spacing[24]};  
        }
        @media only screen and (min-width: 400px) {
        * > *:not(:last-child) {
            margin-bottom: ${props.theme.spacing[24]};
        }
        
        @media only screen and (min-width: 600px) {
        * > *:not(:last-child) {
            margin-bottom: ${props.theme.spacing[24]};
        }
        
        @media only screen and (min-width: 1050px) {
        * > *:not(:last-child) {
            margin-bottom: 0;
        }
    }
        
    }
    `}
    
    ${(props) =>
        props.relation === 'separated' &&
        `
         &>*:not(:last-child) {
            margin-bottom: ${props.theme.spacing[32]};  
        }
        @media only screen and (min-width: 400px) {
        * > *:not(:last-child) {
            margin-bottom: ${props.theme.spacing[32]};
        }
        
        @media only screen and (min-width: 600px) {
        * > *:not(:last-child) {
            margin-bottom: ${props.theme.spacing[32]};
        }
        
        @media only screen and (min-width: 1050px) {
        * > *:not(:last-child) {
            margin-bottom: 0;
        }
    }
        
    }
    `}
    
    ${(props) =>
        props.relation === 'far' &&
        `
        &>*:not(:last-child) {
            margin-bottom: ${props.theme.spacing[48]};  
        }
        @media only screen and (min-width: 400px) {
        * > *:not(:last-child) {
            margin-bottom: ${props.theme.spacing[48]};
        }
        
        @media only screen and (min-width: 600px) {
        * > *:not(:last-child) {
            margin-bottom: ${props.theme.spacing[48]};
        }
        
        @media only screen and (min-width: 1050px) {
        * > *:not(:last-child) {
            margin-bottom: 0;
        }
    }
        
    }
    `}
`;

export const Group: FC<GroupProps> = ({
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
