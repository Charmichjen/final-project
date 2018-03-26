import React, { PureComponent } from 'react';
import { connect } from 'react-redux'; 
import { getSharedGoals } from './actions';
// import { Link } from 'react-router-dom';
import SharedGallery from '../sharedGallery/SharedGallery';

// Does this component even need to exist?
// It doesn't really do anything other than load shared goals,
// which SharedGallery is already doing!
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