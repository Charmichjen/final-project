import React, { PureComponent } from 'react';
import { connect } from  'react-redux';
import Auth from '../auth/Auth';

class Home extends PureComponent {

  render() {

    return (
      <div>
        <header><h1>Hello Bucket list</h1></header>
        <Auth history={this.props.history}/>
      </div>
    );
  }
}
export default connect (
  null,
  null
)(Home);
