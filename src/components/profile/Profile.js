import React, { PureComponent } from 'react';
import { connect } from 'react-redux'; 
import { loadProfile } from './actions';
import CompletedGoals from './CompletedGoals';
import { getCompletedGoals, getUserGoals } from '../dashboard/actions';
import './profile.css';
class Profile extends PureComponent {

  componentDidMount() {
    const id = this.props.id;
    this.props.loadProfile(id);
    this.props.getCompletedGoals(id);
    this.props.getUserGoals(id);
  }

  render() {
    
    const { userProfile, id } = this.props;
    return (
      <div className="user-profile">
        <p>{userProfile.name}'s Profile</p>
        <CompletedGoals uid={id}/>
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