import React, { PureComponent } from 'react';
import { connect } from  'react-redux';
import Auth from '../auth/Auth';
import './home.css';


class Home extends PureComponent {

  render() {

    return (
      <div className="auth container">
        <div className="image-container">
          <Auth history={this.props.history}/>
          <p className="text">We are a place to help you realize your dreams.<br/>A place to find a path...</p>
        </div>
      </div>
    );
  }
}
export default connect (
  null,
  null
)(Home);
