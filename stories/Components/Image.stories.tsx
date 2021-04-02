import * as React from 'react';
import { storiesOf } from '@storybook/react';

import GlobalStyles from '@atlantum/theme';
import '../stories.styles.css';

import Image from '@atlantum/image';

const Simple = () => {
    return (
        <>
            <GlobalStyles />
            <div className="atlantum-view">
                <Image
                    src="https://i.ibb.co/DLtL9b8/atlantum-bg.png"
                    alt={'image-example'}
                />
            </div>
        </>
    );
};

storiesOf('Components/Image', module).add('Simple', () => <Simple />);
