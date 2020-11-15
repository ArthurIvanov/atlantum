import styled from 'styled-components';
import * as React from 'react';
import { FC, ReactNode, useState } from 'react';
import { ChevronDown } from 'react-feather';

export interface AccordionItemProps {
    children?: ReactNode;
    title: string;
    onClick?: React.MouseEventHandler;
}

const StyledAccordionItem = styled.li<AccordionItemProps>`
    ul > li:first-child {
        margin-top: 4px;
    }
    ul > li:not(:last-child) {
        margin-bottom: 4px;
    }
    .atlantum-accordion-item--title {
        cursor: pointer;
        font-weight: ${(props) => props.theme.typography.fontWeight.semiBold};
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .atlantum-accordion-item--content {
        font-weight: ${(props) => props.theme.typography.fontWeight.regular};
        list-style: none;
        margin: 0;
        padding: 0;
        margin-left: 12px;
    }

    .atlantum-accordion-item--content__closed {
        display: none;
    }

    .atlantum-accordion-item--content__open {
        display: block;
    }
    .atlantum-accordion--icon {
        transition: transform 0.1s ease;

        &__rotated {
            transform: rotateZ(180deg);
        }
    }
`;

const AccordionItem: FC<AccordionItemProps> = ({
    title,
    children,
    onClick,
}) => {
    const [open, setOpen] = useState(false);

    onClick = () => {
        setOpen(!open);
    };

    return (
        <StyledAccordionItem title={title}>
            <span className="atlantum-accordion-item--title" onClick={onClick}>
                {title}
                <ChevronDown
                    size={24}
                    className={`${
                        open
                            ? 'atlantum-accordion--icon atlantum-accordion--icon__rotated'
                            : 'atlantum-accordion--icon'
                    }`}
                />
            </span>
            <ul
                className={`${
                    open
                        ? 'atlantum-accordion-item--content atlantum-accordion-item--content__open'
                        : 'atlantum-accordion-item--content atlantum-accordion-item--content__closed'
                }`}
            >
                {children}
            </ul>
        </StyledAccordionItem>
    );
};

export default AccordionItem;
