import React, { PureComponent } from 'react';
import { connect } from 'react-redux'; 
import { getSharedGoals } from './actions';

class Explore extends PureComponent {

  componentWillMount() {
    this.props.getSharedGoals();
  }

  render() {
    return (
      <p> Explore is here</p>
    );
  }
}

export default connect (
  state => ({
    sharedGoals: state.sharedGoals
  }),
  { getSharedGoals }
)(Explore);