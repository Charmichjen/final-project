import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class SharedGoal extends PureComponent {

  render() {
    const { sharedGoals } = this.props;
    return (
      <h2>Youve Reach Shared goal {sharedGoals.key}</h2>
    );
  }


}

export default connect(state => ({
  sharedGoals: state.sharedGoals
}), 
null
)(SharedGoal);