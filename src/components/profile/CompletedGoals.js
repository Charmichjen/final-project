import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CompletedGoals extends PureComponent {

  render() {
    const { completedGoals, goals } = this.props;
    return (
      <div>
        <ul>Completed Goals
          {completedGoals.map((goal, i) => {
            return <li key={i}>
              <Link to={`/completedgoal/${goal.id}`}>{goal.name}</Link>
            </li>;
          })}
        </ul>
        <ul>TODO Goals
          {goals.map((goal, i) => {
            return <li key={i}>{goal.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  completedGoals: state.completedGoals,
  goals: state.goals
}), 
null
)(CompletedGoals);

