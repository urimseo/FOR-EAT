import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
body {
	font-family: 'Work Sans', sans-serif;
}
`;

export default GlobalStyle;
