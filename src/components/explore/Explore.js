import React, { PureComponent } from 'react';
import { connect } from 'react-redux'; 
import { getSharedGoals } from './actions';
import { Link } from 'react-router-dom';

class Explore extends PureComponent {

  componentWillMount() {
    this.props.getSharedGoals();
  }

  render() {
    const { sharedGoals } = this.props;
    return (
      <ul>
        {sharedGoals.map((goal, i) => { 
          return <li key={i}>
            <Link to={`/profile/${goal.uid}`}>{goal.uid}</Link>
          </li>;

        })}
      </ul>
    );
  }
}

export default connect (state => ({
  sharedGoals: state.sharedGoals
}),
{ getSharedGoals }
)(Explore);