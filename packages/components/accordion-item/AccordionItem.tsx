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
    ul > li {
        padding: ${(props) => props.theme.spacing.space12};
        padding-left: ${(props) => props.theme.spacing.space24};
        a:hover {
            color: ${(props) => props.theme.colors.primary200};
        }
        a:focus {
            background-color: #d60d0d;
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
        padding: ${(props) => props.theme.spacing.space8}
            ${(props) => props.theme.spacing.space24};
        transition: 0.2s ease;

        &:hover {
            color: ${(props) => props.theme.colors.primary200};
        }

        &:focus {
            box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary100};
            color: ${(props) => props.theme.colors.primary200};
        }
    }

    .atlantum-accordion-item--content {
        font-weight: ${(props) => props.theme.typography.fontWeight.regular};
        list-style: none;
        padding: 0;
        & > a {
            padding-left: ${(props) => props.theme.spacing.space24};
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

export default AccordionItem;
