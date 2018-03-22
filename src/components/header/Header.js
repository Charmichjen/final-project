import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../auth/actions';
import { Link } from 'react-router-dom';


export class Header extends PureComponent {

  render() {
    const { user } = this.props;
    return (
      <header>
        <h1>The Bucket list</h1>
        <div>
          {user && <p>{user.displayName}</p>}
          <Link to='/' onClick={logOut}>Sign out</Link>
        </div>
        <div>
          <Link to='/explore'>Explore</Link>
          &nbsp;<Link to='/dashboard'>Dashboard</Link>
          &nbsp;{user && <Link to={`/profile/${user.uid}`}>Profile</Link>}
        </div>
      </header>
    );
  }
}

export default connect (
  state => ({ user: state.user }),
  { logOut }
)(Header);