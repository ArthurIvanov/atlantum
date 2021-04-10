import * as React from 'react';
import { TextLink } from '../../packages/components/text-link/src';
import { storiesOf } from '@storybook/react';
import GlobalStyles from '@atlantum/theme';
import '../stories.styles.css';
import Card from '../../packages/layout/card';
import ItemsStack from '../../packages/layout/items-stack';

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
                    <TextLink href={'#'} isIcon>
                        Link 1
                    </TextLink>
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Text-link', module).add('Regular', () => <Regular />);
storiesOf('Components/Text-link', module).add('WIthIcon', () => <WIthIcon />);
