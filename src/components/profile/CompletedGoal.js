import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCompletedGoals } from '../dashboard/actions';
import { loadProfile } from './actions';
import './completedGoal.css';

class CompletedGoal extends PureComponent {

  componentDidMount() {
    const id = this.props.uid;
    this.props.getCompletedGoals(id);
    this.props.loadProfile(id);
  }

  render() {
    const { completedGoals, id, uid, userProfile } = this.props;
    const completedGoal = completedGoals.find(goal => goal.id === id);
    
    if(!completedGoal) return null;

    return (
      <div className="pgoal-detail">
        <img src={completedGoal.image}/>

        <h3>
          <Link to={`/profile/${uid}`}>{userProfile.name}</Link>
        </h3>
        <h2>{completedGoal.name}</h2>
        <div className="detail-flex">
          <h4>{completedGoal.date}</h4>
          <h4>|</h4>
          <h4>{completedGoal.location}</h4>
        </div>
        <p>{completedGoal.description}</p>
      </div>
    );
  }
}

export default connect((state, props) => ({
  completedGoals: state.completedGoals,
  userProfile: state.userProfile,
  uid: props.match.params.uid,
  id: props.match.params.id

}), 
{ getCompletedGoals, loadProfile }
)(CompletedGoal);