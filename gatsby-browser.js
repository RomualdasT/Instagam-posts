import React from 'react';
import { createGlobalStyle, ThemeProvider} from 'styled-components';

import Theme from 'src/themes/theme';

const GlobalStyles = createGlobalStyle`
body {
    font-family: ${Theme.primaryFont};
    font-size: 16px;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }
`

export const wrapRootElement = ({element}) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
    </ThemeProvider>
);