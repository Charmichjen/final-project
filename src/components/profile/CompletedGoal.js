import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CompletedGoal extends PureComponent {

  render() {
    const { completedGoals, id } = this.props;
    const completedGoal = completedGoals.find(goal => goal.id === id);
    return (
      <div>
        <h2>Youve Reach user Completed goal {completedGoal.name}</h2>
        <h3>
          <Link to={`/profile/${completedGoal.uid}`}>{completedGoal.user}</Link>
        </h3>
      </div>
    );
  }
}

export default connect((state, props) => ({
  completedGoals: state.completedGoals,
  id: props.match.params.id
}), 
null
)(CompletedGoal);