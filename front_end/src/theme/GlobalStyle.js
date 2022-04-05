import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
body {
	font-family: 'Work Sans', sans-serif;
	::-webkit-scrollbar {
    width: 1rem;
	}
	::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
    border-radius: 10px;
    min-height: 20rem;
	}
}
`;

export default GlobalStyle;
