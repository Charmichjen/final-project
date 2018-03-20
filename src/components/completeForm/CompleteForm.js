import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import fileSaver from 'file-saver';
import { addCompletedGoal } from './actions';


class CompleteForm extends PureComponent {
   state = {
     date: '',
     description: '',
     location: '',
     image: []
   };

   handleChange = ({ target }) => {
     this.setState({ [target.name]: target.value });
   };

   handleSubmit = event => {
     event.preventDefault();
     console.log('This shizzz was called');
     this.props.addCompletedGoal(this.state);
   };



   handleUpload({ target }) {
     const reader = new FileReader();
     reader.readAsDataURL(target.files[0]);
     reader.onLoad = () => {
       this.setState({ image: reader.result });
     };
   }
   render() {
     const { date, description, location } = this.state;

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
         {/* <label htmlFor="image" >
           <input name="image" type="file" onChange={this.handleUpload} value={image}/>
         </label> */}
         <button type="submit">Submit</button>
       </form>
     );
   }
}

export default connect (
  null,
  { addCompletedGoal }
)(CompleteForm);