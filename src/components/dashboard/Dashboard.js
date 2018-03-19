import React, { PureComponent } from 'react';
import { connect } from  'react-redux';
import { newGoal } from './actions';

class Dashboard extends PureComponent {

  state = {
    goal: ''
  };

  handleChange = ({ target }) => {
    this.setState({
      goal: target.value
    });
  };
   
  handleSubmit = event => {
    event.preventDefault();

    const { goal } = this.state;
    // console.log(event.target.elements[0].value);
    // console.log(goal);
    this.props.newGoal(goal);
    this.setState({
      goal: ''
    });

  };

  render() {
    const { goal } = this.state;
    return (
      <div>
        <header><h1>Hello dashboard</h1></header>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={goal}/>
          <button>Add Goal</button>
        </form>
      </div>
    );
  }
}
export default connect (
  null,
  { newGoal }
)(Dashboard);
