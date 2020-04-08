import React from 'react';
import { ThemeProvider } from 'styled-components';
import CrmCustomerServiceTheme from '../../style/CrmCustomerServiceTheme';
import { PageContainer } from './layout';

import '../../style/fonts.css';
import '../../style/text-antialiased.css';

export const AppContainer = (props: any) => (
  <ThemeProvider theme={CrmCustomerServiceTheme}>
    <PageContainer>{props.children}</PageContainer>
  </ThemeProvider>
);
