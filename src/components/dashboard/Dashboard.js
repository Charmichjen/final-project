import React, { PureComponent } from 'react';
import { connect } from  'react-redux';
import { newGoal, getUserGoals, getCompletedGoals, editGoal } from './actions';
import EditForm from '../editForm/EditForm';
import Goal from '../goal/Goal';



class Dashboard extends PureComponent {
  state = {
    goal: '',
    editing: false
  };
  // componentDidMount(){
  //   const id = this.props.user.uid;
  //   this.props.loadProfile(id);
  // }

  componentWillReceiveProps(nextProps) {
    if(nextProps.user !== this.props.user){
      this.props.getUserGoals(nextProps.user.uid);
      this.props.getCompletedGoals(nextProps.user.uid);
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
    console.log(completedGoals);
    return (
      <div>
        <h1>Hello dashboard</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={goal}/>
          <button>Add Goal</button>
        </form>
        <ul>Goals to do
          {goals && goals.map((g, i) => 
            <Goal key={i}  id={g.key} name={g.name} goal={g}/>)}
        </ul>
        <ul>Completed Goals
          {/* {completedGoal} */}
        </ul>
      </div>
    );
  }
}

export default connect (
  state => ({ 
    user: state.user,
    profile: state.userProfile,
    goals: state.goals }),
  { newGoal, getUserGoals, editGoal, getCompletedGoals }
)(Dashboard);
