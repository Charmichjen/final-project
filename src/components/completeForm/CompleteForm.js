import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import fileSaver from 'file-saver';


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
       <form>
         <label htmlFor="date" >
           <input name="date" onChange={this.handleChange} value={date}/>
         </label>
         <label htmlFor="description" >
           <input name="description" onChange={this.handleChange} value={description}/>
         </label>
         <label htmlFor="location" >
           <input name="location" onChange={this.handleChange} value={location}/>
         </label>
         {/* <label htmlFor="image" >
           <input name="image" type="file" onChange={this.handleUpload} value={image}/>
         </label> */}
         <button>Submit</button>
       </form>
     );
   }
}

export default connect (
  null,
  null
)(CompleteForm);