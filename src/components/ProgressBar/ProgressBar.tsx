import React from 'react';
import styled from 'styled-components';

export interface IProps {
  label?: string;
  percentage: number;
}
const OuterDiv = styled.div`
  background: #f7f7f7;
  border-radius: 20px;
  width: 100%;
  height: 16px;
  position: relative;
`;

const Label = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #4c4f50;
  padding-bottom: 8px;
`;

const InnerDiv = styled.div<{ percentage: number }>`
  background: #9fccf3;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: ${props => (props.percentage === 100 ? 20 : 0)}px;
  border-bottom-right-radius: ${props => (props.percentage === 100 ? 20 : 0)}px;
  width: ${props => props.percentage}%;
  height: 16px;
  position: relative;
  transition: 0.25s;
  background-image: linear-gradient(
    -45deg,
    rgba(58, 141, 222, .2) 25%,
    transparent 25%,
    transparent 50%,
    rgba(58, 141, 222, .2) 50%,
    rgba(58, 141, 222, .2) 75%,
    transparent 75%,
    transparent
  );
  @keyframes move {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 40px 40px;
    }
  }
  background-size: 40px 40px;
  animation: move 2s linear infinite;
  overflow: hidden;
}
`;

const percentageLimit = (min: number, value: number, max: number) => {
  return Math.min(Math.max(min, value), max);
};

const ProgressBar: React.FC<IProps> = props => (
  <>
    {props.label && <Label>{props.label}</Label>}
    <OuterDiv>
      <InnerDiv percentage={percentageLimit(0, props.percentage, 100)} />
    </OuterDiv>
  </>
);

export default ProgressBar;
