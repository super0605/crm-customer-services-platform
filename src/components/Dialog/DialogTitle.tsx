import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';

const DialogTitleStyled = styled.div`
  background: #e8ebee;
  height: 55px;
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: ${props => props.theme.activeColour};
  padding: 0 25px;
  > div {
    align-items: center;
    display: flex;
    height: 100%;
  }
`;

export type Props = {
  children?: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const DialogTitle: FC<Props> = ({ children, ...props }) => (
  <DialogTitleStyled {...props}>
    <div>{children}</div>
  </DialogTitleStyled>
);

export default DialogTitle;