import {createStore} from 'redux';
import IToDo from './interface/IToDo';
import IAction from './interface/IAction';


const reducer = (state: IToDo[] = [], action: IAction): IToDo[] => {
  switch (action.type) {
    case 'ADD':
      return [...state, { text: action.text, id: action.id }]

    case 'DEL':
      return state.filter(toDo=> toDo.id !== action.id);

    default:
      return state
  }
}

const store = createStore(reducer);

export default store;