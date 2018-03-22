import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SharedGoal extends PureComponent {

  render() {
    const { sharedGoals, id } = this.props;
    const sharedGoal = sharedGoals.find(goal => goal.id === id);
    return (
      <div>
        <h2>Youve Reach Shared goal {sharedGoal.name}</h2>
        <h3>
          <Link to={`/profile/${sharedGoal.uid}`}>{sharedGoal.user}</Link>
        </h3>
      </div>
    );
  }
}

export default connect((state, props) => ({
  sharedGoals: state.sharedGoals,
  id: props.match.params.id
}), 
null
)(SharedGoal);