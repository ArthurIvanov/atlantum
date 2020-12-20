import * as React from 'react';
import { storiesOf } from '@storybook/react';

const Figma = () => {
    return (
        <iframe
            style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
            width="100%"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FI9zFMdah9REO3jy8UyPmBx%2FAtlantum%3Fnode-id%3D389%253A1058"
            allowFullScreen
        />
    );
};

storiesOf('Figma', module).add('Figma', () => <Figma />);
