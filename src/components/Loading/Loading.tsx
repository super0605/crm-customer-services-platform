import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { CrmCustomerServiceTheme } from '../Theme';

export interface IStyleProps {}

const LoadingStyled = styled.div<IStyleProps>`
	border: 1px solid grey;
`;

export interface IProps {}

const Loading: FC<IProps & IStyleProps> =props => (
  <ThemeProvider theme={CrmCustomerServiceTheme}>
    <LoadingStyled><FormattedMessage id='admin.page.loading' /></LoadingStyled>
  </ThemeProvider>
);

export default Loading;
