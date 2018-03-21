import React, { PureComponent } from 'react';
import { connect } from 'react-redux'; 
import { getSharedGoals } from './actions';

class Explore extends PureComponent {

  componentWillMount() {
    this.props.getSharedGoals();
  }

  // componentWillReceiveProps(nextProps) {
  //   // console.log('componentDidMount', this.props.user);
  //   if(nextProps.sharedGoal !== this.props.user)
    
  //     this.props.getUserGoals(nextProps.user.uid);
  // }

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
  {  getSharedGoals }
)(Explore);