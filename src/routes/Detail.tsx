import { connect } from "react-redux";
import IToDo from "../interface/IToDo";


function Detail() {

  return (
    <div>
      <h2>Detail</h2>
    </div>
  )
}

function mapStateToProps(state: IToDo, ownProps: any){
  
  return {
    toDo: state
  }
}
export default connect(mapStateToProps, null)(Detail);