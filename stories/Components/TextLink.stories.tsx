import React from 'react';
import { TextLink } from '@atlantum/text-link';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import { Card } from '@atlantum/card';
import { ItemsStack } from '@atlantum/items-stack';
import { Icon } from '@atlantum/icons';
import '../stories.styles.css';

const Design = () => {
    return (
        <div className="atlantum-full-view">
            <ItemsStack direction={'row'}>
                <iframe
                    style={{ borderRadius: '4px', border: 'none' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D127%253A135"
                    allowFullScreen
                />
                <iframe
                    style={{ borderRadius: '4px', border: 'none' }}
                    width="100%"
                    height="300"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D127%253A133"
                    allowFullScreen
                />
            </ItemsStack>
        </div>
    );
};

storiesOf('Components/Text-link', module).add('Design', () => <Design />);

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
