import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    body {
        
        background-color: ${(props) => props.theme.colors.neutralLight};
        font-family: ${(props) => props.theme.typography.family.base};
        font-weight: ${(props) => props.theme.typography.fontWeight.regular};
        box-sizing: border-box;
        display: block;
        margin: 0;
        padding: 24px;
        position: relative;
        
        * {
            box-sizing: border-box;
            display: block;
            margin: 0;
            padding: 0;
            position: relative;
        }
    }
`;

export default GlobalStyles;
