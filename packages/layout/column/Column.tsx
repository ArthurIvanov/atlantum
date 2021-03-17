import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

export interface ColumnProps {
    children: ReactNode;
    smallBP?: string;
    mediumBP?: string;
    largeBP?: string;
    className?: string;
}

const StyledColumn = styled.div<ColumnProps>`
    display: flex;
    align-items: center;

    @media only screen and (min-width: ${(props) =>
            props.theme.layout.smallBp}) {
        grid-column: ${(props) => props.smallBP};
    }

    @media only screen and (min-width: ${(props) =>
            props.theme.layout.mediumBp}) {
        grid-column: ${(props) => props.mediumBP};
    }
    @media only screen and (min-width: ${(props) =>
            props.theme.layout.largeBp}) {
        grid-column: ${(props) => props.largeBP};
    }
`;

const Column: FC<ColumnProps> = ({
    children,
    smallBP = '1 / 13',
    mediumBP = '1 / 13',
    largeBP = '1 / 13',
    className,
}) => {
    return (
        <StyledColumn
            className={className}
            smallBP={smallBP}
            mediumBP={mediumBP}
            largeBP={largeBP}
        >
            {children}
        </StyledColumn>
    );
};

export default Column;
