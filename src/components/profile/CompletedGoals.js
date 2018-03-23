import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './completedGoals.css';

class CompletedGoals extends PureComponent {

  render() {
    const { completedGoals, goals, uid } = this.props;
    return (
      <div className="profile-list">
        <section className="todo">
          <h2>Bucket List Goals</h2>
          <ul className="goalsTodo">
            {goals.map((goal, i) => {
              return <li key={i}><p>{goal.name}</p></li>;
            })}
          </ul>
        </section>
        <section className="completed">
          <h2>Completed Goals</h2>
          <ul className="completedImage">
            {completedGoals.map((goal, i) => {
              return <li key={i}>
                <Link to={`/completedgoal/${goal.id}/${uid}` }>
                  <article className="completedGoal">
                    <img src={goal.image}/>
                    <div className="headline">
                      <h2>{goal.name}</h2>
                    </div>
                  </article>
                </Link>
              </li>;
            })}
          </ul>
        </section>
      </div>
    );
  }
}

export default connect(state => ({
  completedGoals: state.completedGoals,
  goals: state.goals

}), 
null
)(CompletedGoals);

