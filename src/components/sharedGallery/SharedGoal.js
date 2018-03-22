import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class SharedGoal extends PureComponent {

  render() {
    const { sharedGoals, id } = this.props;
    const sharedGoal = sharedGoals.find(goal => goal.id === id);
    return (
      <h2>Youve Reach Shared goal {sharedGoal.name}</h2>
    );
  }
}

export default connect((state, props) => ({
  sharedGoals: state.sharedGoals,
  id: props.match.params.id
}), 
null
)(SharedGoal);