import React, { PureComponent } from 'react';
import { connect } from  'react-redux';
import { Link } from 'react-router-dom';
import { newGoal, getUserGoals, getCompletedGoals, editGoal } from './actions';
import Goal from '../goal/Goal';
import './dashboard.css';



class Dashboard extends PureComponent {
  state = {
    goal: '',
    editing: false
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.user !== this.props.user){
      this.props.getUserGoals(nextProps.user.uid);
      this.props.getCompletedGoals(nextProps.user.uid);
    }
  }
  componentWillMount(){
    if(this.props.user){
      const { uid } = this.props.user;
      this.props.getUserGoals(uid);
      this.props.getCompletedGoals(uid);
      
    }
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
    const { goal } = this.state;
    const { goals, completedGoals } = this.props;
  
    return (
      <div className="user-dashboard">
        {/* <h1>Hello dashboard</h1> */}
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={goal}/>
          <button>Add Goal</button>
        </form>
        <section className="goals">
          <ul>Goals to do
            {goals && goals.map((g, i) => 
              <Goal key={i}  id={g.key} name={g.name} goal={g}/>)}
          </ul>
          <ul>Completed Goals
            {completedGoals && completedGoals.map((g, i) => 
              <li key={i}><Link to={`/goal/${g.id}`}>{g.date}&nbsp;{g.name}</Link></li>)}
          </ul>
        </section>
      </div>
    );
  }
}

export default connect (
  state => ({ 
    user: state.user,
    completedGoals: state.completedGoals,
    goals: state.goals }),
  { newGoal, getUserGoals, editGoal, getCompletedGoals }
)(Dashboard);
