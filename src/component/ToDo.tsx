import { Dispatch } from "redux";
import IToDo from "../interface/IToDo";
import { connect } from "react-redux";

interface TodoProps {
  toDo: IToDo
  deleteToDo: () => void
}

function ToDo({ toDo, deleteToDo }: TodoProps) {

  return (
    <li>
      {toDo.text}<button onClick={deleteToDo}>DEL</button>
    </li>
  )
}

function mapDispatchToProps(dispatch: Dispatch, ownProps: {toDo: IToDo}) {
  
  return {
    deleteToDo: () => dispatch({
      type: 'DEL',
      id: ownProps.toDo.id
    })
  }
}

export default connect(null, mapDispatchToProps)(ToDo);