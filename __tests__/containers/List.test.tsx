import 'react-native';
import React from 'react';
import configureStore from 'redux-mock-store';
import {act, fireEvent, render} from '@testing-library/react-native';
import {List} from 'containers/List';
import {Provider} from 'react-redux';
import {addList} from 'store/List/ListSlice';
import {store as ReduxStore} from 'store';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe('Todo Lists Screen', () => {
  const mockStore = configureStore([]);
  let props: any;

  it('should List render', () => {
    const initialState = {
      lists: {
        lists: [],
      },
    };
    const store = mockStore(initialState);
    props = createTestProps({});
    const wrapper = render(
      <Provider store={store}>
        <List {...props} />
      </Provider>,
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should List to have 3 todo lists', () => {
    const title = 'My list';
    const initialState = {
      lists: {
        lists: [
          {id: '1', title: title, todoList: []},
          {id: '2', title: title, todoList: []},
          {id: '3', title: title, todoList: []},
        ],
      },
    };
    const store = mockStore(initialState);
    props = createTestProps({});
    const {queryAllByText} = render(
      <Provider store={store}>
        <List {...props} />
      </Provider>,
    );
    expect(queryAllByText(title).length).toEqual(3);
  });

  it('should navigate to todo screen on press the list', () => {
    const initialState = {
      lists: {
        lists: [{id: '1', title: 'my list', todoList: []}],
      },
    };
    const store = mockStore(initialState);
    props = createTestProps({});
    const {getByText} = render(
      <Provider store={store}>
        <List {...props} />
      </Provider>,
    );
    const ele = getByText('my list').parent || getByText('my list');
    fireEvent.press(ele);
    expect(props.navigation.navigate).toHaveBeenCalled();
  });

  it('should addList action fire after press the add btn', () => {
    const initialState = {
      lists: {
        lists: [],
      },
    };
    const store = mockStore(initialState);
    props = createTestProps({});
    const {getByTestId} = render(
      <Provider store={store}>
        <List {...props} />
      </Provider>,
    );
    fireEvent.changeText(getByTestId('text-input'), 'my list');
    fireEvent.press(getByTestId('add-list-btn'));
    const actions = store.getActions();
    const expectedAction = {type: 'list/addList', payload: 'my list'};
    expect(actions).toContainEqual(expectedAction);
  });

  it('should list add to todo lists after dispatch addList action', () => {
    props = createTestProps({});
    const {queryAllByText} = render(
      <Provider store={ReduxStore}>
        <List {...props} />
      </Provider>,
    );
    const payload = 'my list';
    act(() => {
      ReduxStore.dispatch(addList(payload));
      console.log(ReduxStore.getState().lists.lists);
    });
    expect(queryAllByText(payload).length).toEqual(1);
  });
});
