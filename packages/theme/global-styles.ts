import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
    
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    body {
        font-family: ${(props) => props.theme.typography.family.base};
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
    }

    
  }
`;

export default GlobalStyles;
