import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { addCompletedGoal } from './actions';
import { storage, db } from '../../services/firebase'; 

const completeImages = storage.ref('images');

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
  
  handleSubmit = (event) => {
    event.preventDefault();
    const { elements } = event.target;
    const completed = { ...this.state };
    this.handleUpload(elements.image.files[0])
      .then(url => {
        completed.image = url;
        this.props.addCompletedGoal(completed);
      });
   
  };

  handleUpload(file, key) {
    const uploadTask = completeImages.child(db.ref('temp').push().key).put(file); 
   

    return new Promise((resolve, reject) => {
      uploadTask.on('state_changed', () => {
      }, 
      reject, 
      () => {
        const downloadUrl = uploadTask.snapshot.downloadURL;
        resolve(downloadUrl);
      });
    }); 
  }
  
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

  render() {
    const { date, description, location, share, image } = this.state;
    const { buttonText } = this.props;
  
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
        <div>
          <label htmlFor="image"> Add Picture:
            <input name="image" ref={(input) => { this.pictureInput = input; }} type="file"/>
            <img className="preview" src={image}/>
          </label>
        </div>
        <label htmlFor="share">
          <input name="share" type="checkbox" onChange={this.handleToggle} value={share}/>
        </label>
        <button type="submit">{buttonText}</button>
      </form>
    );
  }
}

export default connect (
  () => ({
    buttonText: 'addImage',
  }),
  { addCompletedGoal }
)(CompleteForm);