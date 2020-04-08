import * as React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import Icon from '../Icon';
import { StringRow } from './components/StringRow';
import { FieldArray, ArrayHelpers } from 'formik';
import Input from '../Input';
// import Tooltip from '../Tooltip';

const StringListContainer = styled.div`
  position: relative;
  width: 300px;
  & > div.title-container {
    font-family: Rubik;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    min-height: 21px;
    display: flex;
    align-items: center;
    color: ${props => props.theme.staticColour};
    border-bottom: ${props => `1px solid ${props.theme.greyLighter}`};
    padding-bottom: 8px;
    margin-bottom: 8px;
  }
  & > div.title-container span.string-list-count {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    display: flex;
    justify-content: flex-end;
    color: ${props => props.theme.static2Colour};
  }
  & .string-row {
    display: flex;
    align-items: center;
    position: relative;
    border-radius: 6px;
    height: 32px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${props => props.theme.staticColour};
    padding: 0 8px;
    & .content-text {
      width: 100%;
    }
    & .content-icon {
      width: 24px;
    }
  }
  & .string-row:hover {
    background: ${props => `${props.theme.textHover}99`};
  }
  & .string-row.capped:hover {
    background: ${props => props.theme.white};
    border: ${props => `1px solid ${props.theme.pageHeader}`};
    box-sizing: border-box;
    box-shadow: 0px 3px 8px ${props => props.theme.brandPrimary + '66'};
    border-radius: 6px;
    font-weight: 500;
    color: ${props => props.theme.brandPrimary};
  }
  & .string-row svg {
    display: none;
  }
  & .string-row:hover svg {
    display: flex;
    margin: auto;
    cursor: pointer;
    padding: 4px;
    background: ${props => props.theme.white};
    border: ${props => `1px solid ${props.theme.greyLight}`};
    border-radius: 3px;
    &:hover {
      border: ${props => `1px solid ${props.theme.activeColour}`};
      background: ${props => props.theme.hoverColour};
      path {
        fill: ${props => props.theme.activeColour};
      }
    }
  }
  & .add-button {
    justify-content: center;
    .text {
      font-family: Rubik;
      font-style: Regular;
      font-size: 13px;
      line-height: 150%;
      margin-left: 8px;
    }
    svg {
      width: 11px;
      height: 11px;
      padding-right: 0;
    }
  }
  & .add-button > button[disabled] {
    opacity: 0.5;
  }
`;

interface IProps {
  addTitle: string;
  id?: string;
  name?: string;
  max?: number;
  title?: string;
  values: string[];
  className?: string;
}

const handleAddItem = (
  arrayHelpers: ArrayHelpers,
  newValue: string,
  setEditIndex: (index: number) => void,
  setValue: (value: string) => void,
  setInAdd: (value: boolean) => void,
  index?: number
) => {
  if (newValue) {
    if (index === undefined) {
      arrayHelpers.push(newValue);
    } else {
      arrayHelpers.replace(index, newValue);
    }
  }
  setEditIndex(-1);
  setValue('');
  setInAdd(false);
};

const StringListBuilder: React.FC<IProps> = ({
  addTitle,
  id,
  max,
  name,
  title,
  values,
  ...props
}) => {
  // Flag that mentioned that new item was added but not saved yet
  const [inAdd, setInAdd] = React.useState(false);
  const [editIndex, setEditIndex] = React.useState(-1);
  const [newItemValue, setNewItemValue] = React.useState('');

  const onAddClick = React.useCallback(() => {
    setInAdd(true);
    setNewItemValue('');
  }, []);
  const onChangeNewItem = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewItemValue(e.target.value);
    },
    []
  );

  return (
    <StringListContainer className={props.className}>
      <div className='title-container'>
        {title || ' '}
        <span className='string-list-count'>
          {values.length}
          {!!values.length && !!max && ` of ${max}`}
        </span>
      </div>
      <FieldArray
        name={name || id || ''}
        render={arrayHelpers => (
          <div>
            <div style={{ marginBottom: 8 }}>
              {values.map((value, index) =>
                index === editIndex ? (
                  <Input
                    autoFocus={true}
                    value={newItemValue || value}
                    key={index}
                    onChange={onChangeNewItem}
                    onBlur={() =>
                      handleAddItem(
                        arrayHelpers,
                        newItemValue.trim(),
                        setEditIndex,
                        setNewItemValue,
                        setInAdd,
                        editIndex
                      )
                    }
                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      if (e.key === 'Enter') {
                        handleAddItem(
                          arrayHelpers,
                          newItemValue.trim(),
                          setEditIndex,
                          setNewItemValue,
                          setInAdd,
                          editIndex
                        );
                      }
                    }}
                    inputType='secondary'
                  />
                ) : (
                    <StringRow
                      className={max ? 'capped' : ''}
                      index={index}
                      key={index}
                      onEdit={() => setEditIndex(index)}
                      onRemove={() => arrayHelpers.remove(index)}
                      value={value}
                    />
                  )
              )}
              {inAdd && (
                <Input
                  autoFocus={true}
                  value={newItemValue}
                  onBlur={() => {
                    handleAddItem(
                      arrayHelpers,
                      newItemValue.trim(),
                      setEditIndex,
                      setNewItemValue,
                      setInAdd
                    );
                  }}
                  onChange={onChangeNewItem}
                  onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === 'Enter') {
                      handleAddItem(
                        arrayHelpers,
                        newItemValue.trim(),
                        setEditIndex,
                        setNewItemValue,
                        setInAdd
                      );
                    }
                  }}
                  inputType='secondary'
                />
              )}
            </div>
            <Button
              disabled={!!inAdd || (!!max && max === values.length)}
              className='add-button'
              onClick={onAddClick}
              buttonType='button'
              styleType='secondary'
            >
              <Icon name='plus' />
              {addTitle && <span className='text'>{addTitle}</span>}
            </Button>
          </div>
        )}
      />
    </StringListContainer>
  );
};

export default StringListBuilder;
