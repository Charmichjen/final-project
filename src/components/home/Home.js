import React, { PureComponent } from 'react';
import { connect } from  'react-redux';


class Home extends PureComponent {

  render() {

    return (
      <div>
        <header><h1>Hello Bucket list</h1></header>
      </div>
    );
  }
}
export default connect (
  null,
  null
)(Home);
