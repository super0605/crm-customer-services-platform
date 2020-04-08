import React, { FC, useState } from 'react';
import styled from 'styled-components';

import Card from '../Card';
import Avatar from '../../Avatar';
import Checkbox from '../../Checkbox';
import { H2, P3 } from '../../Typography';
import Label from '../../Label';

interface UserTextDetail {
  text?: string;
  color?: string;
  textBackgroundColor?: string;
}

export interface UserType {
  userName?: string;
  userNumber?: string;
  userMail?: string;
  userTexts?: UserTextDetail[];
  avatar?: string;
}
export interface IProps {
  checkbox: boolean;
  cardDetails?: UserType;
  styleType: 'view1' | 'view2' | 'view3' | 'view4';
}

interface StyleProps {
  styleType: 'view1' | 'view2' | 'view3' | 'view4';
}

const CardStyled = styled.div`
  width: 350px;
  display: flex;
`;

const Ellipse = styled.div`
  background: #54b162;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  position: absolute;
  right: 15px;
  top: 14px;
`;
const CheckboxWrapper = styled.div`
  position: absolute;
  left: 12px;
  top: 14px;
`;

const ContentWrapper = styled.div<StyleProps>`
  display: flex;
  flex-flow: column;
  align-items: left;
  padding-top: 14px;
  padding-bottom: 14px;
  width: 100%;
  padding-left: ${props => ((props.styleType === 'view3' || props.styleType === 'view4') ? '42px' : '0px')};
`;

const AvatarWrapper = styled.div<StyleProps>`
  display: flex;
  align-items: center;
  padding: ${props =>
    props.styleType === 'view1'
      ? '15px 15px 15px 25px'
      : props.styleType === 'view2'
      ? '15px 16px 15px 15px'
      : '0px 10px 0px 0px'};
  align-self: flex-start;
`;

const TextAvatarStyled = styled.div`
  padding-right: 3px;
`;
const StyledPermission = styled.div`
  padding-right: 5px;
`;
const StyledAdmin = styled.div`
  padding-left: 5px;
`;

const StyledNameSection = styled.div<StyleProps>`
  display: ${props =>
    props.styleType === 'view4' ? 'block' : 'flex'};
  alignitems: center;
  padding-bottom: ${props =>
    props.styleType === 'view1'
      ? '4px'
      : props.styleType === 'view2'
      ? '0px'
      : '5px'};
`;
const KanbanViewCard: FC<IProps> = ({ checkbox, cardDetails, styleType }) => {
  const [checked, setChecked] = useState(false);
  return (
    <CardStyled>
      <Card>
        <Ellipse />
        {checkbox && (
          <CheckboxWrapper>
            <Checkbox
              size={11}
              checked={checked}
              onChange={event => setChecked(event.target.checked)}
            />
          </CheckboxWrapper>
        )}
        {cardDetails && (
          <div style={{ display: 'flex' }}>
            {(styleType === 'view1' || styleType === 'view2') && (
              <AvatarWrapper styleType={styleType}>
                <Avatar
                  size={
                    styleType === 'view1' ? 65 : styleType === 'view2' ? 44 : 30
                  }
                  type={cardDetails.avatar ? 'image' : 'text'}
                  content={cardDetails.avatar ? cardDetails.avatar : cardDetails.userName}
                  textColor='#f9e6e1'
                  textBackgroundColor='#ec6c4e'
                />
              </AvatarWrapper>
            )}
            <ContentWrapper styleType={styleType}>
              <StyledNameSection styleType={styleType}>
                {(styleType === 'view3' || styleType === 'view4') && (
                  <AvatarWrapper styleType={styleType}>
                    <Avatar
                      size={30}
                      type={cardDetails.avatar ? 'image' : 'text'}
                      content={cardDetails.avatar ? cardDetails.avatar : cardDetails.userName}
                      textColor='#f9e6e1'
                      textBackgroundColor='#ec6c4e'
                    />
                  </AvatarWrapper>
                )}
                <H2>{cardDetails.userName}</H2>
              </StyledNameSection>
              <P3 style={{ paddingBottom: styleType === 'view1' ? 4 : 0 }}>
                {cardDetails.userMail}
              </P3>
              <P3 style={{ paddingBottom: styleType === 'view1' ? 6 : 10 }}>
                {cardDetails.userNumber}
              </P3>
              <div
                style={{
                  display: 'flex',
                  paddingBottom: styleType === 'view1' ? 20 : 15
                }}
              >
                {cardDetails.userTexts &&
                  cardDetails.userTexts.length > 0 &&
                  cardDetails.userTexts.map((textDetails, Index: number) => (
                    <TextAvatarStyled key={Index}>
                      <Avatar
                        type='text'
                        content={textDetails.text}
                        textColor={textDetails.color}
                        textBackgroundColor={textDetails.textBackgroundColor}
                      />
                    </TextAvatarStyled>
                  ))}
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <StyledPermission>
                  <Label
                    label='All Permissions'
                    styleType='lined'
                    styles={{
                      height: '24px',
                      borderColor: '#a9b0b0',
                      color: '#A9B0B0',
                      textAlign: 'center'
                    }}
                  />
                </StyledPermission>
                <StyledAdmin>
                  <Label
                    label='Administrator'
                    styleType='filled'
                    styles={{
                      height: '24px',
                      backgroundColor: '#f9e6e1',
                      color: '#ec6c4e',
                      textAlign: 'center'
                    }}
                  />
                </StyledAdmin>
              </div>
            </ContentWrapper>
          </div>
        )}
      </Card>
    </CardStyled>
  );
};
export default KanbanViewCard;
