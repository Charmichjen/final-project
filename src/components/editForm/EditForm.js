import React, { PureComponent } from 'react';

class EditForm extends PureComponent{
  
  constructor(props){
    super(props);

    this.state = {
      text: '',
      ...props
    };
  } 

  handleChange = ({ target }) => {
    this.setState({
      text: target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { text } = this.state;
    this.props.newGoal(text);
    this.props.getUserGoals(this.props.user.uid);
    this.setState({
      goal: ''
    });
  };

  render(){
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={text} name="text" onChange={this.handleChange}/>
        <button type="submit">Update</button>
      </form>
    );
  }
}