import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    body {
        background-color: ${(props) => props.theme.colors.neutralGlobalBG};
        font-family: ${(props) => props.theme.typography.family.base};
        font-weight: ${(props) => props.theme.typography.fontWeight.regular};
        position: relative;
              
    }

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, font, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption {
		margin: 0;
		padding: 0;
		border: 0;
		box-sizing: border-box;
		display: block;
	}
`;
