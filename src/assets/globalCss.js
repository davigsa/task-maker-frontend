import { createGlobalStyle } from 'styled-components'

export const GlobalCss = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }

	section {
		padding: 32px 16px;
		margin: 16px auto;
		border-radius: 24px;
		background-color: #fafafa;
		text-align: center;
		max-width: 100%;
		width: 780px;
	}

	ul {
		padding: 0;
	}
`
