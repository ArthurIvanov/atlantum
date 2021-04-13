import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { GlobalStyles } from '@atlantum/theme';
import { Image } from '../../packages/image';
import { Card } from '@atlantum/card';
import '../stories.styles.css';

const Default = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Card size="standard">
                    <Image
                        src="https://i.ibb.co/DLtL9b8/atlantum-bg.png"
                        alt={'image-example'}
                    />
                </Card>
            </div>
        </>
    );
};

storiesOf('Components/Image', module).add('Default', () => <Default />);