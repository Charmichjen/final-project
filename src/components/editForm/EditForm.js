import React, { PureComponent } from 'react';


export default class EditForm extends PureComponent{
  
  constructor(props){
    super(props);

    this.state = {
      name: ''
    };
  } 

  handleChange = ({ target }) => {
    this.setState({
      name: target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onEdit({
      ...this.state
    });
    this.setState({ text: '' });
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