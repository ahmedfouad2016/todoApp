import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface todoType {
  id: string;
  description: string;
  completed: boolean;
}

export interface listType {
  id: string;
  title: string;
  todoList: todoType[];
}

interface listState {
  lists: listType[];
}

const initialState: listState = {
  lists: [],
};

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addList(state, action: PayloadAction<string>) {
      state.lists.push({
        id: new Date().getTime().toString(),
        title: action.payload,
        todoList: [],
      });
    },
    editList(state, action: PayloadAction<listType>) {
      const index = state.lists.findIndex(val => val.id === action.payload.id);
      state.lists[index] = {
        ...state.lists[index],
        title: action.payload.title,
      };
    },
    removeList(state, action: PayloadAction<listType>) {
      const index = state.lists.findIndex(val => val.id === action.payload.id);
      state.lists.splice(index, 1);
    },
    addTodo(state, action: PayloadAction<{todo: todoType; list: listType}>) {
      const index = state.lists.findIndex(
        val => val.id === action.payload.list.id,
      );
      state.lists[index].todoList.push({
        ...action.payload.todo,
        id: new Date().getTime().toString(),
      });
    },
    updateTodo(state, action: PayloadAction<{todo: todoType; list: listType}>) {
      const listIndex = state.lists.findIndex(
        val => val.id === action.payload.list.id,
      );
      const todoIndex = state.lists[listIndex].todoList.findIndex(
        val => val.id === action.payload.todo.id,
      );
      state.lists[listIndex].todoList[todoIndex] = {
        ...action.payload.todo,
      };
    },
    deleteTodo(state, action: PayloadAction<{todo: todoType; list: listType}>) {
      const listIndex = state.lists.findIndex(
        val => val.id === action.payload.list.id,
      );
      const todoIndex = state.lists[listIndex].todoList.findIndex(
        val => val.id === action.payload.todo.id,
      );
      state.lists[listIndex].todoList.splice(todoIndex, 1);
    },
  },
});

export const {addList, editList, deleteTodo, removeList, addTodo, updateTodo} =
  listSlice.actions;
export default listSlice.reducer;
