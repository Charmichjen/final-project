import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../auth/actions';
import { Link } from 'react-router-dom';
import './header.css';


export class Header extends PureComponent {

  render() {
    const { user } = this.props;
    return (
      <div>
        <header className="mainHeader">
          <div className="topRow">
            <h1>The Bucket list</h1>

            {user && <div className="userInfo">
              <p>Hello, {user.displayName}</p>
              <h3><Link to='/' onClick={logOut}>Sign out</Link></h3>
            </div>}

          </div>
        </header>

        <div className="nav">
          {user && <section>
            <h2><Link to='/explore'>Explore</Link></h2>
            <h2><Link to='/dashboard'>Dashboard</Link></h2>
            <h2><Link to={`/profile/${user.uid}`}>Profile</Link></h2>
          </section>}
        </div>
        
      </div>
    );
  }
}

export default connect (
  state => ({ user: state.user }),
  { logOut }
)(Header);