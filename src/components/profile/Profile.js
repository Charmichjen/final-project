import React, { PureComponent } from 'react';
import { connect } from 'react-redux'; 
import { loadProfile } from './actions';

class Profile extends PureComponent {

  componentWillMount() {
    const id = '6s8oJCUr59SxCuX8bVucAgtnV9H2';
    this.props.loadProfile(id);
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
  { loadProfile }
)(Profile);