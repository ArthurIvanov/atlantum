import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';
import myIcons from './set';
import { IconComponentProps } from './types';

const StyledIcon = ({ name, color, ...props }: IconComponentProps) => {
    const myParse = parse(myIcons[name]);
    const { size = 24, strokeWidth = 2, onClick, ...otherProps } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={'currentColor'}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={onClick}
            {...otherProps}
        >
            {myParse}
        </svg>
    );
};

export const Icon = styled(StyledIcon)``;

export default Icon;
