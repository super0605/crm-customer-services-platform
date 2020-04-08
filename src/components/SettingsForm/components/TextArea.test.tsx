import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import TextArea from './TextArea';
import { CrmCustomerServiceTheme } from '../../Theme';

describe('TextArea', () => {
  let mountedTextArea: any;
  const TextAreaComponent: React.FC = () => {

    return (
      <TextArea
        placeholder='Test placeholder string'
        value='Test tring for text area'
        onChange={() => {}}
      />
    );
  };

  const wrapper = (bShallow: boolean) => {
    if (!mountedTextArea) {
      mountedTextArea = bShallow
        ? shallow(
            <ThemeProvider theme={CrmCustomerServiceTheme}>
              <TextAreaComponent />
            </ThemeProvider>
          )
        : mount(
            <ThemeProvider theme={CrmCustomerServiceTheme}>
              <TextAreaComponent />
            </ThemeProvider>
          );
    }
    return mountedTextArea;
  };
  beforeEach(() => {
    mountedTextArea = undefined;
  });

  it('always renders <textarea>', () => {
    expect(wrapper(false).find('textarea').length).toBeGreaterThan(0);
  });
});
