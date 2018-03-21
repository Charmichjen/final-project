import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { deleteGoal, editGoal } from './actions';
import EditForm from '../editForm/EditForm';

class Goal extends PureComponent{
  state = {
    editing: false
  };

  toggleEdit = () => {
    this.setState(prev => ({
      editing: !prev.editing
    }));
  };
  handleEdit = goal => {
    goal.id = this.props.id;
    this.props.editGoal(goal);
    this.setState({ editing: false });
  };


  render(){
    const { id, name, deleteGoal } = this.props;
    const { editing } = this.state;
    return (
      <li >
        {name}
        
        <button onClick={this.toggleEdit}>Edit</button>
        <button onClick={() => deleteGoal(id)}>Delete</button>
        <button >Complete</button>
        {editing ? <EditForm id={id} text={name} onEdit={this.handleEdit} /> : null }
      </li>
    );
  }
}
export default connect(
  null,
  { deleteGoal, editGoal }
)(Goal);