import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import Button from './Button';
import { IButtonProps } from './types';

describe('Button', () => {
  let props: IButtonProps;
  let mountedButton: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedButton) {
      mountedButton = bShallow ? shallow(<Button {...props} />) : mount(<Button {...props} />);
    }
    return mountedButton;
  };

  beforeEach(() => {
    props = {
      styleType: 'primary'
    };
    mountedButton = undefined;
  });

  it('always renders a <button>', () => {
    const elts = wrapper(false).find('button');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe('when children is undefined', () => {
    beforeEach(() => {
      props.children = undefined;
    });

    it('doesn\'t render anything else', () => {
      expect(wrapper(false).find('button').children().length).toBe(0);
    });
  });

  describe('when children is defined', () => {
    beforeEach(() => {
      props.children = <div>button text</div>;
    });

    it('renders them within the button tag', () => {
      expect(wrapper(false).find('button').children().length).toBe(1);
    });
  });

  describe('when onClick is defined', () => {
    it('when button clicked, will call the handler', () => {
      let passedParam = 0;
      const handleParam = () => {
        passedParam = 999;
      };
      props.onClick = handleParam;

      const button = wrapper(false).find('button');
      button.simulate('click');
      expect(passedParam).toBe(999);
    });
  });
});