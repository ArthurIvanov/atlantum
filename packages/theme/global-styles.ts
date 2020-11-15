import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    body {
        font-family: ${(props) => props.theme.typography.family.base};
        box-sizing: border-box;
        display: block;
        margin: 0;
        padding: 0;
        position: relative;
        * {
            box-sizing: border-box;
            display: block;
            margin: 0;
            padding: 0;
        }
    }
`;

export default GlobalStyles;
