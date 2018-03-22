import React, { PureComponent } from 'react';
import { connect } from  'react-redux';
import Auth from '../auth/Auth';
import './home.css';
import antelope from './antelope.jpg';

class Home extends PureComponent {

  render() {

    return (
      <div className="auth container">
        <Auth history={this.props.history}/>
        <section className="homeImage">
          <img src={antelope} alt={'landscape Arches national park'}/>
        </section>
      </div>
    );
  }
}
export default connect (
  null,
  null
)(Home);
