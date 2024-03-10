import IToDo from "../interface/IToDo";
import {remove} from '../store';
import {useDispatch} from "react-redux";

function ToDo({toDo}: {toDo: IToDo}) {

  const dispatch = useDispatch();

  const onRemove = () => {
    dispatch(remove(toDo.id));
  }

  return (
    <li>
      {toDo.text}<button onClick={onRemove}>DEL</button>
    </li>
  )
}

export default ToDo;