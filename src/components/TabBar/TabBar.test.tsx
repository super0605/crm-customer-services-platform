import React from 'react';
import { mount, shallow } from '../../test/enzyme';
import TabBar, { IProps } from './TabBar';

describe('TabBar', () => {
  let props: IProps;
  let mountedTabBar: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedTabBar) {
      mountedTabBar = bShallow
      ? shallow(
          <TabBar {...props} />
      ) : mount(
          <TabBar {...props} />
      );
    }
    return mountedTabBar;
  };

  const TabItems = [
    { label: 'admin.tabbar.bar1' },
    { label: 'admin.tabbar.bar2' },
    { label: 'admin.tabbar.bar3' }
  ];
  beforeEach(() => {
    props = {
      tabItems: TabItems,
      sharedTabsCount: 3,
    };
    mountedTabBar = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe('when tabItems is empty', () => {
    beforeEach(() => {
      props.tabItems = [];
    });

    it('doesn\'t render Tab component', () => {
      expect(wrapper(false).find('Tab').length).toBe(0);
    });
  });
});
