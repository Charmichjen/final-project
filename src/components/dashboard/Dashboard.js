import React, { PureComponent } from 'react';
import { connect } from  'react-redux';
import { Link } from 'react-router-dom';
import { newGoal, getUserGoals, getCompletedGoals, editGoal, deleteCompletedGoal } from './actions';
import Goal from '../goal/Goal';
import './dashboard.css';


class Dashboard extends PureComponent {
  state = {
    goal: '',
    editing: false,
    newGoal: false
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

  handleToggle = () => {
    this.setState({
      newGoal: true
    });
  };

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
      goal: '',
      newGoal: false
    });
  };

  handleEdit = () => {
    this.setState({
      editing: true
    });
  };
  

  render() {
    const { goal, newGoal } = this.state;
    const { goals, completedGoals, deleteCompletedGoal, user } = this.props;
  
    return (
      <div className="user-dashboard">
        <section className="goals">
          <h3>Bucket List Goals</h3>
          <ul className="bucket-goals">
            {goals && goals.map((g, i) => 
              <Goal key={i}  id={g.key} name={g.name} goal={g}/>)}
          </ul>
          <button className="newbl" onClick={this.handleToggle}>New Goal</button>

          {newGoal && 
              <form className="addGoal" onSubmit={this.handleSubmit}>
                <input required onChange={this.handleChange} value={goal}/>
                <button id="ag-button" type="submit">Add Goal</button>
              </form>
          
          }

          <h3 className="completed-heading">Completed Goals</h3>
          <ul className="comp-goals">
            {completedGoals && completedGoals.map((g, i) => 
              <li key={i}>
                <Link to={`/completedgoal/${g.id}/${user.uid}`}>
                  {g.name}
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
