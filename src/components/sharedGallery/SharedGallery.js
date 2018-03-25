import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './sharedGallery.css';

class SharedGallery extends PureComponent {

  render() {
    
    const { sharedGoals } = this.props;
    
    return (
      <ul className="goalImage">
        
        {sharedGoals.map((goal, i) => {
          return <li key={i}>
            <Link to={`/goal/${goal.id}`}>
              <article className="galleryImage">
                <img src={goal.image}/>
                <div className="headline">
                  <h2>{goal.name}</h2>
                </div>
              </article>
            </Link>
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

