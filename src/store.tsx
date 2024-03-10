import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';
import IToDo from './interface/IToDo';


const initialState: IToDo[] = [] // [{text: '', id: ''}] // 이렇게 하면 초기화면에 빈ToDo가 하나 생성된다.

const toDoSlice = createSlice({
  name: 'toDo',
  initialState: initialState,
  reducers: {
    add: (state: IToDo[], action: PayloadAction<string>)=>{
      state.push({text: action.payload, id: Date.now().toString()})
    },
    remove: (state: IToDo[], action: PayloadAction<string>)=>{
      const idx = state.findIndex(toDo=> toDo.id === action.payload);
      if(idx !== -1){
        state.splice(idx, 1);
      }
    }
  }
});

const store = configureStore({
  reducer: {
    toDos: toDoSlice.reducer // state
  }
});

export const {add, remove} = toDoSlice.actions; // reducers

export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch;

export default store;