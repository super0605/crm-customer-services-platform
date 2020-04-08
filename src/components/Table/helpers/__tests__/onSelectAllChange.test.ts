import { onSelectAllChange } from '../selectFn';

const setChecked = jest.fn();
describe('onSelectAllChange', () => {
  test('select all', () => {
    const subRows = [
      {
        id: 7,
        depth: 1,
        parent: { id: 6, title: 'title' },
        title: 'regulation',
        display_order: 2,
        effective_display_order: 4
      },
      {
        id: 8,
        depth: 1,
        parent: { id: 6, title: 'title' },
        title: 'regulation',
        display_order: 2,
        effective_display_order: 5
      }
    ];
    const data = [
      {
        id: 1,
        depth: 0,
        title: 'regulation',
        display_order: 0,
        effective_display_order: 0,
        __typename: 'TicketDepartment',
        subRows
      },
      {
        id: 2,
        depth: 0,
        title: 'regulation',
        display_order: 0,
        effective_display_order: 1,
        __typename: 'TicketDepartment',
        subRows
      }
    ];
    onSelectAllChange(true, setChecked, 0, 100, data);
    expect(setChecked).toHaveBeenCalledWith({'1': true, '2': true, '7': true, '8': true});
  });
  test('unselect all', () => {
    const subRows = [
      {
        id: 7,
        depth: 1,
        parent: { id: 6, title: 'title' },
        title: 'regulation',
        display_order: 2,
        effective_display_order: 4
      },
      {
        id: 8,
        depth: 1,
        parent: { id: 6, title: 'title' },
        title: 'regulation',
        display_order: 2,
        effective_display_order: 5
      }
    ];
    const data = [
      {
        id: 1,
        depth: 0,
        title: 'regulation',
        display_order: 0,
        effective_display_order: 0,
        __typename: 'TicketDepartment',
        subRows
      },
      {
        id: 2,
        depth: 0,
        title: 'regulation',
        display_order: 0,
        effective_display_order: 1,
        __typename: 'TicketDepartment',
        subRows
      }
    ];
    onSelectAllChange(false, setChecked, 0, 100, data);
    expect(setChecked).toHaveBeenCalledWith({});
  });
});
