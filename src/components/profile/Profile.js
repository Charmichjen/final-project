import React, { PureComponent } from 'react';
import { connect } from 'react-redux'; 
import { loadProfile } from './actions';
import CompletedGoals from './CompletedGoals';
import { getCompletedGoals, getUserGoals } from '../dashboard/actions';

class Profile extends PureComponent {

  componentDidMount() {
    const id = this.props.id;
    this.props.loadProfile(id);
    this.props.getCompletedGoals(id);
    this.props.getUserGoals(id);
  }

  render() {
    
    const { userProfile } = this.props;
    return (
      <div>
        <p>{userProfile.name}</p>
        <CompletedGoals/>
      </div>
    );
  }
}

export default connect (
  (state, props) => ({
    id: props.match.params.id,
    userProfile: state.userProfile
  }),
  { loadProfile, getCompletedGoals, getUserGoals }
)(Profile);