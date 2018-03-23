import React, { PureComponent } from 'react';
import { connect } from  'react-redux';
import { Link } from 'react-router-dom';
import { newGoal, getUserGoals, getCompletedGoals, editGoal, deleteCompletedGoal } from './actions';
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
    const { goals, completedGoals, deleteCompletedGoal, user } = this.props;
  
    return (
      <div className="user-dashboard">
        {/* <h1>Hello dashboard</h1> */}
        <form className="addGoal" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={goal}/>
          <button>Add Goal</button>
        </form>

        <section className="goals">
          <h3>Bucket List Goals</h3>
          <ul>
            {goals && goals.map((g, i) => 
              <Goal key={i}  id={g.key} name={g.name} goal={g}/>)}
          </ul>
          <h3>Completed Goals</h3>
          <ul>
            {completedGoals && completedGoals.map((g, i) => 
              <li key={i}>
                <Link to={`/completedgoal/${g.id}/${user.uid}`}>
                  {g.date}&nbsp;{g.name}
                </Link>
                <button onClick={() => deleteCompletedGoal(g.id)}>Delete</button>
              </li>)}
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
  { newGoal, getUserGoals, editGoal, getCompletedGoals, deleteCompletedGoal }
)(Dashboard);
