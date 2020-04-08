import { SizeTypes } from '../types';
import { CSSProperties, ReactNode } from 'react';

export interface IUser {
  locale: string;
}

export interface IInitialData {
  user: IUser;
  sidebar: ISidebarSection[];
  translations: any;
}

export interface IPageData {
  __typename: string;
  title: string;
  description?: string;
  illustration?: string; // TBD whether this is a local link
  headerLinks: [{
    title: string,
    path: string,
  }];
  newLink?: string;
  views?: IViewData[];
}

export interface IViewData {
  title: string;
  dataQuery: string;
  tableDef: {
    columns: ITableColumn[],
  };
}

export interface ITableColumn {
  title: string;
  field: any; // TODO types
  defaultShow?: boolean;
  sortField?: string;
  sortType?: string;
}


export interface ISidebarSection {
  sectionName: string;
  icon: string;
  navItems?: ISidebarItem[];
}

export interface ISidebarItem {
  itemName: string;
  path?: string;
  paths?: string[];
  pageType?: string;
  metadataQuery?: string;
  navItems?: ISidebarItem[];
  drawerItems?: ISidebarItem[];
}

export interface ITableSetup {
  columns: ITableColumn[];
}

export interface ISortItem {
  label: string;
  field: string;
  sort: 'asc' | 'desc';
}

export interface IMenuProps {
  iconName?: string;
  containerStyle?: CSSProperties;
  label?: string;
  name?: string;
  menuItems?: IMenuItemProps[];
  initialList?: IMenuItemProps[];
  value?: IMenuItemProps;
  onSelect?: (value: IMenuItemProps) => void;
  order?: (value: IMenuItemProps[]) => void;
  setChecked?: (value: any) => void;
  checked?: { [key: string]: any };
  initialChecked?: { [key: string]: any };
  item?: IMenuItemProps;
  selected?: boolean;
  size?: SizeTypes;
  subMenuDirection?: string;
  children?: ReactNode;
  isDisabled?: boolean;
}

export interface IMenuItemProps {
  key?: number;
  name?: string;
  column?: string;
  subItems?: IMenuItemProps[];
  icon?: string;
  sortable?: boolean;
  sort?: 'asc' | 'desc';
}

export interface ITableColor {
  background: string;
  textColor: string;
}

export interface ITabsProps {
  label?: string;
  messageId?: string;
}


export interface IButtonItemProps {
  label?: string | number;
  link: string;
}