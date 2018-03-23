import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './sharedGoal.css';
import { getSharedGoals } from '../explore/actions';

class SharedGoal extends PureComponent {

  componentDidMount() {
    this.props.getSharedGoals();
  }
  
  render() {
    const { sharedGoals, id } = this.props;
    const sharedGoal = sharedGoals.find(goal => goal.id === id);

    if(!sharedGoal) return null;

    return (
      <div className="sgoal-detail">
        <img src={sharedGoal.image}/>
        {/* <div className="detail-flex"> */}
          <h3>
            <Link to={`/profile/${sharedGoal.uid}`}>{sharedGoal.user}</Link>
          </h3>
          <h2>{sharedGoal.name}</h2>
        {/* </div> */}
        <div className="detail-flex">
          <h4>{sharedGoal.date}</h4>
          <h4>|</h4>
          <h4>{sharedGoal.location}</h4>
        </div>
        <p>{sharedGoal.description}</p>

        
      </div>
    );
  }
}

export default connect((state, props) => ({
  sharedGoals: state.sharedGoals,
  id: props.match.params.id
}), 
{ getSharedGoals }
)(SharedGoal);