import React, { PureComponent } from 'react';

export default class EditForm extends PureComponent{
  
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
    this.props.onEdit({
      ...this.state
    });
    this.setState({ text: '' });
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