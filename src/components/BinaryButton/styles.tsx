import styled from 'styled-components';

export const StyledBinaryButton = styled.div<{ selected: boolean }>`
  display: inline-flex;
  button {
    width: 189px;
    font-family: Rubik;
    font-style: normal;
    font-size: 15px;
    line-height: 150%;
    display: flex;
    font-weight: normal;
    align-items: center;
    .yes-icon-text, .no-icon-text {
      display: flex;
      align-items: center;
      svg {
        margin: unset !important;
        padding-right: 16px !important;
      }
    }
    .yes-icon-text {
      padding-left: 47px;
      svg {
        width: 13px;
        height: 9px;
      }
    }
    .no-icon-text {
      padding-left: 53px;
      svg {
        width: 9px;
        height: 9px;
      }
    }
  }
  .selected {
    button {
      font-weight: 500;
      color: ${props => props.theme.activeColour};
      border: solid 1px ${props => props.theme.activeColour};
      background: ${props => props.theme.hoverColour};
      svg {
        path {
          fill: ${props => props.theme.activeColour};
        }
      }
    }
  }
  .yes-btn {
    button {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }
  }
  .no-btn {
    button {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  }
  .un-selected.no-btn {
    button {
      border-left: 0px;
      &:hover {
        border-left: ${props =>
          props.selected !== true && 'solid 1px ' + props.theme.activeColour};
        margin-left: ${props => props.selected === undefined && -1}px;
      }
    }
  }
  .un-selected.yes-btn {
    button {
      border-right: ${props => props.selected !== undefined && '0px'};
    }
  }
`;
