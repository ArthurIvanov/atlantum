import React from 'react';
import { TextLink } from '@atlantum/text-link';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import { Card } from '@atlantum/card';
import { Icon } from '@atlantum/icons';
import '../stories.styles.css';

const Regular = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <TextLink href={'#'}>Link 1</TextLink>
                </Card>
            </div>
        </>
    );
};

const WIthIcon = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size={'standard'}>
                    <TextLink
                        href={'#'}
                        Icon={<Icon name={'arrow-up-left'} size={20} />}
                    >
                        Link 1
                    </TextLink>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Text-link', module).add('Regular', () => <Regular />);
storiesOf('Components/Text-link', module).add('WIthIcon', () => <WIthIcon />);
