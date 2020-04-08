import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import orderBy from 'lodash/orderBy';

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from './TableDesign';
import Checkbox from '../Checkbox';
import Avatar from '../Avatar';
import { Flex } from '../Styled';
import { S1, P1, S2 } from '../Typography';
import Icon from '../Icon';
import { ISortItem, ITableColor } from '../../resources/interfaces';
import {
  testTableData
} from '../../fixtures/gql/StandardTablesPage/tableData1';
import Label from '../Label';
import { getRandomItem } from '../../utils/getRandomColor';

let textColor = '';
let backgroundCache = '';

const getRandomColor = (): ITableColor => {
  let randomItem = getRandomItem();
  if (randomItem.background === backgroundCache) {
    randomItem = getRandomItem();
  }
  backgroundCache = randomItem.background;
  textColor = randomItem.textColor;
  return randomItem;
};
interface IMoreTextProps {
  max: number;
  length: number;
}
const MoreText: React.FC<IMoreTextProps> = ({ max, length }) => {
  if (length <= max) {
    return null;
  }

  return (
    <S1 style={{ color: '#8B9293', display: 'inline-block' }}>
      +{Math.abs(max - length)}
    </S1>
  );
};

const BadeImage = styled.img`
  width: 16px;
  height: 16px;
  margin-left: -7px;
  margin-right: 5px;
  border-radius: 3px;
  object-fit: cover;
`;

const Team: React.FC<{
  teamView: 'avatar' | 'avatar-text' | 'label' | 'avatar-label';
  teams: any;
  index: number;
}> = ({ teamView, teams, index }) => {
  switch (teamView) {
    case 'avatar':
      return (
        <Avatar
          type='text'
          content={teams.name}
          style={{ marginRight: 8 }}
          textBackgroundColor={getRandomColor().background}
          textColor={textColor}
        />
      );
    case 'avatar-text':
      return (
        <Flex style={{ margin: 5, alignItems: 'center' }}>
          <Avatar
            style={{ marginRight: 8 }}
            type={teams.image ? 'image' : 'text'}
            content={teams.image || teams.name}
            textBackgroundColor={getRandomColor().background}
            textColor={textColor}
          />
          <P1>{teams.name}</P1>
        </Flex>
      );
    case 'label':
      return (
        <div style={{ marginRight: 5 }}>
          <Label
            label={teams.name}
            styleType='filled'
            styles={{
              backgroundColor: getRandomColor().background,
              color: textColor
            }}
          />
        </div>
      );
    case 'avatar-label':
      return (
        <Flex style={{ margin: 5, alignItems: 'center' }}>
          <Label
            label={teams.name}
            styleType='filled'
            styles={{
              backgroundColor: getRandomColor().background,
              color: textColor
            }}
          >
            {teams.image && <BadeImage src={teams.image} />}
          </Label>
        </Flex>
      );
    default:
      return null;
  }
};

const TableDesignComponent: React.FC = () => {
  const [selected, setSelected] = useState([]);

  const onSelect = (id: number) => {
    const list = selected.includes(id)
      ? selected.filter(item => item !== id)
      : [...selected, id];
    setSelected(list);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell container='head' />
          <TableCell container='head'>Name</TableCell>
          <TableCell container='head'>Email</TableCell>
          <TableCell container='head'>Phone</TableCell>
          <TableCell container='head'>Access</TableCell>
          <TableCell style={{ width: 100 }} container='head'>
            Team
          </TableCell>
          <TableCell container='head'>Permission Group</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {testTableData.map(item => (
          <TableRow key={item.id} isSelected={selected.includes(item.id)}>
            <TableCell>
              <Checkbox
                size={11}
                containerStyle={{ marginLeft: 10 }}
                checked={selected.includes(item.id)}
                onChange={() => onSelect(item.id)}
              />
            </TableCell>
            <TableCell>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  style={{ marginRight: 15 }}
                  type='image'
                  content={item.avatar}
                />
                {item.name}
              </div>
            </TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>{item.access}</TableCell>
            <TableCell>
              <Avatar
                textSize={18}
                type='text'
                textBackgroundColor={getRandomColor().background}
                textColor={textColor}
                content={item.teams[0].name}
              />
            </TableCell>
            <TableCell>{item.permission_group}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const TableDesignTeamAvatarComponent: React.FC<{
  teamView: 'avatar' | 'avatar-text' | 'label' | 'avatar-label';
}> = ({ teamView }) => {
  const [selected, setSelected] = useState([]);

  const onSelect = (id: number) => {
    const list = selected.includes(id)
      ? selected.filter(item => item !== id)
      : [...selected, id];
    setSelected(list);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell container='head' />
          <TableCell container='head'>Name</TableCell>
          <TableCell container='head'>Email</TableCell>
          <TableCell container='head'>Teams</TableCell>
          <TableCell container='head'>Permission groups</TableCell>
          <TableCell container='head'>Departments</TableCell>
          <TableCell container='head'>Admin</TableCell>
          <TableCell container='head'>Reports</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {testTableData.map(item => (
          <TableRow key={item.id} isSelected={selected.includes(item.id)}>
            <TableCell>
              <Checkbox
                size={11}
                containerStyle={{ marginLeft: 10 }}
                checked={selected.includes(item.id)}
                onChange={() => onSelect(item.id)}
              />
            </TableCell>
            <TableCell>
              <Flex style={{ alignItems: 'center' }}>
                <Avatar
                  style={{ marginRight: 15 }}
                  type='image'
                  content={item.avatar}
                />
                <P1>{item.name}</P1>
              </Flex>
            </TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>
              <Flex style={{ alignItems: 'center' }}>
                {item.teams.map(
                  (_teams, idx) =>
                    idx < 3 && (
                      <Team
                        key={_teams.name}
                        teams={_teams}
                        teamView={teamView}
                        index={idx}
                      />
                    )
                )}
                <MoreText length={item.teams.length} max={3} />
              </Flex>
            </TableCell>
            <TableCell>
              <P1>
                {item.permission_groups.map((_item: string, idx: number) =>
                  idx < 2 ? _item + ' ' : ''
                )}
                <MoreText length={item.permission_groups.length} max={2} />
              </P1>
            </TableCell>
            <TableCell>
              <Flex style={{ alignItems: 'center' }}>
                {item.departments.map(
                  (department: string, idx: number) =>
                    idx < 3 && (
                      <Avatar
                        key={idx + ''}
                        style={{ marginRight: 8 }}
                        type='text'
                        content={department}
                        textBackgroundColor={getRandomColor().background}
                        textColor={textColor}
                      />
                    )
                )}
                <MoreText length={item.departments.length} max={3} />
              </Flex>
            </TableCell>
            <TableCell textAlign='center'>
              {item.admin && <Icon name='admin' />}
            </TableCell>
            <TableCell textAlign='center'>
              {item.reports && <Icon name='report' />}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const TableDesignTimeComponent: React.FC<{
  timeView: 'absolute' | 'relative';
}> = ({ timeView }) => {
  const [selected, setSelected] = useState([]);

  const onSelect = (id: number) => {
    const list = selected.includes(id)
      ? selected.filter(item => item !== id)
      : [...selected, id];
    setSelected(list);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell container='head' />
          <TableCell container='head'>Name</TableCell>
          <TableCell container='head'>Phone number</TableCell>
          <TableCell container='head'>Links</TableCell>
          <TableCell container='head'>Alias</TableCell>
          <TableCell container='head'>Timezone</TableCell>
          <TableCell container='head'>Language</TableCell>
          <TableCell container='head'>Date created</TableCell>
          <TableCell container='head'>Last logged in</TableCell>
          <TableCell container='head' textAlign='right'>
            Tickets
          </TableCell>
          <TableCell container='head' textAlign='right'>
            ID
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {testTableData.map(item => (
          <TableRow key={item.id} isSelected={selected.includes(item.id)}>
            <TableCell>
              <Checkbox
                size={11}
                containerStyle={{ marginLeft: 10 }}
                checked={selected.includes(item.id)}
                onChange={() => onSelect(item.id)}
              />
            </TableCell>
            <TableCell>
              <Flex style={{ alignItems: 'center' }}>
                <Avatar
                  style={{ marginRight: 15 }}
                  type='image'
                  content={item.avatar}
                />
                <P1>{item.name}</P1>
              </Flex>
            </TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>
              <Flex>
                <Label
                  label={
                    <span style={{ marginLeft: 5 }}>{item.links.user}</span>
                  }
                  styleType='filled'
                  styles={{
                    backgroundColor: '#F7F7F7',
                    color: '#8B9293'
                  }}
                  iconColor='#8B9293'
                >
                  <Icon name='user.check' />
                </Label>
                <div style={{ marginLeft: 5 }}>
                  <Label
                    label={
                      <span style={{ marginLeft: 5 }}>{item.links.clock}</span>
                    }
                    styleType='filled'
                    styles={{
                      color: '#9384BD',
                      backgroundColor: '#EBE4F2',
                      borderColor: '#a9b0b0'
                    }}
                    icon='clock'
                    iconColor='#9384BD'
                  />
                </div>
              </Flex>
            </TableCell>
            <TableCell>
              <P1>{item.alias}</P1>
            </TableCell>
            <TableCell>
              <P1>{item.timezone}</P1>
            </TableCell>
            <TableCell>{item.language}</TableCell>
            <TableCell>
              <P1>{item.date_created}</P1>
            </TableCell>
            <TableCell>
              <P1>
                {timeView === 'absolute' ? item.last_logged_in : '15 min'}
              </P1>
            </TableCell>
            <TableCell textAlign='right'>{item.tickets}</TableCell>
            <TableCell
              style={{ verticalAlign: 'bottom', paddingBottom: 5 }}
              textAlign='right'
            >
              <S2 style={{ opacity: 0.3 }}>{item.id}</S2>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const TableSortingComponent: React.FC = () => {
  const [selected, setSelected] = useState([]);
  const [sort, setSort] = useState<ISortItem>(null);
  const [data, setData] = useState(testTableData);
  const SortItems = [
    {
      label: '',
      field: 'id',
      sort: null
    },
    {
      label: 'Name',
      field: 'name',
      sort: 'asc' as const
    },
    {
      label: 'Email',
      field: 'email',
      sort: 'asc' as const
    },
    {
      label: 'Phone',
      field: 'phone',
      sort: 'asc' as const
    },
    {
      label: 'Access',
      field: 'access',
      sort: 'asc' as const
    },
    {
      label: 'Team',
      field: 'team',
      sort: 'asc' as const
    },
    {
      label: 'Permission Groups',
      field: 'permission_group',
      sort: 'asc' as const
    }
  ];

  const onSelect = (id: number) => {
    const list = selected.includes(id)
      ? selected.filter(item => item !== id)
      : [...selected, id];
    setSelected(list);
  };
  const onSelectSort = (item: ISortItem) => {
    setSort(item);
    const dataSorted = orderBy(testTableData, [item.field], [item.sort]);
    setData(dataSorted);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          {SortItems.map(item => (
            <TableCell
              key={item.field}
              container='head'
              sortProps={{
                sortItem: item,
                sortSelected: sort,
                onSelectSort
              }}
            />
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) => (
          <TableRow key={item.id} isSelected={selected.includes(item.id)}>
            <TableCell>
              <Checkbox
                size={11}
                containerStyle={{ marginLeft: 10 }}
                checked={selected.includes(item.id)}
                onChange={() => onSelect(item.id)}
              />
            </TableCell>
            <TableCell>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  style={{ marginRight: 15 }}
                  type='image'
                  content={item.avatar}
                />
                {item.name}
              </div>
            </TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell>{item.phone}</TableCell>
            <TableCell>{item.access}</TableCell>
            <TableCell>
              <Avatar
                textSize={18}
                type='text'
                textBackgroundColor={getRandomColor().background}
                textColor={textColor}
                content={item.team}
              />
            </TableCell>
            <TableCell>{item.permission_group}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

storiesOf('Table Design', module)
  .add('with dummy data', () => {
    return <TableDesignComponent />;
  })
  .add('Default fields: teams as avatars', () => (
    <TableDesignTeamAvatarComponent teamView='avatar' />
  ))
  .add('Default fields: teams with names displayed', () => (
    <TableDesignTeamAvatarComponent teamView='avatar-text' />
  ))
  .add('Default fields: teams as labels', () => (
    <TableDesignTeamAvatarComponent teamView='label' />
  ))
  .add('Default fields: teams as labels with avatar', () => (
    <TableDesignTeamAvatarComponent teamView='avatar-label' />
  ))
  .add('Optional fields: absolute time', () => (
    <TableDesignTimeComponent timeView='absolute' />
  ))
  .add('Optional fields: relative time', () => (
    <TableDesignTimeComponent timeView='relative' />
  ))
  .add('Sorting', () => <TableSortingComponent />);
