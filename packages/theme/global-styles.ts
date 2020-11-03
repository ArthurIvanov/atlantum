import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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
    a, a:active {
        text-decoration: none;
    };
    
    label {
        font-family: ${(props) => props.theme.typography.family.base};
        color: blue;
    }


	p, button {
		font-size: ${(props) => props.theme.typography.size[300]};
	}
    
    h1 {
        font-size: ${(props) => props.theme.typography.size['900']};
        font-weight: ${(props) => props.theme.typography.weight['700']};
        line-height: ${(props) => props.theme.typography.lineHeight['64']};
    }

    h2 {
        font-size: ${(props) => props.theme.typography.size['800']};
        font-weight: ${(props) => props.theme.typography.weight['700']};
        line-height: ${(props) => props.theme.typography.lineHeight['64']};
    }

    h3 {
      font-size: ${(props) => props.theme.typography.size[700]};
      font-weight: ${(props) => props.theme.typography.weight[700]}
    }
  }
`;

export default GlobalStyles;
