import styled from 'styled-components';
import React from 'react';
import { FC, ReactNode, useState } from 'react';
import { ChevronDown } from 'react-feather';

export interface AccordionItemProps {
    /**
     * Mandatory field, you need to enter a button label.
     */
    children?: ReactNode;

    /**
     * Accordion title `string`.
     */
    title: string;

    /**
     * Access to React event handler.
     */
    onClick?: React.MouseEventHandler;

    /**
     * Allow apply custom classes to component
     */
    className?: string;
}

const StyledAccordionItem = styled.li<AccordionItemProps>`
    ul > li {
        padding: ${(props) => props.theme.spacing[12]};
        padding-left: ${(props) => props.theme.spacing[24]};
        a:hover {
            color: ${(props) => props.theme.colors.primary[200]};
        }
    }
    .atlantum-accordion-item--title {
        outline: none;
        cursor: pointer;
        border-radius: ${(props) => props.theme.borderRadius};
        font-weight: ${(props) => props.theme.typography.fontWeight.semiBold};
        font-size: ${(props) => props.theme.typography.fontSize.base};
        font-family: ${(props) => props.theme.typography.family.base};
        display: flex;
        width: 100%;
        border: none;
        background-color: transparent;
        align-items: center;
        justify-content: space-between;
        margin: 0;
        padding: ${(props) => props.theme.spacing[8]}
            ${(props) => props.theme.spacing[24]};
        transition: 0.2s ease;
        color: ${(props) => props.theme.colors.neutral[400]};

        &:hover {
            color: ${(props) => props.theme.colors.primary[200]};
        }

        &:focus {
            box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary[100]};
            color: ${(props) => props.theme.colors.primary[200]};
        }
    }

    .atlantum-accordion-item--content {
        font-weight: ${(props) => props.theme.typography.fontWeight.regular};
        list-style: none;
        padding: 0;
        & > a {
            padding-left: ${(props) => props.theme[24]};
        }
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

export const AccordionItem: FC<AccordionItemProps> = ({
    title,
    children,
    onClick,
    className,
}) => {
    const [open, setOpen] = useState(false);

    onClick = () => {
        setOpen(!open);
    };

    return (
        <StyledAccordionItem title={title} className={className}>
            <button
                className="atlantum-accordion-item--title"
                onClick={onClick}
            >
                {title}
                <ChevronDown
                    size={24}
                    className={`${
                        open
                            ? 'atlantum-accordion--icon atlantum-accordion--icon__rotated'
                            : 'atlantum-accordion--icon'
                    }`}
                />
            </button>
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
