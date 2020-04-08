import React from 'react';
import styled from 'styled-components';
import Tooltip from '../Tooltip';

type LocaleConfigsType = {
  [GB: string]: {
    flag: string;
    name: string;
  }
};

const LocaleConfigs: LocaleConfigsType = {
  GB: {
    flag: require('../../assets/flags/uk.png'),
    name: 'United Kingdom'
  }
};

const ImageStyled = styled.img`
  width: 30px;
  height: 18px;
  box-shadow: 0px 3px 4px #e1eefb;
`;

export interface IProps {
  code: string;
}

export const Locale: React.FC<IProps> = ({ code }: { code: string}) => {
  const config = LocaleConfigs[code];
  if (!config) {
    return null;
  }

  return (
    <Tooltip content={config.name} styleType='lightBox'>
      <ImageStyled src={config.flag} />
    </Tooltip>
  );
};

export default Locale;