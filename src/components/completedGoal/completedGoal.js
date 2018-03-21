import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Goal from '../goal/Goal';
import { image } from './completeForm/CompleteForm';


class CompletedGoal extends PureComponent {
  state = {
    image: '',
    goalName: ''
  };

  render() {

    return (
      <div>
         <Image/>
            <div>
              <Goal/>
            </div>
          </label>
        </form>
      </div>
    );
  }
}

export default connect (
  null
)(CompletedGoal);