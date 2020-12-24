import * as React from 'react';
import { FC, ReactNode } from 'react';
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

    @media only screen and (min-width: 100px) {
        grid-column: ${(props) => props.smallBP};
    }

    @media only screen and (min-width: 600px) {
        grid-column: ${(props) => props.mediumBP};
    }
    @media only screen and (min-width: 1050px) {
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
