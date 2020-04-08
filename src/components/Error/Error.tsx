import React, { FC } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { CrmCustomerServiceTheme } from '../Theme';

export interface IStyleProps {}

const ErrorStyled = styled.div<IStyleProps>`
	border: 1px solid grey;
`;

export interface IProps {
  apolloError?: any;
}

const Error: FC<IProps & IStyleProps> = ({apolloError}) => (
  <ThemeProvider theme={CrmCustomerServiceTheme}>
    <ErrorStyled>
      <h2><FormattedMessage id='admin.page.error' /></h2>
      {apolloError && apolloError.graphQLErrors && (
        <ul>
          {apolloError.graphQLErrors.map(({ message }: any, i: number) => (
            <li key={i}>{message}</li>
          ))}
        </ul>
      )}
    </ErrorStyled>
  </ThemeProvider>
);

export default Error;
