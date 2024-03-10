import { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { add } from '../store';
import { RootState } from '../store';
import ToDo from '../component/ToDo';

function Home() {

  const dispatch = useDispatch();
  const toDos = useSelector((state: RootState) => state.toDos);

  const [text, setText] = useState<string>('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(add(text));
    setText('')
  }

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type='text' value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => <ToDo key={toDo.id} toDo={toDo} />)}
      </ul>
    </div>
  )
}

export default Home;