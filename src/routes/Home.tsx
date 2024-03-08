import { ChangeEvent, FormEvent, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import IToDo from "../interface/IToDo";
import ToDo from "../component/ToDo";

interface HomeProps {
  toDos: IToDo[];
  addToDo: (text: string) => void;
}

function Home({ toDos, addToDo }: HomeProps) {

  const [text, setText] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addToDo(text);
    setText('');
  }

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => <ToDo key={toDo.id} toDo={toDo} />)}
      </ul>
    </div>
  )
}

function mapToStateProps(state: IToDo[]) {
  return { toDos: state }
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addToDo: (text: string) => dispatch({
      type: 'ADD',
      text: text,
      id: Date.now().toString()
    })
  };
}

export default connect(mapToStateProps, mapDispatchToProps)(Home);