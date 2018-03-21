import React, { PureComponent } from 'react';
import { connect } from  'react-redux';
import { newGoal, getUserGoals, editGoal } from './actions';
import EditForm from '../editForm/EditForm';
import CompleteForm from '../completeForm/CompleteForm';

class Dashboard extends PureComponent {

  state = {
    goal: '',
    editing: false
  };

  componentWillReceiveProps(nextProps) {
    // console.log('componentDidMount', this.props.user);
    if(nextProps.user !== this.props.user)
    
      this.props.getUserGoals(nextProps.user.uid);
  }

  handleChange = ({ target }) => {
    this.setState({
      goal: target.value,
      completed: false
    });
  };
   
  handleSubmit = event => {
    event.preventDefault();

    const { goal } = this.state;
    this.props.newGoal(goal);
    this.props.getUserGoals(this.props.user.uid);
    this.setState({
      goal: ''
    });
  };

  handleEdit = () => {
    this.setState({
      editing: true
    });
  };

  

  render() {
    const { goal, editing } = this.state;
    const { goals } = this.props;
    // console.log('this user is', this.props.user);
    return (
      <div>
        <header><h1>Hello dashboard</h1></header>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={goal}/>
          <button>Add Goal</button>
        </form>
        {goals && goals.map((goal, i) => 
          <li key={i} id={goal.key}>{goal.name} 
            <button onClick={this.handleEdit}>Edit</button>
            <button onClick={this.handleDelete}>Delete</button>
            <button >Complete</button>
            {editing ? <EditForm onEdit={editGoal}/> : null }
          </li>)}
        <CompleteForm/>
      </div>
    );
  }
}
export default connect (
  state => ({ 
    user: state.user,
    goals: state.goals }),
  { newGoal, getUserGoals, editGoal }
)(Dashboard);
