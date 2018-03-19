import React, { PureComponent } from 'react';
import { connect } from  'react-redux';

class Dashboard extends PureComponent {

  render() {

    return (
      <div>
        <header><h1>Hello dashboard</h1></header>
      </div>
    );
  }
}
export default connect (
  null,
  null
)(Dashboard);
