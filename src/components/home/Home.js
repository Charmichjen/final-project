import React, { PureComponent } from 'react';
import { connect } from  'react-redux';
import Auth from '../auth/Auth';
import './home.css';

class Home extends PureComponent {

  render() {

    return (
      <div className="auth container">
        <Auth history={this.props.history}/>
      </div>
    );
  }
}
export default connect (
  null,
  null
)(Home);
