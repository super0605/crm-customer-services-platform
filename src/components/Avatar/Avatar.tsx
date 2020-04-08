import React, { FC, CSSProperties } from 'react';
import styled, { ThemeProvider, css } from 'styled-components';

import { CrmCustomerServiceTheme } from '../Theme';
import Icon from '../Icon';
import { dpstyle } from '../Styled';

interface ImageProps {
  size: number;
  selected?: boolean;
  showBoxShadow?: boolean;
}
const AvatarContainer = styled.div<ImageProps>`
  display: flex;
  align-items: center;
  img,
  svg {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%;
    object-fit: cover;
    ${props =>
      props.showBoxShadow &&
      css`
        box-shadow: 0px 3px 4px ${_props => _props.theme.pageHeader};
      `}
    ${props =>
      props.selected &&
      css`
        box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
      `}
  }
`;

interface ITextProps {
  backgroundColor: string;
  color: string;
  size: number;
}
const Text = styled(dpstyle.div)<ITextProps>`
  cursor: default;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  line-height: ${props => props.size}px;
  border-radius: 50%;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  border: solid 2px transparent;
  &:hover {
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border: solid 2px ${props => props.theme.hoverColour};
  }
`;

export interface IProps {
  size?: number;
  textSize?: number;
  selected?: boolean;
  type: 'image' | 'svg' | 'text';
  content: string;
  textColor?: string;
  textBackgroundColor?: string;
  style?: CSSProperties;
  className?: string;
  showBoxShadow?: boolean;
}

const Avatar: FC<IProps> = ({
  size = 25,
  textSize = 22,
  selected,
  type,
  content,
  textColor,
  textBackgroundColor,
  style,
  className,
  showBoxShadow = true
}) => (
  <ThemeProvider theme={CrmCustomerServiceTheme}>
    <AvatarContainer
      style={style}
      className={className}
      size={size}
      selected={selected}
      showBoxShadow={showBoxShadow}
    >
      {type === 'image' && <img src={content} alt='avatar' />}

      {type === 'svg' && <Icon name={content} />}

      {type === 'text' && (
        <Text
          size={textSize}
          color={textColor}
          backgroundColor={textBackgroundColor}
        >
          {(content || '').charAt(0).toUpperCase()}
        </Text>
      )}
    </AvatarContainer>
  </ThemeProvider>
);

export default Avatar;
