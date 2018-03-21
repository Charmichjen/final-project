import React, { PureComponent } from 'react';
import { connect } from 'react-redux'; 
// import { getSharedGoals } from './actions';

class Profile extends PureComponent {

  componentWillMount() {
    // this.props.getSharedGoals();
  }

  render() {
    return (
      <p> Profile is here</p>
    );
  }
}

export default connect (
  // state => ({
  //   sharedGoals: state.sharedGoals
  // }),
  null,
  null
  // { getSharedGoals }
)(Profile);