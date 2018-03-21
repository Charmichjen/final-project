import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import fileSaver from 'file-saver';
import { addCompletedGoal } from './actions';


class CompleteForm extends PureComponent {
  state = {
    date: '',
    description: '',
    location: '',
    image: '',
    share: false
  };
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.addCompletedGoal(this.state);
  };
  
  handleToggle = () => {
    this.setState(prev => ({
      share: !prev.share
    }));
  };
  
  
  handleUpload({ target }) {
    const reader = new FileReader();
    reader.readAsDataURL(target.files[0]);
    reader.onLoad = () => {
  
      this.setState({ image: target.elements.image.files[0] });
    };
  }
  render() {
    const { date, description, location, image, share } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="date" >
          <input required name="date" onChange={this.handleChange} value={date}/>
        </label>
        <label htmlFor="description" >
          <input required name="description" onChange={this.handleChange} value={description}/>
        </label>
        <label htmlFor="location" >
          <input required name="location" onChange={this.handleChange} value={location}/>
        </label>
        <label htmlFor="image" >
          <input name="image" type="file" onChange={this.handleUpload} value={image}/>
        </label>
        <label htmlFor="share">
          <input name="share" type="checkbox" onChange={this.handleToggle} value={share}/>
        </label>
        <button type="submit">Submit</button>
        
      </form>
    );
  }
}

export default connect (
  null,
  { addCompletedGoal }
)(CompleteForm);