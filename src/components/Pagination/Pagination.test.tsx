import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import Pagination, { IProps } from './Pagination';
import { CrmCustomerServiceTheme } from '../Theme';

configure({ adapter: new Adapter() });

describe('Pagination', () => {
  let props: IProps;
  let mountedPagination: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedPagination) {
      mountedPagination = bShallow
        ? shallow(
            <ThemeProvider theme={CrmCustomerServiceTheme}>
              <Pagination {...props} />
            </ThemeProvider>
          )
        : mount(
            <ThemeProvider theme={CrmCustomerServiceTheme}>
              <Pagination {...props} />
            </ThemeProvider>
          );
    }
    return mountedPagination;
  };

  beforeEach(() => {
    props = {
      totalRecords: 1000,
      rowsPerPage: 10,
      currentPage: 1,
      onChangePage: () => false,
      onChangeRowsPerPage: () => false
    };
    mountedPagination = undefined;
  });

  it('always renders <div>', () => {
    expect(wrapper(false).find('div').length).toBeGreaterThan(1);
  });
});