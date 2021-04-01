import React from 'react';
import { storiesOf } from '@storybook/react';

const Neutral = () => {
    return (
        <>
            <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                width="100%"
                height="500"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D1%253A190"
                allowFullScreen
            />
            <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                width="100%"
                height="500"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D14%253A181"
                allowFullScreen
            />
        </>
    );
};

const Primary = () => {
    return (
        <>
            <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                width="100%"
                height="500"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D1%253A191"
                allowFullScreen
            />
            <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                width="100%"
                height="500"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D14%253A213"
                allowFullScreen
            />
        </>
    );
};
const Danger = () => {
    return (
        <>
            <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                width="100%"
                height="500"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D1%253A224"
                allowFullScreen
            />
            <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                width="100%"
                height="500"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D14%253A257"
                allowFullScreen
            />
        </>
    );
};

const Warning = () => {
    return (
        <>
            <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                width="100%"
                height="500"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D1%253A225"
                allowFullScreen
            />
            <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                width="100%"
                height="500"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D14%253A278"
                allowFullScreen
            />
        </>
    );
};

const Success = () => {
    return (
        <>
            <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                width="100%"
                height="500"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D1%253A226"
                allowFullScreen
            />
            <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                width="100%"
                height="500"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D14%253A299"
                allowFullScreen
            />
        </>
    );
};

const Info = () => {
    return (
        <>
            <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                width="100%"
                height="500"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D1%253A227"
                allowFullScreen
            />
            <iframe
                style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                width="100%"
                height="500"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F5CdA4Nbd80vV0fy43Or0kZ%2FAtlantum-Examples%3Fnode-id%3D14%253A320"
                allowFullScreen
            />
        </>
    );
};

storiesOf('Colors', module).add('Neutral', () => <Neutral />);
storiesOf('Colors', module).add('Primary', () => <Primary />);
storiesOf('Colors', module).add('Danger', () => <Danger />);
storiesOf('Colors', module).add('Warning', () => <Warning />);
storiesOf('Colors', module).add('Success', () => <Success />);
storiesOf('Colors', module).add('Info', () => <Info />);
