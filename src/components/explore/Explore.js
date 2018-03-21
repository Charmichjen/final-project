import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Explore extends PureComponent {

  render() {
    return (
      <p> Explore is here</p>
    );
  }
}

export default connect (
  null,
  null,
)(Explore);