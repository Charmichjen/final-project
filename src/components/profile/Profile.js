import React, { PureComponent } from 'react';
import { connect } from 'react-redux'; 
import { loadProfile } from './actions';

class Profile extends PureComponent {

  componentDidMount() {
    const id = this.props.id;
    this.props.loadProfile(id);
  }

  render() {
    return (
      <p> Profile is here</p>
    );
  }
}

export default connect (
  (state, props) => ({
    id: props.match.params.id
  }),
  { loadProfile }
)(Profile);