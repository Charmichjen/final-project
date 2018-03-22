import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { deleteGoal, editGoal } from './actions';
import EditForm from '../editForm/EditForm';
import CompleteForm from '../completeForm/CompleteForm';
import './goal.css';

class Goal extends PureComponent{
  state = {
    editing: false,
    complete: false
  };

  toggleEdit = () => {
    this.setState(prev => ({
      editing: !prev.editing
    }));
  };

  toggleComplete = () => {
    this.setState(prev => ({
      complete: !prev.complete
    }));
  };


  handleEdit = goal => {
    goal.id = this.props.id;
    this.props.editGoal(goal);
    this.setState({ editing: false });
  };


  render(){
    const { id, name, deleteGoal } = this.props;
    const { editing, complete } = this.state;
    return (
      <li className="goal-todo" >
        <h4>{name}</h4>
        <div className="goal-buttons">
          <button onClick={this.toggleEdit}>Edit</button>
          <button onClick={() => deleteGoal(id)}>Delete</button>
          <button onClick={this.toggleComplete}>Complete</button>
        </div>
        {editing ? <EditForm id={id} text={name} onEdit={this.handleEdit} /> : null }
        {complete ? <CompleteForm id={id} name={name} delete={deleteGoal} toggle={this.toggleComplete}/> : null}
      </li>
    );
  }
}
export default connect(
  null,
  { deleteGoal, editGoal }
)(Goal);