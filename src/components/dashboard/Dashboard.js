import React, { PureComponent } from 'react';
import { connect } from  'react-redux';
import { newGoal, getUserGoals, editGoal } from './actions';
import EditForm from '../editForm/EditForm';
import Goal from '../goal/Goal';
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
        <h1>Hello dashboard</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={goal}/>
          <button>Add Goal</button>
        </form>
        <ul>
          {goals && goals.map((g, i) => 
            <Goal key={i} id={g.key} name={g.name}/>)}
        </ul>
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
