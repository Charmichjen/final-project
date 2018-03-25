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
        <h3 className="profile-l">
          <Link to={`/profile/${uid}`}>Back to Profile</Link>
        </h3>
        <div className="cgoal">
          <img src={completedGoal.image}/>
          <section>
            <h2>{completedGoal.name}</h2>
            <div className="detail-flex">
              <h4>{completedGoal.date}</h4>
              <h4>|</h4>
              <h4>{completedGoal.location}</h4>
            </div>
            <p>{completedGoal.description}</p>
          </section>
        </div>

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