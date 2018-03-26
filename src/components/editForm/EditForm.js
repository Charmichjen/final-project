import React, { PureComponent } from 'react';


export default class EditForm extends PureComponent{
  
  constructor(props){
    super(props);

    this.state = {
      text: ''
    };
  } 

  handleChange = ({ target }) => {
    this.setState({
      text: target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onEdit({
      ...this.state
    })
      // need to wait for this to succeed/fail
      .then(() => this.setState({ text: '' }));
  };

  render(){
    const { text } = this.state;
    
    return (
      <form className="editGoal" onSubmit={this.handleSubmit}>
        <input value={text} name="text" onChange={this.handleChange}/>
        <button type="submit">Update</button>
      </form>
    );
  }
}