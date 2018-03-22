import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class SharedGallery extends PureComponent {

  render() {
    const { sharedGoals } = this.props;
    return (
      <ul>
        {sharedGoals.map((goal, i) => {
          return <li key={i}>
            <Link to={`/goal/${goal.id}`}>{goal.name}</Link>
          </li>;
        })}
      </ul>
    );
  }
}

export default connect(state => ({
  sharedGoals: state.sharedGoals
}), 
null
)(SharedGallery);

