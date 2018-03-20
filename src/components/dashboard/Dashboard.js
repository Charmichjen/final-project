import React, { PureComponent } from 'react';
import { connect } from  'react-redux';
import { newGoal, getUserGoals } from './actions';

class Dashboard extends PureComponent {

  state = {
    goal: ''
  };

  componentWillReceiveProps(nextProps) {
    // console.log('componentDidMount', this.props.user);
    if(nextProps.user !== this.props.user)
    
      this.props.getUserGoals(nextProps.user.uid);
  }

  handleChange = ({ target }) => {
    this.setState({
      goal: target.value
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

  render() {
    const { goal } = this.state;
    const { goals } = this.props;
    // console.log('this user is', this.props.user);
    return (
      <div>
        <header><h1>Hello dashboard</h1></header>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={goal}/>
          <button>Add Goal</button>
        </form>
        {goals && goals.map(goal => <li key={goal.key} id={goal.key}>{goal.name}</li>)}
      </div>
    );
  }
}
export default connect (
  state => ({ 
    user: state.user,
    goals: state.goals }),
  { newGoal, getUserGoals }
)(Dashboard);
