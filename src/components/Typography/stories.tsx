import React from 'react';

import { storiesOf } from '@storybook/react';
import { H1, H2, H3, H4, H5, H6, P1, P2, P3, S1, S2 } from './index';

storiesOf('Typography', module).add('typography', () => (
  <React.Fragment>
    <H1>H1 - Rubik Medium 28px</H1>
    <H2>H2 - Rubik Regular 18px</H2>
    <H3>H3 - Rubik Regular 16px</H3>
    <H4>H4 - Rubik Medium 16px</H4>
    <H5>H5 - Rubik Regular 15px</H5>
    <H6>H6 - Rubik Medium 15px</H6>
    <P1>P1 - Lato Regular 14px</P1>
    <P2>P2 - Lato Semibold 14px</P2>
    <P3>P3 - Lato Semibold 14px</P3>
    <S1>S1 - Lato Bold 12px</S1>
    <S2>S2 - Lato Regular 12px</S2>
  </React.Fragment>
));
