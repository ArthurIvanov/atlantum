import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
    html {
        -webkit-text-size-adjust: 100%;
    }
    body {
			background-color: ${(props) => props.theme.colors.neutralGlobalBG};
			font-family: ${(props) => props.theme.typography.family.base};
			font-weight: ${(props) => props.theme.typography.fontWeight.regular};
			position: relative;
            margin: 0;
            padding: 0;
    }
    main {
        display: block;
        margin: 0;
        padding: 0;
    }

    pre {
        font-family: monospace, monospace;
        font-size: 1em;
    }

    abbr[title] {
        border-bottom: none;
        text-decoration: underline dotted;
    }
    b,
    strong {
        font-weight: bolder;
    }
    code,
    kbd,
    samp {
        font-family: monospace, monospace;
        font-size: 1em;
    }
    small {
        font-size: 80%;
    }
    sub,
    sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
		margin: 0;
		padding: 0;
    }
    sub {
		margin: 0;
		padding: 0;
    }
    sup {
		margin: 0;
		padding: 0;
    }
    img {
        border-style: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
		margin: 0;
		padding: 0;
    }
    button,
    input {
        overflow: hidden;
    }
    button,
    select,
    a{
        text-transform: none;
    }
    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
        -webkit-appearance: button;
    }
    button::-moz-focus-inner,
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner {
        border-style: none;
        padding: 0;
    }
    button:-moz-focusring,
    [type='button']:-moz-focusring,
    [type='reset']:-moz-focusring,
    [type='submit']:-moz-focusring {
        outline: 1px dotted ButtonText;
    }
    fieldset {
        padding: 0.35em 0.75em 0.625em;
    }
    legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
    }
    progress {
        vertical-align: baseline;
    }
    textarea {
        overflow: auto;
    }
    [type='checkbox'],
    [type='radio'] {
        box-sizing: border-box;
		margin: 0;
		padding: 0;
    }
    [type='number']::-webkit-inner-spin-button,
    [type='number']::-webkit-outer-spin-button {
        height: auto;
    }
    [type='search'] {
        -webkit-appearance: textfield;
       
    }
    [type='search']::-webkit-search-decoration {
        -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
    }
    details {
        display: block;
    }
    summary {
        display: list-item;
    }
    template {
        display: none;
    }
    [hidden] {
        display: none;
    }
    div {
        box-sizing: border-box;
		margin: 0;
		padding: 0;
    }
`;
