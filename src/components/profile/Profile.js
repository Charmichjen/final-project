import React, { PureComponent } from 'react';
import { connect } from 'react-redux'; 
import { loadProfile } from './actions';
import DetailGoal from '../detailGoal/DetailGoal';

class Profile extends PureComponent {

  componentDidMount() {
    const id = this.props.id;
    this.props.loadProfile(id);
  }

  render() {
    return (
      <div>
        <p> Profile is here</p>
        <DetailGoal/>
      </div>
      
    );
  }
}

export default connect (
  (state, props) => ({
    id: props.match.params.id
  }),
  { loadProfile }
)(Profile);