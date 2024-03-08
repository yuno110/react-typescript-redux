// import { createStore } from 'redux';


// const form = document.querySelector('form') as HTMLFormElement;
// const input = document.querySelector('input') as HTMLInputElement;
// const ul = document.querySelector('ul') as HTMLUListElement;


// const addTodo = (toDo: string) => {
//   store.dispatch({
//     type: 'ADD',
//     text: toDo,
//     id: Date.now().toString()
//   })
// }

// const deleteToDo = (e: MouseEvent) => {
//   if (e.target instanceof HTMLElement) {
//     const parentNode = e.target.parentNode;

//     if (parentNode instanceof HTMLElement) {
//       const id = parentNode.id;
//       store.dispatch({ 
//         type: 'DEL',
//         text: '', 
//         id: id 
//       })
//     }
//   }
// }

// const onSubmit = (e: SubmitEvent) => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = '';
//   addTodo(toDo);
// }

// const paintTodos = () => {
//   const toDos = store.getState();
//   ul.innerHTML = '';
//   toDos.forEach((toDo) => {
//     const li = document.createElement('li');
//     li.id = toDo.id;
//     li.innerText = toDo.text;

//     const delBtn = document.createElement('button');
//     delBtn.innerText = 'DEL';
//     delBtn.addEventListener('click', deleteToDo);

//     li.appendChild(delBtn);
//     ul.appendChild(li);
//   })
// }

// interface IState {
//   text: string
//   id: string
// }

// interface IAction {
//   type: string
//   text: string
//   id: string
// }

// const reducer = (state: IState[] = [], action: IAction): IState[] => {

//   switch (action.type) {

//     case 'ADD':
//       return [...state, { text: action.text, id: action.id }]

//     case 'DEL':
//       return state.filter(toDo=> toDo.id !== action.id);

//     default:
//       return state
//   }

// }

// const store = createStore(reducer);

// store.subscribe(paintTodos);

// form.addEventListener('submit', onSubmit);



// // 특정 이벤트가 dispatch를 실행시킨다
// // dispatcher는 reducer에게 action을 전달한다.
// // reducer는 전달받은action으로 state의 변경작업을 수행한다.
// // subscribe는 state의 변경이 일어날때마다 특정작업을 수행한다.

export { }