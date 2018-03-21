import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { date, image, location, description } from '../completeForm/CompleteForm';


class DetailGoal extends PureComponent {


  state = {
    date: '',
    image: '',
    // goalName: '',
    location: '',
    description: ''
  };

  render() {
    const { date } = this.props;
    return (

      <h2>{date}</h2>
      
    );
  }
}

export default connect (
  state => ({
    userProfile: state.userProfile.completedGoals
  }),
  null
)(DetailGoal);