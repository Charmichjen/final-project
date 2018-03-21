import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { deleteGoal } from './actions';

class Goal extends PureComponent{
 
  render(){
    const { name, id, deleteGoal } = this.props;
    return (
      <li >
        {name}
        
        <button onClick={this.handleEdit}>Edit</button>
        <button onClick={() => deleteGoal(id)}>Delete</button>
        <button >Complete</button>
        {/* {editing ? <EditForm onEdit={editGoal}/> : null } */}
      </li>
    );
  }
}
export default connect(
  null,
  { deleteGoal }
)(Goal);