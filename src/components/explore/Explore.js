import React, { PureComponent } from 'react';
import { connect } from 'react-redux'; 
import { getSharedGoals } from './actions';
// import { Link } from 'react-router-dom';
import SharedGallery from '../sharedGallery/SharedGallery';

class Explore extends PureComponent {

  componentWillMount() {
    this.props.getSharedGoals();
  }

  render() {
    // const { sharedGoals } = this.props;
    return (
      <SharedGallery/>
    );
  }
}

export default connect (
//   state => ({
//   sharedGoals: state.sharedGoals
// })
  null,
{ getSharedGoals }
)(Explore);